# BACA — Panduan Lengkap M4ZK1pLay Agent

## Apa aplikasi ini?

M4ZK1pLay Agent adalah workspace AI di Android untuk membantu keamanan siber defensif dan pengembangan software. Aplikasi menghubungkan perangkat secara langsung ke OpenRouter memakai API key yang kamu masukkan sendiri. M4ZK1pLay tidak menyediakan akun, key bersama, atau server proxy AI.

## Langkah pertama

Pada peluncuran pertama, baca disclaimer lalu pilih `I Understand` jika kamu menyetujui penggunaan berizin. Tombol `Exit` tidak mematikan proses Android secara paksa; tombol itu hanya menjelaskan bahwa aplikasi dapat ditutup melalui sistem operasi.

Masuk ke `Settings`, tempel API key OpenRouter, dan tekan `Simpan key`. Key tidak ditampilkan ulang setelah disimpan. Jika kamu ingin mengganti key, isi field yang sama dengan key baru. Jika ingin menghapusnya, tekan `Hapus`.

## Memilih model

Buka `Tools` dan tekan refresh pada bagian `Model browser`. Jika jaringan dan key valid, aplikasi mengambil model dari endpoint OpenRouter. Gunakan field pencarian untuk mempersempit hasil, lalu tekan baris model untuk menjadikannya aktif. Model aktif tampil pada metadata Chat dan kartu Dashboard.

## Menggunakan Chat

Buka tab `Chat`, pastikan mode serta model sudah sesuai, tulis pertanyaan di composer, kemudian tekan tombol kirim. Pertanyaan dan jawaban ditampilkan sebagai bubble terpisah. Jika request gagal, periksa jaringan, saldo/izin key pada OpenRouter, serta id model. Jangan memasukkan API key ke prompt.

## Bug Bounty Mode

Pilih `Bug bounty` pada tab Tools. Isi program atau target, aset yang termasuk scope, aset yang dikecualikan, dan batasan testing. Simpan scope sebelum memulai Chat. Informasi ini hanya menjadi konteks lokal dan tidak membuktikan bahwa kamu memiliki izin; izin tetap harus berasal dari program atau pemilik aset.

## Developer Mode

Mode Developer mengarahkan percakapan ke HTML, CSS, JavaScript, TypeScript, React, Next.js, backend, API, database, Docker, CI/CD, Android, Kotlin, dan DevSecOps. Tetap verifikasi kode sebelum menjalankannya dan jangan menyalin secret ke percakapan.

## Aturan aman

> Jangan melakukan scanning, eksploitasi, persistence, credential testing, atau perubahan data pada aset yang tidak kamu miliki atau tidak secara eksplisit mengizinkan aktivitas tersebut.

Untuk malware, gunakan aplikasi untuk analisis statis, IOCs, YARA/Sigma, detection engineering, containment, dan remediation. Hindari meminta payload deployable untuk target nyata. Untuk bug bounty, ikuti scope, rate limit, out-of-scope, disclosure policy, dan kanal laporan program.

## Privasi

Preferensi seperti mode, model, disclaimer, dan scope disimpan lokal. API key disimpan melalui SecureStore native. Percakapan pada rilis ini berada dalam state aplikasi dan dikirim ke provider ketika kamu menekan Send. Provider model dapat memiliki kebijakan logging dan retention sendiri; pelajari kebijakan provider sebelum mengirim data sensitif.

## Troubleshooting

| Masalah | Tindakan |
|---|---|
| Dashboard menampilkan `KEY REQUIRED` | Simpan key yang valid di Settings |
| Model tidak muncul | Pastikan key, koneksi HTTPS, dan permission provider valid; tekan refresh |
| Chat gagal | Cek model aktif, key, jaringan, dan respons provider |
| Ikon terlihat lama | Reinstall build Android setelah asset ikon baru masuk |
| Disclaimer muncul lagi | Data aplikasi kemungkinan dihapus atau preference belum tersimpan |
| Web preview menolak SecureStore | Web memakai fallback non-secure hanya untuk preview; gunakan APK untuk secure storage sebenarnya |

## Verifikasi sebelum release

Jalankan `pnpm check`, `pnpm lint`, dan `pnpm test`. Pastikan `git grep` tidak menemukan pola key rahasia, tinjau diff, lalu uji pada perangkat fisik. Uji seluruh tombol: acknowledgement, tab bar, save/delete key, refresh/select model, send chat, mode chips, save scope, GitHub Search, dan About.

## Disclaimer

AI bukan otoritas hukum, auditor, atau pengganti profesional keamanan. Respons dapat keliru atau berbahaya bila diterapkan tanpa verifikasi. Kamu bertanggung jawab atas legalitas, otorisasi, keamanan data, dan setiap tindakan yang dilakukan berdasarkan output aplikasi.
