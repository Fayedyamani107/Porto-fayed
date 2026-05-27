import React, { useEffect } from 'react';

const Portofolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --background: #002b36;
          --surface: #073642;
          --surface-variant: #586e75;
          --surface-container-lowest: #002b36;
          --primary: #cb4b16;
          --primary-fixed: #e95420;
          --on-primary: #fdf6e3;
          --primary-container: #cb4b16;
          --on-primary-container: #fdf6e3;
          --secondary: #859900;
          --on-surface: #93a1a1;
          --on-surface-variant: #839496;
          
          --font-display: 'Geist', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-code: 'JetBrains Mono', monospace;

          --section-gap: 120px;
          --container-max: 1200px;
        }

        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        .app-wrapper {
          background-color: var(--background);
          color: var(--on-surface);
          font-family: var(--font-body);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app-wrapper ::selection {
          background-color: var(--primary-container);
          color: var(--on-primary-container);
        }

        .layout-main {
          flex-grow: 1;
          padding-top: 3rem;
          padding-bottom: calc(var(--section-gap) * 0.5);
          padding-left: 16px;
          padding-right: 16px;
          max-width: var(--container-max);
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .layout-main {
            padding-top: 4rem;
            padding-bottom: calc(var(--section-gap) * 0.75);
            padding-left: 24px;
            padding-right: 24px;
          }
        }
        @media (min-width: 1024px) {
          .layout-main {
            padding-top: 5rem;
            padding-bottom: var(--section-gap);
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        /* Typography */
        .font-display-lg {
          font-family: var(--font-display);
          font-size: 32px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-weight: 700;
        }
        @media (min-width: 640px) {
          .font-display-lg { font-size: 40px; }
        }
        @media (min-width: 1024px) {
          .font-display-lg { font-size: 48px; }
        }

        .font-headline-lg {
          font-family: var(--font-display);
          font-size: 24px;
          line-height: 1.2;
          font-weight: 600;
        }
        @media (min-width: 640px) {
          .font-headline-lg { font-size: 28px; }
        }
        @media (min-width: 1024px) {
          .font-headline-lg { font-size: 32px; }
        }

        .font-headline-lg-mobile {
          font-family: var(--font-display);
          font-size: 20px;
          line-height: 1.2;
          font-weight: 600;
        }
        @media (min-width: 640px) {
          .font-headline-lg-mobile { font-size: 22px; }
        }
        @media (min-width: 1024px) {
          .font-headline-lg-mobile { font-size: 24px; }
        }

        .font-body-md {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          font-weight: 400;
        }
        @media (min-width: 640px) {
          .font-body-md { font-size: 15px; }
        }
        @media (min-width: 1024px) {
          .font-body-md { font-size: 16px; }
        }

        .font-label-sm {
          font-family: var(--font-code);
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
        @media (min-width: 1024px) {
          .font-label-sm { font-size: 13px; }
        }

        .text-primary { color: var(--primary); }
        .text-secondary { color: var(--secondary); }
        .text-on-surface { color: var(--on-surface); }
        .text-on-surface-variant { color: var(--on-surface-variant); }
        
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .text-lg { font-size: 1rem; }
        @media (min-width: 640px) { .text-lg { font-size: 1.05rem; } }
        @media (min-width: 1024px) { .text-lg { font-size: 1.125rem; } }
        .text-sm { font-size: 0.875rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }

        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
        .material-symbols-outlined.text-sm {
            font-size: 1.25rem;
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: calc(var(--section-gap) * 0.7);
          position: relative;
          text-align: center;
        }
        @media (min-width: 768px) {
          .hero-section {
            margin-bottom: var(--section-gap);
          }
        }
        .hero-bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(203, 75, 22, 0.15), transparent, transparent);
          z-index: -10;
          filter: blur(64px);
        }
        .hero-content {
          max-width: 48rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .hero-content { gap: 2rem; }
        }
        .hero-title {
          text-transform: uppercase;
          margin: 0;
        }
        .hero-subtitle {
          margin: 0;
        }
        .hero-contacts {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .hero-contacts {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.25rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-contacts { gap: 1.5rem; }
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .contact-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--secondary);
        }
        .contact-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }
        .contact-link:hover {
          color: var(--primary);
        }
        .hero-action {
          padding-top: 1rem;
        }
        @media (min-width: 768px) {
          .hero-action { padding-top: 1.5rem; }
        }
        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--primary);
          color: var(--on-primary);
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          text-decoration: none;
          transition: background-color 0.2s;
          border: none;
          cursor: pointer;
          width: 100%;
          justify-content: center;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .btn-download {
            width: auto;
            padding: 0.75rem 2rem;
          }
        }
        .btn-download:hover {
          background-color: var(--primary-fixed);
        }

        /* Sections General */
        .section-title {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--surface-variant);
          padding-bottom: 0.75rem;
          margin-top: 0;
        }
        @media (min-width: 640px) {
          .section-title { margin-bottom: 1.75rem; padding-bottom: 1rem; }
        }
        @media (min-width: 1024px) {
          .section-title { margin-bottom: 2rem; }
        }
        .section-title.no-border {
          border-bottom: none;
        }
        .text-center { text-align: center; }
        
        .mb-section { margin-bottom: calc(var(--section-gap) * 0.5); }
        @media (min-width: 640px) {
          .mb-section { margin-bottom: calc(var(--section-gap) * 0.75); }
        }
        @media (min-width: 1024px) {
          .mb-section { margin-bottom: var(--section-gap); }
        }

        /* Glass Panel */
        .glass-panel {
          background: var(--surface);
          border: 1px solid var(--surface-variant);
          border-radius: 0.75rem;
          padding: 1.25rem;
          box-sizing: border-box;
          text-align: left;
          width: 100%;
        }
        @media (min-width: 640px) { .glass-panel { padding: 1.75rem; } }
        @media (min-width: 1024px) { .glass-panel { padding: 2.5rem; } }
        
        .glass-panel-lg {
          padding: 1.5rem;
          text-align: left;
        }
        @media (min-width: 640px) {
          .glass-panel-lg { padding: 2rem; text-align: center; }
        }
        @media (min-width: 1024px) {
          .glass-panel-lg { padding: 3rem; }
        }
        .glass-panel-hover:hover {
          border-color: var(--primary);
        }
        
        .about-text {
            margin: 0;
        }

        /* Portfolio */
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }
        @media (min-width: 1024px) {
          .portfolio-grid { gap: 2rem; }
        }
        .portfolio-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .portfolio-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .portfolio-desc {
          flex-grow: 1;
        }
        .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tag {
          background-color: var(--surface-container-lowest);
          color: var(--on-surface-variant);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }
        .portfolio-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          text-decoration: none;
          margin-top: auto;
          transition: color 0.2s;
        }
        .portfolio-link:hover {
          color: var(--primary-fixed);
        }

        /* Experience Timeline */
        .timeline-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          text-align: left;
        }
        .timeline-container::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 1.25rem;
          width: 2px;
          background-color: var(--surface-variant);
          transform: translateX(-50%);
        }
        @media (min-width: 768px) {
          .timeline-container::before {
            left: 50%;
          }
        }
        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        @media (min-width: 768px) {
          .timeline-item:nth-child(odd) {
            justify-content: flex-start;
          }
        }
        .timeline-dot {
          position: absolute;
          left: 1.25rem;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid var(--surface-variant);
          background-color: var(--surface-container-lowest);
          color: var(--secondary);
          z-index: 10;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        @media (min-width: 768px) {
          .timeline-dot {
            left: 50%;
          }
        }
        .timeline-content {
          width: calc(100% - 4rem);
        }
        @media (min-width: 768px) {
          .timeline-content {
            width: calc(50% - 2.5rem);
          }
        }
        .timeline-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }
        .timeline-list {
          list-style-type: disc;
          list-style-position: inside;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: left;
        }
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-tag {
          background-color: var(--surface-container-lowest);
          border: 1px solid var(--surface-variant);
          color: var(--on-surface);
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: border-color 0.2s;
        }
        .skill-tag.hard-skill:hover {
          border-color: var(--primary);
        }
        .skill-tag.soft-skill:hover {
          border-color: var(--secondary);
        }

        /* Footer */
        .footer {
          width: 100%;
          padding: 3rem 0;
          border-top: 1px solid var(--surface-variant);
          background-color: var(--surface-container-lowest);
          margin-top: 4rem;
          text-align: center;
        }
        .footer-text {
            margin: 0;
        }
      `}</style>

      <main className="layout-main">
        {/* Hero Section */}
        <section className="hero-section mb-section">
          <div className="hero-bg-glow"></div>
          <div className="hero-content">
            <h1 className="font-display-lg hero-title text-primary">
              FAYED YAMANI
            </h1>
            <h2 className="font-headline-lg hero-subtitle text-on-surface">
              Front-End Developer & UI/UX Enthusiast
            </h2>
            <div className="hero-contacts font-body-md text-on-surface-variant">
              <div className="contact-item">
                <span className="material-symbols-outlined text-secondary">phone</span>
                {/* Ganti nomor telepon jika perlu */}
                <span>+62859-5180-5635</span>
              </div>
              <div className="contact-item">
                <span className="material-symbols-outlined text-secondary">mail</span>
                {/* Membuka Gmail web secara otomatis */}
                <a className="contact-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=fayedyamani369@gmail.com" target="_blank" rel="noreferrer">fayedyamani369@gmail.com</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                {/* Update LinkedIn URL */}
                <a className="contact-link" href="https://www.linkedin.com/in/fayed-yamani-40a9043b8/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                {/* Update GitHub URL */}
                <a className="contact-link" href="https://github.com/Fayedyamani107" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <div className="hero-action">
              <a className="btn-download font-body-md font-medium" download="Fayed yamani-resume (indo).pdf" href="path/to/Fayed yamani-resume (indo).pdf">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="about-section mb-section text-center">
          <h2 className="font-headline-lg section-title text-primary no-border">Tentang Saya</h2>
          <div className="glass-panel glass-panel-lg">
            <p className="font-body-md text-on-surface-variant text-lg about-text">
              Saya merupakan mahasiswa aktif jurusan Informatika di Universitas Pembangunan Jaya semester akhir dengan IPK 3.05. Saya memiliki minat besar di bidang Front-End Development dan UI/UX Design. Memiliki pengalaman dalam membangun antarmuka web yang responsif, interaktif, dan ramah pengguna, serta terus bersemangat mempelajari teknologi terbaru untuk menciptakan pengalaman digital yang lebih baik.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section mb-section">
          <h2 className="font-headline-lg section-title text-primary">Portofolio</h2>
          <div className="portfolio-grid">
            {/* AyoBlajar! Project */}
            <div className="glass-panel portfolio-card glass-panel-hover">
              <div className="portfolio-content">
                <h3 className="font-headline-lg-mobile text-primary mb-3">AyoBlajar!</h3>
                <p className="font-body-md text-on-surface-variant mb-6 portfolio-desc">
                  Platform pembelajaran online interaktif untuk siswa dengan antarmuka yang ramah pengguna. Fitur meliputi manajemen kursus, kuis, dan pelacakan kemajuan.
                </p>
                <div className="portfolio-tags">
                  <span className="tag font-label-sm">React</span>
                  <span className="tag font-label-sm">Tailwind CSS</span>
                  <span className="tag font-label-sm">Node.js</span>
                </div>
                <a className="portfolio-link font-body-md" href="https://www.figma.com/design/3xuMIXDkboOZYWLgeKlQE3/AyoBelajar?node-id=0-1&t=DWuP2ucdL0Wr1Owb-1" target="_blank" rel="noreferrer">
                  Lihat Desain
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
            {/* PetradoxAstralis Project */}
            <div className="glass-panel portfolio-card glass-panel-hover">
              <div className="portfolio-content">
                <h3 className="font-headline-lg-mobile text-primary mb-3">PetradoxAstralis</h3>
                <p className="font-body-md text-on-surface-variant mb-6 portfolio-desc">
                    Web komunitas dari server Minecraft untuk menjadi pusat informasi resmi, dokumentasi panduan bermain, dan wadah interaksi interaktif bagi seluruh anggota komunitas secara responsif. 
                </p>
                <div className="portfolio-tags">
                  <span className="tag font-label-sm">React</span>
                  <span className="tag font-label-sm">Vite</span>
                  <span className="tag font-label-sm">Tailwind CSS</span>
                </div>
                <a className="portfolio-link font-body-md" href="https://petradox-astralis-web.vercel.app" target="_blank" rel="noreferrer">
                  Kunjungi Website
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
            {/* Hokky Web Project */}
            <div className="glass-panel portfolio-card glass-panel-hover">
              <div className="portfolio-content">
                <h3 className="font-headline-lg-mobile text-primary mb-3">Hokky Web</h3>
                <p className="font-body-md text-on-surface-variant mb-6 portfolio-desc">
                  Platform e-commerce katalog untuk pemesanan sofa kustom dan berbagai produk upholstery berkualitas tinggi, dirancang dengan antarmuka yang responsif guna memudahkan pelanggan memilih spesifikasi produk sesuai kebutuhan.enarik.
                </p>
                <div className="portfolio-tags">
                  <span className="tag font-label-sm">React</span>
                  <span className="tag font-label-sm">Vite</span>
                  <span className="tag font-label-sm">Tailwind CSS</span>
                </div>
                <a className="portfolio-link font-body-md" href="https://hokky-five.vercel.app" target="_blank" rel="noreferrer">
                  Kunjungi Website
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
            {/* Info Ciledug Project */}
            <div className="glass-panel portfolio-card glass-panel-hover">
              <div className="portfolio-content">
                <h3 className="font-headline-lg-mobile text-primary mb-3">Info Ciledug</h3>
                <p className="font-body-md text-on-surface-variant mb-6 portfolio-desc">
                  Portal informasi dan berita lokal seputar area Ciledug. Menghadirkan antarmuka web interaktif untuk kemudahan akses informasi masyarakat sekitar.
                </p>
                <div className="portfolio-tags">
                  <span className="tag font-label-sm">React</span>
                  <span className="tag font-label-sm">Vite</span>
                  <span className="tag font-label-sm">CSS</span>
                </div>
                <a className="portfolio-link font-body-md" href="https://infociledug.groups.id/" target="_blank" rel="noreferrer">
                  Kunjungi Website
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section mb-section">
          <h2 className="font-headline-lg section-title text-primary">Pengalaman Kerja & Organisasi</h2>
          <div className="timeline-container">
            {/* Experience 1 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <span className="material-symbols-outlined text-sm">work</span>
              </div>
              <div className="glass-panel timeline-content">
                <div className="timeline-header">
                  <span className="text-primary font-bold font-headline-lg-mobile">Intern Front-End Developer</span>
                  <span className="text-on-surface font-medium font-body-md mt-1">PT. Posananta</span>
                  <span className="text-on-surface-variant font-label-sm mt-1">Agustus 2025 - Desember 2025</span>
                </div>
                <ul className="timeline-list font-body-md text-on-surface-variant text-sm">
                  <li>Merancang dan mengembangkan antarmuka pengguna (UI) yang responsif dan interaktif menggunakan teknologi web modern.</li>
                  <li>Berkolaborasi dengan tim desain (UI/UX) untuk memastikan implementasi desain ke dalam kode sesuai dengan standar estetika dan fungsionalitas.</li>
                  <li>Mengoptimalkan performa halaman web untuk kecepatan muat yang lebih baik dan pengalaman pengguna yang lebih lancar.</li>
                  <li>Memecahkan masalah (troubleshooting) dan memperbaiki bug pada sisi front-end untuk memastikan aplikasi berjalan dengan baik di berbagai browser dan perangkat.</li>
                </ul>
              </div>
            </div>
            {/* Experience 2 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <span className="material-symbols-outlined text-sm">support_agent</span>
              </div>
              <div className="glass-panel timeline-content">
                <div className="timeline-header">
                  <span className="text-primary font-bold font-headline-lg-mobile">Tech Support</span>
                  <span className="text-on-surface font-medium font-body-md mt-1">ICT UPJ</span>
                  <span className="text-on-surface-variant font-label-sm mt-1">November 2022</span>
                </div>
                <ul className="timeline-list font-body-md text-on-surface-variant text-sm">
                  <li>Memberikan dukungan teknis kepada staf dan mahasiswa terkait masalah perangkat keras dan lunak.</li>
                  <li>Membantu pemeliharaan jaringan dan sistem komputer di lingkungan kampus.</li>
                  <li>Pengecekan dan perawatan perangkat audio-visual.</li>
                  <li>Pengecekan infrastruktur laboratorium komputer dan memastikan perangkat siap pakai untuk kegiatan akademik.</li>
                </ul>
              </div>
            </div>
            {/* Experience 3 (Org) */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <span className="material-symbols-outlined text-sm">groups</span>
              </div>
              <div className="glass-panel timeline-content">
                <div className="timeline-header">
                  <span className="text-secondary font-bold font-headline-lg-mobile">Anggota Divisi Entrepreneurship</span>
                  <span className="text-on-surface font-medium font-body-md mt-1">HIMAFORKA</span>
                </div>
                <ul className="timeline-list font-body-md text-on-surface-variant text-sm">
                  <li>Mengelola dan melaksanakan program kerja terkait kewirausahaan mahasiswa.</li>
                  <li>Membangun relasi dan kerja sama dengan berbagai pihak untuk mendukung kegiatan himpunan.</li>
                  <li>Berkontribusi dalam pencarian dan pengelolaan vendor untuk kebutuhan operasional acara dan kegiatan sosial HIMAFORKA.</li>
                </ul>
              </div>
            </div>
            {/* Experience 4 (Org) */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <span className="material-symbols-outlined text-sm">event</span>
              </div>
              <div className="glass-panel timeline-content">
                <div className="timeline-header">
                  <span className="text-secondary font-bold font-headline-lg-mobile">Panitia Event</span>
                  <span className="text-on-surface font-medium font-body-md mt-1">KPUM</span>
                </div>
                <ul className="timeline-list font-body-md text-on-surface-variant text-sm">
                  <li>Merencanakan dan menyelenggarakan acara kemahasiswaan dengan sukses.</li>
                  <li>Mengkoordinasikan berbagai divisi untuk memastikan kelancaran acara.</li>
                  <li>Bekerja sama dengan divisi lain untuk memastikan kelancaran teknis dan non-teknis selama kegiatan berlangsung.</li>
                  <li>Mendukung pelaksanaan acara kampanye, debat, dan hari pemungutan suara mahasiswa.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section mb-section">
          <h2 className="font-headline-lg section-title text-primary">Keahlian</h2>
          <div className="skills-grid">
            <div className="glass-panel">
              <h3 className="font-headline-lg-mobile text-primary mb-6">Hard Skills</h3>
              <div className="skills-container">
                <span className="skill-tag hard-skill font-label-sm">HTML5</span>
                <span className="skill-tag hard-skill font-label-sm">CSS</span>
                <span className="skill-tag hard-skill font-label-sm">JavaScript</span>
                <span className="skill-tag hard-skill font-label-sm">React</span>
                <span className="skill-tag hard-skill font-label-sm">Figma</span>
                <span className="skill-tag hard-skill font-label-sm">MySQL</span>
                <span className="skill-tag hard-skill font-label-sm">Git</span>
                <span className="skill-tag hard-skill font-label-sm">Python</span>
              </div>
            </div>
            <div className="glass-panel">
              <h3 className="font-headline-lg-mobile text-secondary mb-6">Soft Skills</h3>
              <div className="skills-container">
                <span className="skill-tag soft-skill font-label-sm">Communication</span>
                <span className="skill-tag soft-skill font-label-sm">Teamwork</span>
                <span className="skill-tag soft-skill font-label-sm">Problem Solving</span>
                <span className="skill-tag soft-skill font-label-sm">Time Management</span>
                <span className="skill-tag soft-skill font-label-sm">Adaptability</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p className="font-label-sm text-on-surface-variant footer-text">
          © 2026 Fayed Yamani. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portofolio;
