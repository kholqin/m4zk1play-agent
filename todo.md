# Project TODO

- [x] Ganti template dengan dashboard dark cyberpunk M4ZK1pLay Agent
- [x] Tambahkan disclaimer first-launch dan acknowledgement lokal
- [x] Implementasikan navigasi Dashboard, Chat, Modes, Tools, Models, Settings, dan About
- [x] Implementasikan SecureKeyStorage berbasis SecureStore/Android Keystore untuk OpenRouter BYOK
- [x] Implementasikan client OpenRouter untuk `/models` dan `/chat/completions` tanpa developer API key
- [x] Tambahkan pemilihan model dinamis dan persistensi model lokal
- [x] Tambahkan Bug Bounty Mode dengan scope dan guardrail defensif
- [x] Tambahkan Developer Mode dan prompt persona teknis berbahasa Indonesia
- [x] Tambahkan GitHub public search yang tidak mengeksekusi kode
- [x] Buat ikon aplikasi orisinal dengan tema gelap
- [x] Salin ikon ke seluruh lokasi asset Expo yang diwajibkan
- [x] Perbarui app.config.ts dengan nama aplikasi dan logo URL
- [x] Perbarui token tema, tab icons, dan konfigurasi splash dark
- [x] Tulis README.md yang rinci
- [x] Tulis CHANGELOG.md
- [x] Tulis LICENSE
- [x] Tulis BACA.md sebagai panduan penggunaan dan arsitektur
- [x] Jalankan TypeScript check, lint, test, dan pemeriksaan konfigurasi Expo
- [ ] Build APK Android release dan verifikasi artefaknya
- [x] Buat repository GitHub privat
- [x] Commit seluruh source dan dokumentasi
- [ ] Buat GitHub release dengan APK sebagai asset
- [ ] Lakukan pemeriksaan akhir untuk error, bug yang terlihat, secret, dan link release

- [x] Jadikan `openai/gpt-4o` sebagai model default tanpa menyimpan API key pengguna di source
- [x] Pastikan katalog model OpenRouter dimuat dinamis dari `/models`, bukan daftar hardcode 516 model
- [x] Tambahkan catatan bahwa API key yang dibagikan harus dicabut/dirotasi oleh pemiliknya
- [x] Validasi ulang source, secret scan, checkpoint, dan sinkronisasi repository setelah perubahan OpenRouter

- [x] Gunakan implementasi `fetch` langsung ke OpenRouter `/chat/completions` dengan header API key dari SecureStore, tanpa hardcode key
- [x] Pertahankan pemuatan seluruh katalog model yang tersedia secara dinamis melalui `/models`
- [x] Validasi ulang request fetch, tipe respons, secret scan, dan checkpoint setelah perubahan

- [x] Tambahkan layar Model Availability yang menampilkan katalog model aktual dari OpenRouter
- [x] Tampilkan status loading, error, jumlah model, pencarian, refresh, dan model aktif
- [x] Pastikan pilihan model yang tersedia tersimpan lokal dan tidak mengandung API key
- [x] Validasi fitur Model Availability dan simpan checkpoint terbaru
