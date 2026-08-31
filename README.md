# M4ZK1pLay Agent

**M4ZK1pLay Agent** adalah asisten AI keamanan siber dan full-stack development untuk Android. Aplikasi ini dirancang **local-first** dengan pendekatan **BYOK (Bring Your Own Key)**: setiap pengguna memasukkan API key OpenRouter miliknya sendiri, lalu aplikasi mengakses OpenRouter secara langsung melalui HTTPS.

> Gunakan aplikasi hanya pada sistem, aplikasi, akun, dan jaringan yang kamu miliki atau yang secara eksplisit memberi izin pengujian.

## Ringkasan Fitur

| Area | Implementasi |
|---|---|
| Dashboard | Status key, mode aktif, model, quick actions, safety brief |
| Chat AI | Percakapan mobile, multiline composer, loading state, konteks mode |
| OpenRouter | Katalog model dinamis dan chat completion langsung dari perangkat |
| Keamanan credential | `expo-secure-store` pada Android Keystore/iOS Keychain; tidak masuk log atau repository |
| Mode kerja | Cyber, Bug Bounty, dan Developer |
| Bug bounty | Target, scope, out-of-scope, dan restriction tersimpan lokal |
| GitHub tools | Membuka pencarian repository publik secara manual; tidak mengeksekusi kode |
| Privasi | Tidak ada developer key, API proxy, Firebase, Supabase, atau backend AI wajib |

## Arsitektur

```text
Android APK
   │
   ├── UI React Native / Expo Router
   ├── AsyncStorage: preferensi non-sensitif
   └── SecureStore: OpenRouter API key
          │ HTTPS langsung
          ▼
   https://openrouter.ai/api/v1
          │
          ▼
      Model yang dipilih pengguna
```

Kunci API tidak ditulis ke Kotlin/Java, BuildConfig, strings, assets, manifest, database, atau Git. Di Android, SecureStore menggunakan Android Keystore sebagai bagian dari penyimpanan terenkripsi perangkat. Pada preview web, fallback `localStorage` hanya untuk demonstrasi dan **tidak boleh dianggap setara dengan secure storage native**.

## Teknologi

Aplikasi menggunakan Expo SDK 54, React Native 0.81, React 19, TypeScript, Expo Router, NativeWind, Axios, AsyncStorage, dan Expo SecureStore. Proyek ini menggunakan orientasi portrait dan target Android dengan minimum SDK 24.

## Prasyarat

Pengembangan memerlukan Node.js 22+, pnpm, dan Expo CLI melalui dependensi proyek. Untuk instalasi lokal, jalankan `pnpm install`. Preview web dapat dijalankan dengan `pnpm dev:metro`, sedangkan pemeriksaan tipe dijalankan dengan `pnpm check`.

## Instalasi dan Menjalankan

```bash
pnpm install
pnpm check
pnpm lint
pnpm test
pnpm dev
```

Untuk memakai aplikasi pada perangkat Android melalui Expo Go, jalankan `pnpm android` atau gunakan QR yang disediakan oleh lingkungan Expo. Build APK release dilakukan melalui workflow build/publish pada UI proyek agar konfigurasi dan artefak Android dikelola secara konsisten.

## Konfigurasi OpenRouter

Buka `Settings` → `OpenRouter BYOK`, masukkan key OpenRouter milikmu, lalu tekan `Simpan key`. Aplikasi hanya menyimpan key pada secure storage. Setelah key tersimpan, buka `Tools` → `Model browser` dan tekan refresh untuk membaca katalog model. Pilih model yang diinginkan; pilihan tersebut disimpan sebagai preferensi lokal.

Aplikasi tidak menyediakan key bersama. Jangan pernah memasukkan key ke issue, commit, screenshot, log, atau file konfigurasi yang di-commit.

## Mode Keamanan

`Cyber` digunakan untuk pertanyaan keamanan defensif umum, analisis kerentanan, incident response, threat hunting, secure coding, dan digital forensics. `Bug Bounty` menyimpan batas target dan scope agar percakapan memiliki konteks berizin. `Developer` mengarahkan percakapan ke rekayasa perangkat lunak, API, database, cloud, Android, CI/CD, dan DevSecOps.

Persona AI mengutamakan edukasi defensif, lab terisolasi, proof-of-concept yang aman, detection engineering, mitigasi, dan remediation. Permintaan intrusion tanpa izin, credential theft, destructive malware, atau persistence berbahaya harus dialihkan ke alternatif yang aman.

## Struktur Proyek

| Path | Kegunaan |
|---|---|
| `app/(tabs)/index.tsx` | Dashboard, chat, tools, dan settings |
| `lib/storage.ts` | SecureKeyStorage dan preferensi lokal |
| `lib/openrouter.ts` | Client `/models` dan `/chat/completions` |
| `components/ui/icon-symbol.tsx` | Mapping ikon Material Icons |
| `theme.config.js` | Token warna NativeWind |
| `app.config.ts` | Identitas, ikon, splash, dan Android config |
| `design.md` | Rencana desain layar dan alur pengguna |
| `todo.md` | Riwayat pekerjaan dan checklist delivery |

## Keamanan dan Batasan

Aplikasi ini tidak menggantikan pemeriksaan keamanan profesional. Respons AI dapat salah, tidak lengkap, atau memerlukan verifikasi manual. Jangan mengirim rahasia, data pribadi, source code proprietary, token, atau bukti sensitif ke model tanpa memahami kebijakan provider. Model OpenRouter dan kebijakan retensi ditentukan oleh provider/model yang dipilih pengguna.

GitHub Search membuka URL publik menggunakan browser perangkat. Aplikasi tidak mengunduh atau menjalankan kode repository secara otomatis. Semua pengujian harus mengikuti hukum, kebijakan program, dan scope tertulis.

## Pengujian

Pemeriksaan minimum sebelum release adalah `pnpm check`, `pnpm lint`, `pnpm test`, pemeriksaan tidak adanya secret dengan `git grep`, dan validasi konfigurasi Expo. Pengujian manual harus mencakup disclaimer first launch, simpan/hapus key, refresh model, pilih model, pengiriman chat, mode Bug Bounty, penyimpanan scope, navigasi tab, dan pembukaan GitHub Search.

## Lisensi dan Atribusi

Kode proyek dilisensikan sesuai berkas `LICENSE`. M4ZK1pLay Agent menggunakan branding orisinal dan tidak mengklaim afiliasi dengan OpenRouter, OpenAI, Anthropic, GitHub, atau vendor model lain.

## Kontak dan Pelaporan Masalah

Laporkan bug dengan langkah reproduksi, perangkat/versi Android, log yang sudah disanitasi, dan ekspektasi versus hasil aktual. Jangan menyertakan API key atau data pengguna. Rujuk `BACA.md` untuk panduan penggunaan yang lebih rinci.
