import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import express from "express";
import multer from "multer";
import fs from "fs/promises";
import cors from "cors";
import { type } from "os";

const app = express();
const upload = multer();
const ai = new GoogleGenAI({});

//inisialisasi model AI
const geminiModels = {
    text: 'gemini-2.5-flash-lite',
    chat: 'gemini-2.5-pro',
    image: 'gemini-2.5-flash',
    audio: 'gemini-2.5-flash',
    document: 'gemini-2.5-flash-lite'
};

//inisialisasi aplikasi back-end/server
app.use(cors()); // .use() --> panggil/bikin middleware
// app.use(() => {}); --> pakai middleware sendiri
app.use(express.json());
app.use(express.static('static')); // ketika diakses di http://localhost:[PORT]

//inisialisasi route-nya
app.post('/generate-text', async (req, res) => {
    //handle bagaimana request diterima oleh user
    const { message } = req.body || {}; // object destructuring

    if (!message || typeof message !== 'string') {
        return res.status(400).json({message:"Pesan tidak ada atau formatnya tidak sesuai."});
         // keluar lebih awal dari handler
    }

    // logic dimulai disini
    const response = await ai.models.generateContent({
        model: geminiModels.text,
        contents: message,
    });

    res.status(200).json({
        reply: response.text
    });

});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Siapa presiden indonesia sekarang?",
//   });
//   console.log(response.text);
// }

// await main();

app.post('/chat', async (req, res) => {
    const { conversation } = req.body;

    // guard clause 1 -- cek conversation-nya itu array atau bukan
    if (!conversation || !Array.isArray(conversation)) {
        res.status(400).json({
            success: false,
            data: null,
            message : "Percakapan tidak valid!"
        });
    }

    // guard clause 2 -- cek integritas data-nya
    let dataIsInvalid = false; // semantic

    [].forEach(item => {
        if (!item) {
            dataIsInvalid = true;
        } else if (typeof item !== 'object') {
            dataIsInvalid = true;
        } else if (!item.role || !item.message) {
            dataIsInvalid = true;
        }
    });

    if (dataIsInvalid) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Ada data yang invalid pada percakapan yang dikirim"
        });
    }

    // Mapping
    const contents = conversation.map(item => {
        return {
            role: item.role,
            parts: [
                { text: item.message}
            ]
        }
    });

    try {
        const aiResponse = await ai.models.generateContent({
            model: geminiModels.chat,
            contents // object property shorthand
        });

        return res.status(200).json({
            success: true,
            data: aiResponse.text,
            message: null
        });
    } catch (e) {
        console.log({ e });
        return res.status(e.code || 500).json({
            sucess: false,
            data: null,
            message: e.message
        });
    }
});

// panggill si app-nya disini
const port = 3000;

app.listen(port, () => {
    console.log("I LOVE YOU", port);
})