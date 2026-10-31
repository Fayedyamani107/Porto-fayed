import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Sparkles, Terminal, Compass, BookOpen, ExternalLink } from 'lucide-react';

export default function Home({ onNavigate, onSelectProject }) {
  const { profile, pillars, projects } = portfolioData;

  // Staggered curtain reveal variants
  const curtainVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: custom * 0.15
      }
    })
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          {/* Micro Meta Header */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={curtainVariant}
            className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#161D24]/10 text-xs font-mono uppercase tracking-widest text-[#243B53]/80"
          >
            <div className="text-[#161D24]/60">
              {profile.location}
            </div>
            <div>
              [ UI/UX × Web Architecture ]
            </div>
          </motion.div>

          {/* Large Name & Editorial Tagline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 8 Cols: Name & Manifesto */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="space-y-4">
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={curtainVariant}
                  className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold"
                >
                  00 — Personal Dossier
                </motion.p>

                {/* Massive Name with breathing space */}
                <motion.h1
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={curtainVariant}
                  className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#161D24] leading-[1.05]"
                >
                  Fayed <span className="italic font-normal text-[#243B53]">Yamani</span>
                  <span className="text-[#AC3931]">.</span>
                </motion.h1>
              </div>

              {/* Tagline with italic keywords */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={curtainVariant}
                className="max-w-2xl"
              >
                <p className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#161D24]/90 font-normal leading-snug">
                  Menciptakan antarmuka web yang <span className="italic font-medium text-[#243B53]">bersih</span>,{' '}
                  <span className="italic font-medium text-[#243B53]">nyaman digunakan</span>, dan dibangun dengan kode yang presisi.
                </p>
                <p className="mt-6 font-sans-body text-[#161D24]/75 text-lg leading-relaxed font-light">
                  {profile.shortBio}
                </p>
              </motion.div>

              {/* Direct Action Links */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={curtainVariant}
                className="flex flex-wrap items-center gap-5 pt-4"
              >
                <button
                  onClick={() => onNavigate('projects')}
                  className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-sm uppercase font-mono tracking-wider shadow-sm"
                >
                  <span>Eksplorasi Proyek </span>
                  <ArrowRight size={15} className="text-[#AC3931]" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="editorial-link font-mono text-xs uppercase tracking-widest text-[#161D24] py-2 px-1 hover:text-[#243B53]"
                >
                  Tentang Saya  &rarr;
                </button>
              </motion.div>

              {/* Editorial Stats Bar */}
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={curtainVariant}
                className="grid grid-cols-3 gap-6 pt-10 border-t border-[#161D24]/10 max-w-xl"
              >
                {profile.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-serif-editorial text-2xl sm:text-3xl text-[#243B53] font-semibold">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] tracking-wider text-[#161D24]/60 uppercase leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right 4 Cols: Editorial Portrait Frame */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={curtainVariant}
              className="lg:col-span-4"
            >
              <div className="relative group mx-auto max-w-sm lg:max-w-none">
                
                {/* Background offset frame accent */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#243B53]/15 to-[#AC3931]/10 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500"></div>
                
                <div className="relative bg-[#E8E4D0] border border-[#161D24]/15 rounded-xl p-4 sm:p-5 shadow-lg space-y-4">
                  
                  {/* Real Portrait Photo */}
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#243B53]/10 border border-[#161D24]/10 flex flex-col justify-end p-6 group">
                    
                    {/* Fayed's Real Photo with editorial hover transition */}
                    <img
                      src="/fayed.jpg"
                      alt="Fayed Yamani — UI/UX Designer & Web Developer"
                      className="absolute inset-0 w-full h-full object-cover object-[center_20%] filter grayscale contrast-[1.08] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />

                    {/* Subtle bottom shadow vignette for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161D24]/90 via-[#161D24]/30 to-transparent pointer-events-none"></div>

                    {/* Editorial Subject Badge */}
                    <div className="relative z-10 space-y-1.5 text-[#F2EFDE]">
                      <div className="inline-block px-2.5 py-0.5 bg-[#AC3931] text-[10px] font-mono uppercase tracking-widest text-[#F2EFDE] rounded">
                        Tangerang &amp; Jakarta
                      </div>
                      <h3 className="font-serif-editorial text-2xl font-normal leading-tight text-white drop-shadow-sm">
                        Fayed Yamani
                      </h3>
                      <p className="text-xs font-sans text-[#F2EFDE]/90 leading-relaxed font-light">
                        Informatika UPJ • UI/UX &amp; Web Developer
                      </p>
                    </div>
                  </div>

                  {/* Caption quote */}
                  <div className="pt-2 text-xs font-serif-editorial italic text-[#161D24]/75 leading-relaxed text-center">
                    "Desain yang baik berawal dari kesederhanaan: visual yang bersih, fungsionalitas yang terarah, dan pengalaman yang menghargai efisiensi waktu penggunanya."
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#161D24]/10 font-mono text-[11px] text-[#161D24]/60">
                    <span>UPJ • 2026</span>
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-[#AC3931] hover:underline"
                    >
                      Profil Lengkap &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER WITH SOFT TRANSITION */}
      <div className="h-16 bg-gradient-to-b from-transparent via-[#E8E4D0]/60 to-transparent"></div>

      {/* SELECTED WORKS PREVIEW (EDITORIAL NUMBERED LIST) */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#161D24]/15">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold mb-2">
                02 — Selected Works (2024 — 2026)
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#161D24] font-normal">
                Karya Pilihan <span className="italic text-[#243B53]">&amp; Studi Kasus</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="editorial-link font-mono text-xs uppercase tracking-widest text-[#161D24] hover:text-[#243B53] self-start md:self-auto"
            >
              Lihat Seluruh Proyek ({projects.length}) &rarr;
            </button>
          </div>

          {/* Project Editorial Rows */}
          <div className="space-y-6">
            {projects.slice(0, 3).map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer bg-[#F8F6EB] hover:bg-[#FAF9F2] border border-[#161D24]/12 hover:border-[#243B53]/40 rounded-xl p-6 sm:p-8 transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Number & Category */}
                  <div className="lg:col-span-2 space-y-1">
                    <span className="font-mono text-2xl font-bold text-[#AC3931] group-hover:translate-x-1 transition-transform inline-block">
                      {proj.num}
                    </span>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#161D24]/60">
                      {proj.year}
                    </p>
                  </div>

                  {/* Title & Tagline */}
                  <div className="lg:col-span-7 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#161D24] group-hover:text-[#243B53] transition-colors flex items-center gap-2">
                        {proj.title}
                        <ArrowUpRight
                          size={18}
                          className="text-[#AC3931] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </h3>

                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#243B53]/10 hover:bg-[#243B53] text-[#243B53] hover:text-[#F2EFDE] font-mono text-[11px] transition-colors"
                        >
                          <span>{proj.displayUrl || 'Situs'}</span>
                          <ExternalLink size={10} className="text-[#AC3931]" />
                        </a>
                      )}
                    </div>
                    <p className="font-sans-body text-sm sm:text-base text-[#161D24]/75 line-clamp-2 leading-relaxed">
                      {proj.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#161D24]/5 text-[#161D24]/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center">
                    <span className="editorial-link font-mono text-xs uppercase tracking-wider text-[#243B53] group-hover:text-[#AC3931]">
                      Buka Detail Kasus &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK SECTION WITH SMOOTH FADE TRANSITION */}
      <section className="relative my-12">
        {/* Soft fade-in top transition */}
        <div className="h-24 bg-gradient-to-b from-[#F2EFDE] via-[#1A2C3F]/50 to-[#161D24]"></div>

        <div className="bg-[#161D24] text-[#F2EFDE] py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931]">
                03 — Prinsip &amp; Pola Pikir
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#F2EFDE] leading-tight font-normal">
                Prinsip <span className="italic text-[#89CEFF]/90">Desain &amp; Coding</span>.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#F2EFDE]/75 leading-relaxed font-light">
                Estetika visual itu penting, tapi user experience adalah segalanya. Saya membangun produk digital yang tidak sekadar tampil modern, melainkan juga responsif, fast-loading, dan dirancang untuk memecahkan masalah penggunanya.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-[#243B53]/30 border border-[#F2EFDE]/10 rounded-xl p-8 space-y-4 hover:border-[#AC3931]/60 transition-colors"
                >
                  <span className="font-mono text-xl text-[#AC3931] font-bold">
                    {pillar.num}
                  </span>
                  <h3 className="font-serif-editorial text-2xl text-[#F2EFDE]">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#F2EFDE]/50">
                    {pillar.subtitle}
                  </div>
                  <p className="font-sans text-sm text-[#F2EFDE]/75 leading-relaxed font-light pt-2">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience & Timeline Callout */}
            <div className="pt-8 border-t border-[#F2EFDE]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-serif-editorial text-xl italic text-[#F2EFDE]">
                  Pengalaman di PT. Posananta &amp; Kampus UPJ
                </div>
                <div className="font-sans text-xs text-[#F2EFDE]/60">
                  Riwayat pekerjaan, organisasi kemahasiswaan, dan rekam jejak formal.
                </div>
              </div>
              <button
                onClick={() => onNavigate('experience')}
                className="btn-editorial bg-[#F2EFDE] text-[#161D24] hover:bg-white text-xs uppercase font-mono tracking-widest"
              >
                Tinjau Timeline CV &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Soft fade-out bottom transition */}
        <div className="h-24 bg-gradient-to-b from-[#161D24] via-[#1A2C3F]/50 to-[#F2EFDE]"></div>
      </section>

      {/* QUICK CONTACT TEASER */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
            04 — Kontak &amp; Kolaborasi
          </p>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#161D24] font-normal leading-tight">
            Punya ide proyek atau mau <span className="italic text-[#243B53]">ngobrol santai</span>?
          </h2>
          <p className="font-sans text-lg text-[#161D24]/75 max-w-xl mx-auto font-light leading-relaxed">
            Terbuka untuk tawaran kerja sama, lowongan front-end developer, proyek UI/UX, atau sekadar sharing seputar web development.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-base py-3.5 px-8 font-mono uppercase tracking-wider"
            >
              Hubungi Saya &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
