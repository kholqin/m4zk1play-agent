# Changelog

Semua perubahan penting pada M4ZK1pLay Agent dicatat di dokumen ini. Format mengikuti prinsip Keep a Changelog dan versi menggunakan Semantic Versioning.

## [Unreleased]

### Rencana berikutnya

Pengembangan lanjutan dapat mencakup streaming SSE yang lebih granular, ekspor percakapan, dukungan attachment dengan sanitasi, pengujian integrasi OpenRouter yang dimock, serta pencarian GitHub berbasis API publik dengan rate-limit handling.

## [1.0.0] — 2026-08-31

### Added

Rilis awal aplikasi Android M4ZK1pLay Agent dengan dashboard keamanan siber dark cyber-console, status `SYSTEM READY`/`KEY REQUIRED`, kartu workspace, quick actions, safety brief, dan tab bar Dashboard, Chat, Tools, serta Settings.

Ditambahkan disclaimer first-launch berbahasa Indonesia yang meminta acknowledgement sebelum masuk ke aplikasi. Acknowledgement disimpan sebagai preferensi lokal dan tidak memerlukan akun.

Ditambahkan chat interface dengan pesan assistant/user, multiline input, state pengiriman, pemilihan mode, serta request chat completion ke OpenRouter melalui HTTPS. Persona sistem memprioritaskan aktivitas defensif, authorized testing, lab, bug bounty berizin, secure development, dan remediation.

Ditambahkan OpenRouter client untuk `GET /models` dan `POST /chat/completions`. Katalog model tidak di-hardcode sebagai daftar utama; pengguna dapat refresh, mencari, dan memilih model dari hasil endpoint.

Ditambahkan `SecureKeyStorage` dengan metode `saveApiKey`, `getApiKey`, `deleteApiKey`, dan `hasApiKey`. Native Android/iOS menggunakan Expo SecureStore; web preview memiliki fallback yang diberi batasan keamanan secara eksplisit.

Ditambahkan Cyber, Bug Bounty, dan Developer mode. Bug Bounty menyimpan target, in-scope, out-of-scope, dan restrictions secara lokal serta memasukkan konteks tersebut ke prompt.

Ditambahkan tombol GitHub public search yang hanya membuka pencarian resmi pada browser dan tidak mengeksekusi kode repository.

Ditambahkan branding aplikasi, dark splash, token warna cyan/violet/obsidian, serta mapping ikon navigasi baru.

Ditambahkan dokumentasi `README.md`, `BACA.md`, `design.md`, `LICENSE`, dan `todo.md`.

### Security notes

Tidak ada developer API key, API proxy, Firebase, Supabase, atau endpoint backend AI di rilis awal. Credential tidak ditulis ke source, database, log, assets, atau Git. Pengguna tetap bertanggung jawab atas izin dan dampak pengujian.

[Unreleased]: https://github.com/m4zk1play/m4zk1play-agent/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/m4zk1play/m4zk1play-agent/releases/tag/v1.0.0
