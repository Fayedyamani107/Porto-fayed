import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Filter, ExternalLink } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects({ onNavigate }) {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = projects.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'DEV') return item.techStack.includes('React') || item.techStack.includes('PHP');
    if (filter === 'DESIGN') return item.techStack.includes('Figma') || item.techStack.includes('Design Tokens');
    return true;
  });

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#161D24]/15">
          <div className="space-y-4 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
              02 — Karya Pilihan &amp; Studi Kasus
            </p>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#161D24] leading-tight font-normal">
              Arsip Proyek <span className="italic text-[#243B53]">(2024 — 2026)</span>
            </h1>
            <p className="font-sans text-lg text-[#161D24]/75 leading-relaxed font-light">
              Koleksi antarmuka terpilih yang mengedepankan efisiensi operasional, tipografi tenang, dan arsitektur kode bersih.
            </p>
          </div>

          {/* Editorial Category Filters */}
          <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded-full uppercase tracking-wider transition-all ${
                filter === 'ALL'
                  ? 'bg-[#243B53] text-[#F2EFDE]'
                  : 'bg-[#161D24]/5 text-[#161D24]/70 hover:bg-[#161D24]/10'
              }`}
            >
              Semua ({projects.length})
            </button>
            <button
              onClick={() => setFilter('DEV')}
              className={`px-3 py-1.5 rounded-full uppercase tracking-wider transition-all ${
                filter === 'DEV'
                  ? 'bg-[#243B53] text-[#F2EFDE]'
                  : 'bg-[#161D24]/5 text-[#161D24]/70 hover:bg-[#161D24]/10'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setFilter('DESIGN')}
              className={`px-3 py-1.5 rounded-full uppercase tracking-wider transition-all ${
                filter === 'DESIGN'
                  ? 'bg-[#243B53] text-[#F2EFDE]'
                  : 'bg-[#161D24]/5 text-[#161D24]/70 hover:bg-[#161D24]/10'
              }`}
            >
              UI/UX Craft
            </button>
          </div>
        </div>

        {/* Editorial Project List */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#FAF9F2] hover:bg-[#FFFFFF] border border-[#161D24]/12 hover:border-[#243B53]/40 rounded-2xl p-6 sm:p-10 transition-all duration-300 shadow-sm space-y-6"
            >
              {/* Row 1: Number, Category, Year */}
              <div className="flex items-center justify-between border-b border-[#161D24]/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#AC3931]">
                    {project.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#243B53]/80">
                    {project.category}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#161D24]/50">
                  {project.year}
                </div>
              </div>

              {/* Row 2: Title & Editorial Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#161D24] group-hover:text-[#243B53] transition-colors flex items-center gap-3">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={20}
                        className="text-[#AC3931] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </h2>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#243B53]/10 hover:bg-[#243B53] text-[#243B53] hover:text-[#F2EFDE] border border-[#243B53]/20 font-mono text-xs transition-colors"
                        title="Buka situs langsung"
                      >
                        <span>{project.displayUrl || 'Situs Resmi'}</span>
                        <ExternalLink size={12} className="text-[#AC3931]" />
                      </a>
                    )}
                  </div>

                  <p className="font-serif-editorial text-xl text-[#243B53] italic">
                    "{project.tagline}"
                  </p>

                  <p className="font-sans text-base text-[#161D24]/75 leading-relaxed font-light">
                    {project.summary}
                  </p>
                </div>

                {/* Right Column: Stack & Action */}
                <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-[#161D24]/10 lg:pl-8">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#161D24]/50 block">
                      Peran &amp; Klien
                    </span>
                    <p className="font-sans text-sm text-[#161D24] font-medium">
                      {project.role}
                    </p>
                    <p className="font-sans text-xs text-[#161D24]/60">
                      {project.client}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#161D24]/50 block">
                      Pustaka Teknis
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-[#161D24]/5 rounded text-[11px] font-mono text-[#161D24]/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="editorial-link font-mono text-xs uppercase tracking-wider text-[#243B53] group-hover:text-[#AC3931]">
                      Buka Rangkuman Kasus &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 bg-[#E8E4D0]/60 border border-[#161D24]/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-editorial text-2xl text-[#161D24]">
              Tertarik menguji studi kasus atau prototipe lainnya?
            </h3>
            <p className="font-sans text-sm text-[#161D24]/70 font-light">
              Tersedia dokumentasi repositori privat dan eksplorasi desain di Figma berdasarkan permintaan.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-3 px-6 whitespace-nowrap"
          >
            Hubungi untuk Kolaborasi &rarr;
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
