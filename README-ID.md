<p align="right">
  <a href="README-ID.md"><img src="https://img.shields.io/badge/ID-2ea44f?style=for-the-badge" alt="ID"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/EN-lightgrey?style=for-the-badge" alt="EN"></a>
</p>

# Anti AI Slop: Design & Copy Rules

![banner](./assets/banner.png)

> Aturan desain untuk menghentikan AI coding agent menghasilkan UI generik ("AI slop") tanpa menjadi steril. Berisi 38 rules dalam tiga tingkat, Liveliness Toolkit, dan delivery gate mandatori.

> **Coming soon:** ANTISLOP v3.0.0, skill yang bisa di-install dan di-plugin ke CLI agent (Claude Code, Codex, Cursor, dll). Target rilis akhir Q3 2026.

---

## Apa Ini?

`ANTISLOP.md` adalah dokumen rules spesialis untuk pekerjaan desain UI/UX, yang dirancang **dibaca on-demand** oleh AI coding agent, bukan didorong paksa ke setiap sesi kerja apapun task-nya. File ini berisi:

- **Bagian 1:** Tanda-tanda peringatan AI slop (gradient biru-ungu generik, glassmorphism berlebihan, buzzword marketing, dsb.); pemindaian diagnostik, bukan daftar larangan
- **Bagian 2:** 38 rules wajib (R-01 s/d R-38) yang dikelompokkan ke dalam tiga tingkat: Hard Gate (mutlak), Purpose-Gate (teknik diperbolehkan, alasan wajib), Quality Locks (konsistensi)
- **Bagian 3:** Liveliness Toolkit dengan tiga dial (ENERGI / RITME / GERAK), tuas positif, dan Pembacaan Desain untuk menetapkan arah sebelum generate
- **Standar Craftsmanship:** lima kriteria kualitas yang netral terhadap selera (intentionality, kelengkapan fungsional, komposisi berbasis konten, ketahanan, bukti di atas klaim)
- **Pola Fungsional:** makna konkret dari "tombol yang berfungsi" untuk landing page statis
- **Checklist:** Delivery Gate mandatori dalam empat blok (Hard / Purpose-Gate / Liveliness / Craftsmanship & Quality Locks) yang dilaporkan sebagai status PASS/FAIL dengan bukti konkret per item, dijalankan sebelum menyerahkan hasil

> `ANTISLOP.md` adalah **filter, bukan style guide**. Ia tidak memaksakan aesthetic: tidak ada warna, font, atau layout yang ditentukan. Ia tidak melarang teknik visual; ia menolak teknik tanpa tujuan dan menuntut liveliness (Bagian 3). Preferensi desain dan arah brand milik kamu.
>
> `ANTISLOP.md` adalah **filter** dalam setup 3 file: `DESIGN.md` (milikmu) menyediakan arah dan membuat hasil terasa hidup, `AGENTS.md` (milikmu) merutekan agent untuk membaca keduanya. File ini sendiri hanya mencegah slop, tidak bisa menciptakan arah; hasil steril berarti arahnya hilang atau liveliness tidak ditambahkan, bukan filter yang gagal.

---

## Cara Pakai: Sistem 3 File

`ANTISLOP.md` bekerja bersama dua file yang kamu miliki:

```
Project root/
├── AGENTS.md (atau CLAUDE.md, GEMINI.md, dsb.)    # router: memberitahu agent apa yang harus dibaca
├── DESIGN.md                                      # arah: jiwa UI kamu (milikmu)
└── ANTISLOP.md                                    # filter: dari repo ini
```

- **`AGENTS.md`** (atau `CLAUDE.md`, `GEMINI.md`, dsb.) adalah file entry point yang **selalu** dibaca agent di awal sesi. Ia merutekan agent ke file yang dibutuhkan sesuai task.
- **`DESIGN.md`** adalah arah style kamu: identitas, personality, palette, typography, mood. Ia yang membuat hasil terasa hidup dan spesifik. Cara mengisinya urusan kamu: tulis sendiri, atau bangun dari referensi visual yang kamu temukan di internet, sesuaikan dengan style dan selera masing-masing.
- **`ANTISLOP.md`** adalah filter. Ia menghentikan pola slop di atas arah apa pun yang ditetapkan `DESIGN.md`. Ia tidak bisa menciptakan arah dengan sendirinya; hasil steril berarti arahnya hilang atau liveliness tidak ditambahkan, bukan filter yang gagal.

Taruh `ANTISLOP.md` di lokasi yang sama dengan rules file lain di project kamu (root, `.agent/`, `.ai/`, atau direktori serupa), lalu tambahkan **satu blok pointer** di file entry point yang sudah ada (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, dsb.):

```md
## Desain & UI
Jika tugas melibatkan membuat atau mengedit tampilan UI/UX, baca `DESIGN.md`
(arah style) lalu `ANTISLOP.md` (filter). Sebelum mulai, tanyakan ke user
kapan ANTISLOP dipakai (selama pengerjaan, atau setelah selesai) dan jangan
mulai sebelum user menjawab.
```

