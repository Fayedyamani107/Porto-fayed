export const portfolioData = {
  profile: {
    name: "Fayed Yamani",
    role: "UI/UX Designer & Web Developer",
    tagline: "Membangun antarmuka web yang bersih, nyaman dipakai, dan berkinerja tinggi.",
    shortBio: "Mahasiswa tingkat akhir Teknik Informatika di Universitas Pembangunan Jaya (IPK 3.05). Berfokus pada Front-End Development dan UI/UX Design untuk menciptakan pengalaman web yang responsif, rapi, dan fungsional.",
    fullBio: [
      "Bagi saya, desain dan coding itu saling melengkapi. Desain menentukan bagaimana sebuah produk terasa dan dinikmati pengguna, sedangkan kode menjamin semuanya berjalan mulus, cepat, dan responsif di berbagai perangkat.",
      "Saya menyukai pendekatan yang simpel dan terarah: mengurangi elemen dekoratif yang tidak perlu agar informasi utama tetap mudah dicerna. Tipografi yang nyaman dibaca, ruang napas (whitespace) yang lega, dan interaksi yang halus adalah kunci antarmuka yang berkualitas.",
      "Sebagai developer yang terbiasa dengan React, Tailwind CSS, dan JavaScript modern, saya memastikan setiap rancangan di Figma bisa diterjemahkan menjadi kode yang bersih, semantik, dan mudah dikembangkan lebih lanjut."
    ],
    location: "Tangerang Selatan & Jakarta, Indonesia",
    email: "fayedyamani369@gmail.com",
    phone: "+62 859-5180-5635",
    socials: [
      { name: "GitHub", url: "https://github.com", handle: "@fayedyamani" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "Fayed Yamani" },
      { name: "Figma", url: "https://figma.com", handle: "@fayed" },
      { name: "ReadCV", url: "https://read.cv", handle: "fayed-yamani" }
    ],
    stats: [
      { value: "3.05", label: "IPK TEKNIK INFORMATIKA" },
      { value: "04+", label: "TAHUN BELAJAR & BERKARYA" },
      { value: "100%", label: "KODE BERSIH & HANDCRAFTED" }
    ]
  },

  pillars: [
    {
      num: "01",
      title: "Simpel & Fokus",
      subtitle: "Fokus ke Esensi",
      desc: "Menghindari elemen visual yang berlebihan. Desain yang baik lahir dari proporsi tipografi yang rapi, hierarki yang jelas, dan kenyamanan membaca."
    },
    {
      num: "02",
      title: "Fungsional & Relevan",
      subtitle: "Mengutamakan Fungsi",
      desc: "Menghindari tren visual yang cepat usang. Membangun tampilan yang bersih, fungsional, dan tetap relevan dalam jangka waktu panjang."
    },
    {
      num: "03",
      title: "Visual Menjadi Nyata",
      subtitle: "Implementasi Presisi",
      desc: "UI/UX tidak berhenti di Figma. Kemampuan mengeksekusinya langsung ke kode memastikan tampilan web nyata sama presisinya dengan rancangan awal."
    }
  ],

  projects: [
    {
      id: "ayoblajar",
      num: "01",
      title: "AyoBlajar!",
      liveUrl: "https://www.figma.com/design/3xuMIXDkboOZYWLgeKlQE3/AyoBelajar?t=bF79WTrYHZ9eivr0-0",
      displayUrl: "Figma Prototype",
      category: "EdTech & Interactive Platform",
      year: "2024",
      tagline: "Platform pembelajaran interaktif berbasis web untuk siswa sekolah dengan penekanan pada keterbacaan materi dan pelacakan progres kognitif.",
      summary: "Merancang sistem desain, purwarupa interaktif komprehensif di Figma, dan mengimplementasikannya ke antarmuka web edukasi yang memangkas friksi belajar daring. Dilengkapi modul manajemen kursus terstruktur, evaluasi kuis adaptif, dan visualisasi progres belajar tanpa distraksi.",
      techStack: ["Figma UI/UX", "Interactive Prototype", "Design System", "React", "Tailwind CSS", "Node.js"],
      client: "Inisiatif Mandiri / Proyek Edukasi",
      role: "Lead UI/UX Designer & Front-End Developer",
      impact: "Meningkatkan durasi penyelesaian modul kuis siswa hingga 42% berkat hierarki tipografi yang tenang, prototipe Figma berstandar usability tinggi, dan antarmuka responsif tanpa jeda.",
      context: "Pendidikan daring sering kali membebani siswa dengan tata letak padat dan menu berbelit. AyoBlajar! dirancang dengan tata letak lapang, fokus baca seperti buku cetak kontemporer, dan navigasi modular.",
      solutions: [
        "Purwarupa interaktif Figma beresolusi tinggi dengan sistem komponen autolayout terkalibrasi.",
        "Sistem navigasi satu klik dengan pengingat posisi belajar terakhir.",
        "Komponen kartu materi modular dengan kontras rasio WCAG AAA.",
        "State management adaptif untuk penyimpanan kuis real-time tanpa takut kehilangan data koneksi."
      ]
    },
    {
      id: "hokky-agency",
      num: "02",
      title: "Hokky Creative Platform",
      liveUrl: "https://hokky-five.vercel.app/",
      displayUrl: "hokky-five.vercel.app",
      category: "Creative Agency & Digital Showcase",
      year: "2025",
      tagline: "Platform company profile interaktif dengan arsitektur multi-page dinamis, showcase portofolio terstruktur, dan visualisasi workflow layanan.",
      summary: "Merancang dan mengembangkan website korporat/agensi hokky-five.vercel.app berbasis React dan Tailwind CSS. Menghadirkan navigasi multi-rute (Portfolio, Tentang Kami, Layanan, Workflow), interaksi responsif, serta optimasi performa berkecepatan tinggi.",
      techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Responsive UI", "Vercel"],
      client: "Hokky Creative Agency / Production",
      role: "Front-End Developer & UI Designer",
      impact: "Membangun antarmuka modern dengan transisi rute instan tanpa jeda, struktur tata letak layanan multi-level, serta skor performa Lighthouse 95+ pada server Vercel.",
      context: "Kebutuhan akan representasi identitas digital yang profesional, terstruktur, dan mampu memamerkan karya portofolio serta alur kerja konsultasi secara komprehensif kepada calon klien.",
      solutions: [
        "Implementasi arsitektur routing modular berbasis React Router untuk transisi mulus antar rute profil dan layanan.",
        "Desain komponen visualisasi alur kerja (workflow) 5 langkah dengan tata letak berkontras tinggi dan ramah sentuhan.",
        "Integrasi deployment otomatis CI/CD Vercel dengan optimasi aset gambar dan bundling Vite berkecepatan tinggi."
      ]
    },
    {
      id: "infociledug-groups",
      num: "03",
      title: "Info Ciledug Groups",
      liveUrl: "https://infociledug.groups.id",
      displayUrl: "infociledug.groups.id",
      category: "Community Portal & Media Platform",
      year: "2026",
      tagline: "Portal berita dan jejaring direktori komunitas warga Ciledug dengan antarmuka warta terstruktur dan aksesibilitas mobile-first.",
      summary: "Merancang identitas visual, arsitektur informasi, serta mengembangkan situs web portal berita komunitas infociledug.groups.id yang menyajikan informasi terkini seputar peristiwa, direktori UMKM, dan layanan warga secara terintegrasi.",
      techStack: ["React", "Tailwind CSS", "JavaScript ES6+", "RESTful API", "UI/UX Mobile Design"],
      client: "Info Ciledug Media Network",
      role: "Lead UI/UX Designer & Web Developer",
      impact: "Mencapai kecepatan muat rata-rata di bawah 1.5 detik pada koneksi seluler dan meningkatkan kenyamanan membaca warga hingga 48% berkat tata letak berita yang bebas distraksi iklan berlebih.",
      context: "Komunitas lokal Ciledug membutuhkan kanal digital mandiri yang tanggap, kredibel, dan mudah dibaca oleh warga berbagai usia tanpa kendala tata letak yang berantakan di peramban smartphone.",
      solutions: [
        "Desain grid artikel berita modular dengan keterbacaan tipografi optimal di layar HP.",
        "Integrasi tautan interaktif direktori komunitas dan kanal warta warga terindeks.",
        "Arsitektur front-end ringan yang dioptimasi untuk kecepatan akses di koneksi jaringan seluler."
      ]
    },
    {
      id: "inspira-design",
      num: "04",
      title: "Inspira",
      liveUrl: "https://www.figma.com/design/YGjyYaEIRORgQ5jAkxPP57/Inspira?t=bF79WTrYHZ9eivr0-0",
      displayUrl: "Figma Prototype",
      category: "Design System & Creative Interface",
      year: "2026",
      tagline: "Eksplorasi antarmuka digital dan sistem desain terstruktur di Figma dengan fokus pada hierarki visual elegan, reusable components, dan purwarupa interaktif.",
      summary: "Merancang fondasi sistem desain, dokumentasi token komponen, dan purwarupa antarmuka pengguna Inspira di Figma. Menekankan konsistensi tata letak visual, prinsip autolayout modern, dan transisi prototipe interaktif yang hidup.",
      techStack: ["Figma UI/UX", "Design Systems", "Interactive Prototyping", "Component Tokens", "Design Architecture"],
      client: "Inspira / Creative UI Exploration",
      role: "Lead UI/UX & Design System Designer",
      impact: "Membakukan lebih dari 40+ varian komponen UI responsif dengan struktur autolayout modular, mempercepat alur kerja perancangan antarmuka hingga 50%.",
      context: "Kebutuhan akan purwarupa antarmuka yang kohesif, memiliki bahasa visual yang tegas, dan siap dikonversikan menjadi kode web modern tanpa ambiguitas spesifikasi.",
      solutions: [
        "Pembuatan token warna, tipografi, dan grid spacing terpusat di Figma.",
        "Perancangan micro-interactions dan smart animation pada komponen tombol, kartu, dan navigasi.",
        "Penyusunan purwarupa interaktif end-to-end yang dapat diuji coba langsung oleh pengguna."
      ]
    }
  ],

  experiences: [
    {
      period: "Agustus 2025 — Desember 2025",
      role: "Intern Front-End Developer",
      institution: "PT. Posananta",
      location: "Jakarta, Indonesia",
      type: "Professional",
      badge: "MAGANG INDUSTRI",
      points: [
        "Merancang dan mengembangkan antarmuka pengguna (UI) yang responsif dan interaktif menggunakan teknologi web modern.",
        "Berkolaborasi erat bersama tim desain (UI/UX) untuk memastikan keselarasan implementasi desain ke kode sesuai standar estetika dan fungsionalitas produk.",
        "Mengoptimalkan performa halaman web untuk kecepatan muat yang lebih baik (Core Web Vitals) dan navigasi pengguna yang lebih lancar.",
        "Memecahkan masalah (troubleshooting) dan memperbaiki bug pada sisi front-end demi menjaga stabilitas sistem."
      ]
    },
    {
      period: "November 2022 — 2023",
      role: "Tech Support & Infrastructure",
      institution: "ICT Universitas Pembangunan Jaya (UPJ)",
      location: "Tangerang Selatan, Indonesia",
      type: "Academic / Technical",
      badge: "IT SUPPORT KAMPUS",
      points: [
        "Memberikan dukungan teknis terpadu kepada staf pengajar dan mahasiswa terkait kebutuhan perangkat lunak maupun perangkat keras.",
        "Membantu pemeliharaan stabilitas jaringan kampus dan pemantauan sistem komputer di laboratorium informatika.",
        "Menyusun dokumentasi pemecahan masalah teknis berkala untuk efisiensi operasional tim IT."
      ]
    },
    {
      period: "2023 — 2024",
      role: "Anggota Divisi Entrepreneurship",
      institution: "HIMAFORKA (Himpunan Mahasiswa Informatika UPJ)",
      location: "Tangerang Selatan, Indonesia",
      type: "Leadership / Organization",
      badge: "ORGANISASI MAHASISWA",
      points: [
        "Mengelola dan melaksanakan program kerja kewirausahaan mahasiswa berbasis produk teknologi kreatif.",
        "Membangun relasi strategis dan kemitraan eksternal untuk mendukung pendanaan mandiri kegiatan himpunan.",
        "Menginisiasi lokakarya digitalisasi usaha mikro bagi mahasiswa informatika muda."
      ]
    },
    {
      period: "2023",
      role: "Panitia Event & Publikasi",
      institution: "KPUM (Komisi Pemilihan Umum Mahasiswa UPJ)",
      location: "Tangerang Selatan, Indonesia",
      type: "Event Management",
      badge: "KEPANITIAAN KAMPUS",
      points: [
        "Merencanakan dan menyelenggarakan alur acara demokrasi kemahasiswaan dengan tertib, transparan, dan inklusif.",
        "Mengkoordinasikan sinkronisasi teknis lintas divisi (logistik, publikasi digital, dan sistem pemungutan suara kampus)."
      ]
    }
  ],

  education: [
    {
      period: "2021 — Sekarang (Semester Akhir)",
      degree: "Sarjana Komputer (S.Kom) — Teknik Informatika",
      institution: "Universitas Pembangunan Jaya (UPJ)",
      grade: "IPK 3.05 / 4.00",
      description: "Fokus studi pada Rekayasa Perangkat Lunak, Interaksi Manusia & Komputer (UI/UX), Pemrograman Web Modern, dan Arsitektur Sistem. Mempertahankan performa akademik yang konsisten sambil aktif mengembangkan proyek mandiri dan magang industri."
    }
  ],

  skills: {
    engineering: [
      "React & React 19",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 Semantics",
      "CSS3 & Responsive Layouts",
      "Node.js",
      "PHP & MySQL",
      "Git & GitHub Workflow",
      "Vite & Build Tooling",
      "Web Performance & SEO"
    ],
    design: [
      "UI/UX Interface Design",
      "Figma (Auto Layout, Tokens, Component Sets)",
      "Wireframing & High-Fidelity Prototyping",
      "Editorial Typography & Grid Systems",
      "Design Systems & Token Architecture",
      "User Journey Mapping & Usability Testing",
      "Micro-interactions & Motion Principles"
    ]
  }
};
