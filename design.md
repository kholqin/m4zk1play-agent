# Rencana Desain Antarmuka M4ZK1pLay Agent

## Arah Produk

M4ZK1pLay Agent adalah asisten AI untuk keamanan siber defensif dan pengembangan perangkat lunak. Desain menggunakan orientasi portrait 9:16, navigasi yang nyaman dengan satu tangan, hierarki visual khas aplikasi iOS, serta estetika dark cyber-console yang orisinal.

## Daftar Layar

| Layar | Konten utama | Fungsi |
|---|---|---|
| Disclaimer | Penjelasan penggunaan yang sah, defensif, dan berizin | Persetujuan pertama kali atau keluar |
| Dashboard | Status API key, model aktif, mode kerja, ringkasan keamanan, pintasan cepat | Titik masuk dan pemantauan status |
| Chat | Percakapan, input multiline, model aktif, tombol kirim/stop | Mengirim prompt dan membaca respons AI |
| Modes | Bug Bounty Mode dan Developer Mode | Memilih konteks kerja dan batasan |
| Bug Bounty Scope | Target, scope, out-of-scope, restrictions | Menyimpan konteks pengujian berizin secara lokal |
| Model Browser | Pencarian, daftar model, detail model, refresh | Memilih model OpenRouter secara dinamis |
| GitHub Search | Form pencarian publik, hasil repository | Menampilkan metadata repositori tanpa mengeksekusi kode |
| Settings | OpenRouter key, endpoint status, bahasa, reset disclaimer | Mengelola konfigurasi dan privasi |
| About & Safety | Brand, versi, batasan, atribusi, kebijakan penggunaan | Informasi produk dan keselamatan |

## Struktur Dashboard

Bagian atas menampilkan wordmark **M4ZK1pLay Agent**, status koneksi lokal, serta model yang sedang dipilih. Kartu hero memakai aksen cyan elektrik dengan label `SYSTEM READY` atau `KEY REQUIRED`. Di bawahnya terdapat empat kartu metrik ringkas: mode aktif, model, percakapan lokal, dan status key. Bagian `Quick actions` berisi tombol Chat, Bug Bounty, Developer, dan Models dalam grid dua kolom yang mudah disentuh ibu jari.

Bagian bawah menampilkan `Safety brief` berwarna amber gelap yang mengingatkan agar pengujian hanya dilakukan pada aset berizin. Tab bar berisi Dashboard, Chat, Tools, dan Settings; setiap tombol memiliki ikon yang dipetakan terlebih dahulu pada komponen ikon.

## Gaya Visual

| Elemen | Pilihan |
|---|---|
| Latar | `#070B12` dengan panel `#0E1621` dan lapisan sekunder `#111D2A` |
| Aksen primer | Cyan elektrik `#35D7FF` |
| Aksen sekunder | Violet keamanan `#8B5CF6` |
| Status berhasil | Mint `#43F0B5` |
| Peringatan | Amber `#F6B94A` |
| Bahaya | Coral `#FF6B7A` |
| Teks utama | `#F4F8FC` |
| Teks sekunder | `#8EA4B8` |
| Garis | `#1D3043` |
| Bentuk | Radius 16–24, border tipis, shadow rendah, tanpa glass blur berlebihan |

Ikon aplikasi berupa simbol abstrak garuda geometris yang dibangun dari sayap cyan dan pusat violet di atas latar hitam, tanpa logo perusahaan pihak ketiga dan tanpa teks kecil yang sulit dibaca pada launcher.

## Alur Pengguna Utama

### Persetujuan awal

Pengguna membuka aplikasi → membaca disclaimer → mengetuk `I Understand` → aplikasi menyimpan acknowledgement lokal → pengguna masuk ke Dashboard. Jika memilih `Exit`, aplikasi menampilkan layar penutup yang aman.

### Menyiapkan OpenRouter BYOK

Pengguna membuka Settings → OpenRouter → memasukkan API key → mengetuk Save → key disimpan melalui SecureStore/Android Keystore → aplikasi hanya menampilkan status tersamarkan → pengguna membuka Models → aplikasi mengambil katalog model melalui HTTPS ketika key tersedia.

### Chat

Pengguna membuka Chat → memilih mode dan model → menulis pertanyaan → mengetuk Send → aplikasi menampilkan state loading/streaming → pengguna dapat Stop → respons ditambahkan ke percakapan lokal tanpa pernah mencatat API key.

### Bug Bounty Mode

Pengguna membuka Modes → memilih Bug Bounty → mengisi target, scope, out-of-scope, dan restrictions → mengetuk Save scope → aplikasi menampilkan scope aktif pada Chat → prompt dikirim dengan konteks keselamatan dan batasan yang sudah dinyatakan.

### GitHub Search

Pengguna membuka Tools → GitHub Search → menulis kata kunci → mengetuk Search → aplikasi menampilkan nama, deskripsi, bahasa, stars, forks, waktu pembaruan, dan URL → pengguna membuka URL resmi secara manual. Aplikasi tidak mengeksekusi kode repository.

## Prinsip Implementasi

Semua layar memakai `ScreenContainer`, kontrol sentuh memiliki feedback opacity/scale, daftar panjang memakai `FlatList`, warna dikelola melalui token tema, dan state non-sensitif dipersistenkan dengan AsyncStorage. API key hanya berada di SecureStore pada Android/iOS; fallback web diberi label sebagai penyimpanan non-secure untuk pengujian preview.
