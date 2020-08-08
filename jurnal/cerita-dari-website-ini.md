---
title: Cerita dari website ini
date: 2020-08-08
featured_img: /img/coding.jpg
banner_color: "#e1e3ff"
excerpt: Cerita tentang histori pembuatan website ini. Tentang aplikasi dan teknologi yang digunakan, dan hal-hal lain yang mungkin menarik buat dibaca.
---

Sudah hampir lima tahun domain indrapratama.com ini saya daftarkan. Namun, sampai saat ini website-nya belum juga bisa online karena bebearapa hal. Diantaranya banyaknya perkejaan atau alasan klise "Gak Ada Waktu".

Teknologi membangun website kian hari makin canggih. Waktu pertama kali saya tertarik membangun website sekitar 15 tahun lalu ketika masih menjadi mahasiswa. Wordpress, Joomla, PHP adalah buku awal yang saya beli untuk membangun sebuah website. Tapi suatu kesalahan jika belajar dimulai dari itu semua, karena semua harus dimulai dari bahasa resmi website yaitu HTML. (Akhirnya pusing sendiri)

Website yang ingin saya buat, kira-kira seperti ini :

1. Hostingnya pengen Gratis (Gak mau modal :D)
2. Designnya Simple yang penting enak dibaca di semua device
3. Ga lemot
4. Kalo bisa SPA (Single Page Application)

Akhirnya setelah keliling-keliling baca artikel lalu trial end error, ini tools yang saya gunakan untuk membuat website ini :

1. [11ty](https://www.11ty.dev)
2. [Prepros](https://www.prepros.io)
3. [Github](https://www.github.com)

### Prepros

Saat ini Node.JS adalah salah satu tools wajib yang dibutuhkan oleh frontend developer. Livereloading, autoprefix css, auto minify dan masih banyak fitur lain yang sangat membantu developer. Saya sudah lama menggunakan Node.JS and really love it. Tapi, hal yang saya kurang suka dari NodeJS adalah harus download Repository setiap memulai project baru. Untuk sekedar membuat website yang simple seperti web-saya ini, saya menggunakan Prepros.

Prepros adalah favorit saya dalam membuat website yang tidak terlalu rumit. Prepros juga menggunakan NodeJS sebagai base-nya, tapi dengan prepros, saya tidak perlu repot download repository atau setup project. Cukup drag folder project saya, dan Prepros sudah memproses SCSS, JS, HTML, Pug dan lainnya.

### 11ty (Eleventy) Static Website Generator

Saya memilih github pages sebagai hosting website. It`s free and fast, tapi github pages hanya bisa static website jadi tidak bisa hosting CMS seperti wordpress. Biar tidak repot coding untuk setiap kali post, saya memilih 11ty sebagai static generator.