Kenapa pola ini lebih baik daripada digabung langsung:

- **Hemat context:** rules desain sepanjang ratusan baris ini hanya di-load kalau memang relevan, tidak ikut menumpuk di task backend/non-UI
- **Gampang dirawat:** update `ANTISLOP.md` atau `DESIGN.md` tidak perlu mengubah file entry point project
- **Portable:** file `ANTISLOP.md` yang sama bisa dipakai lintas project cukup dengan menyalin filenya dan menambah 1 blok pointer

### Arah dan liveliness

`DESIGN.md` menetapkan arah; Bagian 3 dari `ANTISLOP.md` menetapkan target liveliness. Kamu boleh menyertakan baris dial di `DESIGN.md`, misalnya `Dial: ENERGI 2 / RITME 3 / GERAK 1`, dan agent akan mendesain sesuai itu. Tanpa baris dial, agent menyimpulkan dial dari brief kamu dan mengajukan satu pertanyaan jika arahnya ambigu.

Pola ini **generik dan tool-agnostic**. Blok pointer di atas itu instruksi bahasa natural biasa yang dieksekusi agent lewat file-read tool-nya masing-masing, jadi berlaku sama persis di Claude Code, Codex, Cursor, Windsurf, atau agent manapun selama agent-nya bisa membaca file lain yang direferensikan.

### Manual / one-off prompt

Tidak mau setup file apapun? Salin seluruh isi `ANTISLOP.md`, tempel langsung di awal prompt sebelum meminta agent membuat desain.

> **Peringatan:** Cara ini kurang andal dibanding setup 3 file. Ketika blok rules yang panjang ditempel ke chat alih-alih dimuat sebagai file konteks native, agent lebih rentan mengabaikan sebagian instruksi atau berhalusinasi melewati rules tersebut, terutama semakin panjang percakapan berlangsung. Gunakan ini sebagai fallback cepat, bukan setup utama.

## Mode Pemakaian

ANTISLOP dipakai dengan salah satu dari dua cara, dipilih user di awal sesi. Saat `ANTISLOP.md` (atau pointer `AGENTS.md`) ke-load, agent menanyakan mode mana yang berlaku, dalam bahasa chat user, dan menunggu jawaban sebelum mengerjakan UI.

- **Mode 1 (Selama):** rules memandu pekerjaan sambil project direncanakan dan dibangun. Ini mencegah AI slop sejak awal dan ditutup dengan Delivery Gate. Pakai saat membangun UI baru.
- **Mode 2 (Setelah):** rules mengaudit project yang sudah selesai. Agent membuat daftar temuan bernomor (rule yang dilanggar + alasan + prioritas), user menyetujui nomor tertentu, hanya item yang disetujui yang diperbaiki, dan laporan tindak lanjut mencatat perubahannya. Pakai untuk merapikan hasil yang sudah ada.

Pertanyaan yang ditanyakan agent:

> **ANTISLOP ini mau dipakai kapan?**
> 1. **SELAMA** project dikerjain (planning & eksekusi).
> 2. **SETELAH** project selesai.
>
> Pilih 1 atau 2?

---

## Cara Download File

Download `ANTISLOP.md` langsung lewat command line:

```bash
curl -o ANTISLOP.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/ANTISLOP.md
```

Atau download versi Bahasa Indonesia:

```bash
curl -o ANTISLOP-ID.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/ANTISLOP-ID.md
```

Lalu taruh file tersebut di lokasi yang sama dengan rules file agent lainnya di project kamu. Untuk memakai setup 3 file, buat juga `DESIGN.md` berisi arah style kamu sendiri; isinya sepenuhnya urusan kamu untuk menentukan.

---

## Struktur File

```
Project root/
├── AGENTS.md (atau CLAUDE.md, GEMINI.md, dsb.)    # router: milikmu
├── DESIGN.md                                      # arah: milikmu
└── ANTISLOP.md                                    # filter: dari repo ini

Isi ANTISLOP.md:
├── Apa Ini                      # filter, bagian dari setup 3 file
├── Prinsip Utama                # uji tujuan: teknik tanpa tujuan ditolak
├── Standar Craftsmanship        # 5 kriteria kualitas (C-1..C-5)
├── Bagian 1: Ciri-Ciri Slop     # tanda peringatan (pemindaian diagnostik, bukan daftar larangan)
├── Bagian 2: Rules Wajib        # R-01 s/d R-38, dalam 3 tingkat (Hard / Purpose-Gate / Quality)
├── Bagian 3: Liveliness Toolkit # dial, tuas, Pembacaan Desain
├── Pola Fungsional              # apa arti "berfungsi" untuk elemen interaktif
└── Delivery Gate                # laporan PASS/FAIL wajib, 4 blok
```

---

## Kontribusi

Pull request terbuka untuk menambah pola AI slop baru, memperjelas rule yang ambigu, atau melaporkan checklist item yang belum sinkron dengan rule terkait.

---

## License

MIT: [LICENSE](LICENSE)
