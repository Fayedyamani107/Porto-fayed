import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Experience({ onNavigate }) {
  const { experiences, education, profile } = portfolioData;

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#161D24]/15">
          <div className="space-y-4 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
              03 — Riwayat Kerja &amp; Rekam Jejak
            </p>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#161D24] leading-tight font-normal">
              Pengalaman <span className="italic text-[#243B53]">&amp; Kurikulum Vitae</span>
            </h1>
            <p className="font-sans text-lg text-[#161D24]/75 leading-relaxed font-light">
              Rekam jejak profesional, pengabdian di lingkungan kampus, dan kontribusi organisasi kemahasiswaan.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <a
              href="/resume-fayed.pdf"
              download="Resume-Fayed-Yamani.pdf"
              className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-2.5 px-5 shadow-sm inline-flex items-center gap-2"
            >
              <Download size={14} className="text-[#AC3931]" />
              <span>Unduh Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* WORK EXPERIENCE TIMELINE */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase size={20} className="text-[#243B53]" />
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#161D24]">
              Riwayat Profesional &amp; Praktik Kerja
            </h2>
          </div>

          <div className="relative border-l-2 border-[#161D24]/15 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F2EFDE] border-2 border-[#243B53] group-hover:border-[#AC3931] transition-colors"></span>

                <div className="bg-[#FAF9F2] border border-[#161D24]/10 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm hover:border-[#243B53]/30 transition-all">
                  
                  {/* Top info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#161D24]/10 pb-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#AC3931] font-semibold">
                        {exp.badge}
                      </span>
                      <h3 className="font-serif-editorial text-2xl text-[#161D24]">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-xs text-[#243B53] font-medium mt-0.5">
                        {exp.institution} • {exp.location}
                      </div>
                    </div>

                    <span className="font-mono text-xs text-[#161D24]/60 bg-[#161D24]/5 px-3 py-1 rounded-full self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-1">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#161D24]/80 font-sans font-light leading-relaxed">
                        <span className="text-[#AC3931] text-xs mt-1.5">&#9670;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="space-y-8 pt-8 border-t border-[#161D24]/10">
          <div className="flex items-center gap-3">
            <GraduationCap size={22} className="text-[#243B53]" />
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#161D24]">
              Pendidikan Formal
            </h2>
          </div>

          <div className="bg-[#FAF9F2] border border-[#161D24]/12 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#161D24]/10 pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#243B53] font-semibold">
                  SARJANA INFORMATIKA (S.KOM)
                </span>
                <h3 className="font-serif-editorial text-2xl text-[#161D24]">
                  {education[0].institution}
                </h3>
                <div className="font-mono text-xs text-[#AC3931] font-medium mt-0.5">
                  {education[0].grade}
                </div>
              </div>

              <span className="font-mono text-xs text-[#161D24]/60 bg-[#161D24]/5 px-3 py-1 rounded-full self-start sm:self-auto">
                {education[0].period}
              </span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#161D24]/80 font-light leading-relaxed">
              {education[0].description}
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="p-8 bg-[#243B53] text-[#F2EFDE] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-editorial text-2xl text-white">
              Ingin meninjau portofolio atau referensi langsung?
            </h3>
            <p className="font-sans text-xs text-[#F2EFDE]/75 font-light">
              Hubungi langsung Fayed untuk surat rekomendasi kerja dan berkas transkrip resmi.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-editorial bg-[#F2EFDE] text-[#161D24] hover:bg-white text-xs font-mono uppercase tracking-widest py-3 px-6 whitespace-nowrap"
          >
            Buka Halaman Kontak &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
