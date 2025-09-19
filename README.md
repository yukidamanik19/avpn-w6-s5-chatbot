---

# Proyek Chatbot Sederhana dengan Gemini API

Aplikasi web chatbot sederhana yang ditenagai oleh Google Gemini API, dibangun dengan backend Node.js/Express dan frontend Vanilla JavaScript murni.


*(Anda bisa mengganti gambar di atas dengan screenshot atau GIF dari proyek Anda)*

## Deskripsi

Proyek ini adalah implementasi chatbot dasar yang memungkinkan pengguna berinteraksi dengan model AI Google Gemini. Backend yang dibangun dengan Node.js dan Express berfungsi sebagai perantara untuk berkomunikasi dengan Gemini API secara aman, sementara frontend yang ringan dan tanpa *framework* (Vanilla JS) menyediakan antarmuka chat yang responsif.

Tujuan utama proyek ini adalah untuk menunjukkan bagaimana cara mengintegrasikan AI generatif ke dalam aplikasi web dengan tumpukan teknologi yang populer dan minimalis.

## Teknologi yang Digunakan

-   **Frontend**:
    -   HTML5
    -   CSS3
    -   JavaScript (Vanilla)
-   **Backend**:
    -   Node.js
    -   Express.js
-   **AI**:
    -   Google Gemini API

## Fitur

-   **Antarmuka Chat Interaktif**: Tampilan chat yang bersih dan sederhana untuk mengirim dan menerima pesan.
-   **Komunikasi Real-time (Simulasi)**: Pesan pengguna langsung ditampilkan, diikuti oleh indikator "Thinking..." saat menunggu balasan dari AI.
-   **Integrasi Gemini API**: Backend menangani permintaan dari frontend dan meneruskannya ke Google Gemini API untuk mendapatkan respons cerdas.
-   **Penanganan Error Dasar**: Memberikan umpan balik kepada pengguna jika terjadi kegagalan saat mengambil respons dari server.
-   **Desain Minimalis**: Fokus pada fungsionalitas inti tanpa ketergantungan pada *library* atau *framework* eksternal di sisi frontend.

## Dokumentasi API

Proyek ini memiliki satu endpoint API untuk menangani percakapan.

-   **Endpoint**: `POST /api/chat`
-   **Deskripsi**: Mengirim pesan pengguna ke backend untuk diproses oleh Gemini API.
-   **Request Body**:
    ```json
    {
      "conversation": [
        {
          "role": "user",
          "message": "<pesan_dari_pengguna>"
        }
      ]
    }
    ```
-   **Success Response**:
    ```json
    {
      "sucess": true,
      "data": "<jawaban_dari_gemini_ai>",
      "message": null
    }
    ```

## Cara Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/nama-anda/nama-repositori.git
    cd nama-repositori
    ```

2.  **Install dependensi backend:**
    ```bash
    npm install
    ```

3.  **Konfigurasi environment variable:**
    -   Buat file `.env` di direktori root proyek.
    -   Tambahkan kunci API Google Gemini Anda ke dalam file tersebut. Dapatkan API Key Anda dari [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```
    GOOGLE_API_KEY="MASUKKAN_API_KEY_ANDA_DI_SINI"
    ```

4.  **Jalankan server backend:**
    ```bash
    npm start
    ```
    Atau jika Anda menggunakan `nodemon`:
    ```bash
    npm run dev
    ```

5.  **Buka aplikasi di browser:**
    Buka browser Anda dan navigasikan ke `http://localhost:3000` (atau port lain yang Anda konfigurasikan di server Express).
