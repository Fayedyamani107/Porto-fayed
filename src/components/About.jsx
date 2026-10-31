import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About({ onNavigate }) {
  const { profile, pillars, skills, education } = portfolioData;

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* HEADER SECTION */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
            01 — Tentang &amp; Prinsip Kerja
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#161D24] leading-tight font-normal">
            Mendesain dengan rasa, <span className="italic text-[#243B53]">membangun dengan presisi</span>.
          </h1>
          <p className="font-sans text-xl text-[#161D24]/80 leading-relaxed font-light pt-2">
            Perjalanan saya di dunia Front-End Development, UI/UX Design, dan bagaimana saya memandang sebuah produk digital.
          </p>
        </div>

        {/* PROFILE STORY & PHOTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Photo Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-[#E8E4D0] border border-[#161D24]/15 rounded-2xl p-4 sm:p-5 shadow-md">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#243B53]/15 border border-[#161D24]/10 flex flex-col justify-end p-6 group">
                
                {/* Real Photo of Fayed */}
                <img
                  src="/fayed.jpg"
                  alt="Fayed Yamani — UI/UX Designer & Web Developer"
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] filter grayscale contrast-[1.08] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161D24]/90 via-[#161D24]/30 to-transparent pointer-events-none"></div>

                {/* Visual Accent */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-[#F2EFDE]/90 px-2 py-1 bg-[#161D24]/60 backdrop-blur-sm rounded uppercase z-10">
                  UPJ • 2026
                </div>

                <div className="relative z-10 text-[#F2EFDE] space-y-1.5">
                  <div className="text-[#AC3931] font-mono text-xs font-semibold tracking-wider">
                    PROFIL
                  </div>
                  <h3 className="font-serif-editorial text-2xl text-white drop-shadow-sm">
                    Fayed Yamani
                  </h3>
                  <p className="text-xs font-sans text-[#F2EFDE]/90 leading-relaxed font-light">
                    UI/UX Designer &amp; Front-End Developer berbasis di Tangerang &amp; Jakarta.
                  </p>
                </div>
              </div>

              {/* Monograph Specimen */}
              <div className="pt-4 space-y-2 text-xs font-mono text-[#161D24]/70">
                <div className="flex justify-between border-b border-[#161D24]/10 pb-2">
                  <span>Pendidikan</span>
                  <span className="font-medium text-[#161D24]">Informatika UPJ (IPK 3.05)</span>
                </div>
                <div className="flex justify-between border-b border-[#161D24]/10 pb-2">
                  <span>Fokus Utama</span>
                  <span className="font-medium text-[#161D24]">UI/UX &amp; Front-End React</span>
                </div>
                <div className="flex justify-between">
                  <span>Status Ketersediaan</span>
                  <span className="font-medium text-[#AC3931]">Terbuka untuk Peluang</span>
                </div>
              </div>
            </div>

            {/* Quick CV Download card */}
            <div className="p-6 bg-[#FAF9F2] border border-[#161D24]/10 rounded-xl space-y-3">
              <h4 className="font-serif-editorial text-lg text-[#161D24]">
                Curriculum Vitae (CV)
              </h4>
              <p className="text-xs font-sans text-[#161D24]/70 leading-relaxed">
                Lihat riwayat lengkap pengalaman kerja, organisasi, dan skill teknis saya.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href="/resume-fayed.pdf"
                  download="Resume-Fayed-Yamani.pdf"
                  className="flex-1 btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-2.5 text-center"
                >
                  <Download size={14} className="text-[#AC3931]" />
                  <span>Unduh PDF</span>
                </a>
                <button
                  onClick={() => onNavigate('experience')}
                  className="flex-1 btn-editorial bg-transparent border border-[#161D24]/15 text-[#161D24] hover:bg-[#161D24]/5 text-xs font-mono uppercase tracking-widest py-2.5"
                >
                  Lihat CV &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Bio */}
          <div className="lg:col-span-7 space-y-8 font-sans text-[#161D24]/85 text-base sm:text-lg leading-relaxed">
            
            <div className="font-serif-editorial text-2xl sm:text-3xl text-[#243B53] italic leading-snug">
              "Desain yang baik berawal dari kesederhanaan: visual yang bersih, fungsionalitas yang terarah, dan pengalaman yang menghargai efisiensi waktu penggunanya."
            </div>

            {profile.fullBio.map((paragraph, index) => (
              <p key={index} className="font-light leading-loose text-[#161D24]/80">
                {paragraph}
              </p>
            ))}

            {/* Education Highlight Box */}
            <div className="p-6 bg-[#E8E4D0]/60 border-l-4 border-[#AC3931] rounded-r-xl space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#AC3931] font-semibold">
                Latar Belakang Akademis
              </div>
              <h4 className="font-serif-editorial text-xl text-[#161D24]">
                Universitas Pembangunan Jaya — Teknik Informatika
              </h4>
              <p className="font-sans text-sm text-[#161D24]/75 leading-relaxed font-light">
                {education[0].description} Lulus dengan pencapaian akademis konsisten (IPK 3.05) sambil aktif menuntaskan magang industri di PT. Posananta.
              </p>
            </div>
          </div>
        </div>

        {/* PILLARS OF PRACTICE SECTION */}
        <div className="space-y-8 pt-10 border-t border-[#161D24]/10">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
              Prinsip &amp; Nilai Kerja
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#161D24]">
              Tiga Pilar Pendekatan <span className="italic text-[#243B53]">Desain &amp; Rekayasa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-[#FAF9F2] border border-[#161D24]/12 rounded-xl p-8 space-y-4 hover:border-[#243B53]/40 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl text-[#AC3931] font-bold">
                    {pillar.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#161D24]/50">
                    Nilai Fundamental
                  </span>
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#161D24]">
                  {pillar.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-wider text-[#243B53]">
                  {pillar.subtitle}
                </div>
                <p className="font-sans text-sm text-[#161D24]/75 leading-relaxed font-light pt-2">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS BREAKDOWN */}
        <div className="space-y-8 pt-10 border-t border-[#161D24]/10">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
              Keahlian &amp; Perangkat
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#161D24]">
              Alat &amp; Kapabilitas <span className="italic text-[#243B53]">Spesifik</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Front-End Tech */}
            <div className="bg-[#FAF9F2] border border-[#161D24]/12 rounded-xl p-8 space-y-5">
              <h3 className="font-serif-editorial text-xl text-[#161D24] flex items-center justify-between">
                <span>Front-End &amp; Web Development</span>
                <span className="font-mono text-xs text-[#AC3931]">[ ENGINEERING ]</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.engineering.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#161D24]/80 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#243B53]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UI/UX Design Craft */}
            <div className="bg-[#FAF9F2] border border-[#161D24]/12 rounded-xl p-8 space-y-5">
              <h3 className="font-serif-editorial text-xl text-[#161D24] flex items-center justify-between">
                <span>UI/UX Design &amp; Architecture</span>
                <span className="font-mono text-xs text-[#AC3931]">[ DESIGN CRAFT ]</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.design.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#161D24]/80 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#AC3931]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#161D24]/10">
          <span className="font-serif-editorial text-xl text-[#161D24]">
            Ingin melihat bagaimana prinsip ini diwujudkan dalam produk nyata?
          </span>
          <button
            onClick={() => onNavigate('projects')}
            className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs uppercase font-mono tracking-widest py-3 px-6"
          >
            Jelajahi Proyek &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
