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
    image: 'gemini-2.5-flash',
    audio: 'gemini-2.5-flash',
    document: 'gemini-2.5-flash-lite'
};

//inisialisasi aplikasi back-end/server
app.use(cors());
// app.use(() => {});
app.use(express.json());

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

    res.status(200).send({
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

// panggill si app-nya disini
const port = 3000;

app.listen(port, () => {
    console.log("I LOVE YOU", port);
})