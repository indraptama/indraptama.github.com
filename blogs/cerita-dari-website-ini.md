---
title: Cerita dari website ini
date: 2020-08-08
featured_img: /img/coding.jpg
banner_color: "#e1e3ff"
excerpt: Cerita tentang histori pembuatan website ini. Tentang aplikasi dan teknologi yang digunakan, dan hal-hal lain yang mungkin menarik buat dibaca.
---

Sudah hampir lima tahun domain indrapratama.com ini saya daftarkan. Namun, sampai saat ini website-nya belum juga bisa online karena bebearapa hal. Diantaranya banyaknya perkerjaan atau alasan klise "Gak Ada Waktu".

Saya teringat ketika pertama kali saya tertarik membuat website sekitar 15 tahun lalu. Saat itu internet masih terbatas dan saya sama sekali tidak ikut kursus ataupun sekolah IT. Saya langsung belajar Wordpress, Joomla, PHP, MySQL dengan membeli buku dan belajar secara otodidak.

Tapi adalah suatu kesalahan jika belajar dimulai dari itu semua. Terlalu banyak code dan programming language yang harus digunakan. Pada akhirnya saya jadi pusing sendiri :confused: dan give Up. Seharusnya saya memulai dari basic yaitu belajar HTML, CSS dan Javascript.

Website yang ingin saya buat, kira-kira seperti ini :

1. Hostingnya pengen Gratis (Gak mau modal :smile:)
2. Designnya Simple, yang penting enak dibaca di semua device
3. Ga lemot
4. Kalo bisa SPA (Single Page Application)

Akhirnya setelah keliling-keliling baca artikel, ini tools yang saya gunakan untuk membuat website ini :

1. [Github Pages](https://www.github.com) untuk hosting-nya.

2. [11ty](https://www.11ty.dev), Untuk static generator

3. [Prepros](https://www.prepros.io), untuk proces CSS dan Javascript.

   

### Github Pages

Saya memilih Github Pages untuk hosting website saya. It`s free, fast and have enough bandwith for hosting small site like this. Tapi Github Pages hanya bisa hosting static website, tidak bisa hosting CMS seperti Wordpress, Drupal, atau CMS lain yang membutuhkan database.

### 11ty (Eleventy) Static Website Generator

Biar tidak repot coding untuk setiap kali saya akan posting, saya membutuhkan Static Website Generator. Fungsi utama dari Static Website Generator adalah meng-convert file Markdown (.md) yang biasa saya gunakan untuk menulis content menjadi HTML yang bisa dibuka oleh browser.

Terdapat banyak sekali jenis dari Static Website Generator. Ada Jekyll, Gatsby, Next.Js, Hugo dan masih banyak lagi^[lihat di www.staticgen.com]. Tapi karena saya menginginkan yang simple and easy, saya memilih 11th(Eleventy). Bagaimana cara setup-nya akan saya posting lengkap nanti.

### Prepros

Saat ini Node.JS adalah salah satu tools wajib yang dibutuhkan oleh frontend developer. Livereloading, autoprefix css, auto minify dan masih banyak fitur lain yang sangat membantu developer. Saya sudah lama menggunakan Node.JS and really love it. Tapi, hal yang saya kurang suka dari NodeJS adalah harus download Repository setiap memulai project baru.

Untuk sekedar membuat website yang simple seperti web-saya ini, saya menggunakan Prepros. Tools adalah favorit saya dalam membuat website yang tidak terlalu rumit. Prepros juga menggunakan NodeJS sebagai base-nya, tapi dengan prepros, saya tidak perlu repot download repository atau setup project. Cukup drag folder project saya, dan Prepros sudah memproses SCSS, JS, HTML, Pug dan lainnya.



*Alhamdulilah*, setelah trial and error akhirnya website pribadi saya bisa berjalan. Walaupun masih belum sempurna seperti yang saya mau, tapi untuk sementara saya rasa sudah cukup. Nanti akan saya update lagi. Saya buat website ini untuk sekedar hobby saja, tapi semoga website saya ini bisa bermanfaat bagi banyak orang.