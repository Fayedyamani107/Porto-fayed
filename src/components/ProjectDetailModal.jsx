import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#161D24]/70 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10">
        
        {/* Backdrop click closer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#F2EFDE] border border-[#161D24]/15 rounded-2xl shadow-2xl overflow-hidden my-8 z-10"
        >
          {/* Top Bar */}
          <div className="sticky top-0 bg-[#F2EFDE]/95 backdrop-blur-md border-b border-[#161D24]/10 px-6 sm:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#AC3931]">
                {project.num}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#161D24]/60">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#161D24]/10 text-[#161D24] transition-colors"
              aria-label="Tutup detail"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Title & Tagline */}
            <div className="space-y-4">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#161D24] leading-tight font-normal">
                {project.title}
              </h2>
              <p className="font-serif-editorial text-xl sm:text-2xl text-[#243B53] italic leading-snug">
                "{project.tagline}"
              </p>
            </div>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#E8E4D0]/70 rounded-xl border border-[#161D24]/10 text-xs font-mono">
              <div>
                <span className="text-[#161D24]/50 block uppercase">Peran</span>
                <span className="font-medium text-[#161D24]">{project.role}</span>
              </div>
              <div>
                <span className="text-[#161D24]/50 block uppercase">Tahun</span>
                <span className="font-medium text-[#161D24]">{project.year}</span>
              </div>
              <div>
                <span className="text-[#161D24]/50 block uppercase">Klien / Lingkup</span>
                <span className="font-medium text-[#161D24]">{project.client}</span>
              </div>
              <div>
                <span className="text-[#161D24]/50 block uppercase">
                  {project.liveUrl ? 'Tautan Resmi' : 'Status'}
                </span>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#AC3931] hover:underline flex items-center gap-1"
                  >
                    <span>{project.displayUrl || 'Kunjungi Situs'}</span>
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className="font-medium text-[#AC3931]">Produksi / Selesai</span>
                )}
              </div>
            </div>

            {/* Impact Metric Banner */}
            <div className="p-6 bg-[#243B53] text-[#F2EFDE] rounded-xl space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#AC3931] font-semibold">
                Dampak &amp; Hasil Evaluasi
              </div>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-[#F2EFDE]/90 font-light">
                {project.impact}
              </p>
            </div>

            {/* Context & Narrative */}
            <div className="space-y-4">
              <h3 className="font-serif-editorial text-2xl text-[#161D24]">
                Konteks &amp; Tantangan Perancangan
              </h3>
              <p className="font-sans text-[#161D24]/80 text-base sm:text-lg leading-relaxed font-light">
                {project.context}
              </p>
              <p className="font-sans text-[#161D24]/80 text-base sm:text-lg leading-relaxed font-light">
                {project.summary}
              </p>
            </div>

            {/* Solutions Checklist */}
            <div className="space-y-4">
              <h3 className="font-serif-editorial text-2xl text-[#161D24]">
                Solusi &amp; Intervensi Desain
              </h3>
              <div className="space-y-3">
                {project.solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAF9F2] border border-[#161D24]/10 rounded-lg">
                    <span className="text-[#AC3931] font-mono text-sm font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="font-sans text-sm sm:text-base text-[#161D24]/80 leading-relaxed font-light">
                      {sol}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#161D24]/60">
                Pustaka &amp; Arsitektur Teknis
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#161D24]/5 border border-[#161D24]/10 rounded-full font-mono text-xs text-[#243B53]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#161D24]/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="btn-editorial bg-transparent border border-[#161D24]/20 text-[#161D24] hover:bg-[#161D24]/5 text-xs font-mono uppercase tracking-wider py-2.5 px-5"
              >
                <ArrowLeft size={14} />
                <span>Kembali ke Daftar Proyek</span>
              </button>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-2.5 px-6 inline-flex items-center gap-2"
                >
                  <span>Buka {project.displayUrl || 'Situs'}</span>
                  <ExternalLink size={14} className="text-[#AC3931]" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    alert(`Memuat demo live dan arsip kode untuk ${project.title}.`);
                  }}
                  className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-2.5 px-6 inline-flex items-center gap-2"
                >
                  <span>Tinjau Kode &amp; Demo</span>
                  <ExternalLink size={14} className="text-[#AC3931]" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
