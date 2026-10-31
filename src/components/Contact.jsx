import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, ArrowUpRight, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Proyek Baru',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', topic: 'Proyek Baru', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#AC3931] font-semibold">
            04 — Kontak &amp; Diskusi
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#161D24] leading-tight font-normal">
            Mari mulai <span className="italic text-[#243B53]">mengobrol</span>.
          </h1>
          <p className="font-sans text-lg text-[#161D24]/75 leading-relaxed font-light">
            Punya ide proyek, tawaran kerja, atau sekadar ingin diskusi santai seputar UI/UX dan web development? Pintu selalu terbuka.
          </p>
        </div>

        {/* MASSIVE EMAIL BOX */}
        <div className="bg-[#FAF9F2] border border-[#161D24]/12 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#161D24]/60">
              <MapPin size={13} className="text-[#243B53]" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="block font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#243B53] hover:text-[#AC3931] transition-colors break-all leading-tight font-normal underline decoration-1 decoration-[#243B53]/30 underline-offset-8 hover:decoration-[#AC3931]"
            >
              {profile.email}
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-3 px-6"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#89CEFF]" />
                  <span>Email Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-[#AC3931]" />
                  <span>Salin Email</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/6285951805635`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial bg-transparent border border-[#161D24]/20 text-[#161D24] hover:bg-[#161D24]/5 text-xs font-mono uppercase tracking-widest py-3 px-6"
            >
              <Phone size={14} className="text-[#243B53]" />
              <span>WhatsApp: {profile.phone}</span>
            </a>
          </div>
        </div>

        {/* TWO COLUMN GRID: SOCIALS & MESSAGE FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Social Links Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif-editorial text-2xl text-[#161D24]">
              Media Sosial &amp; Profil
            </h3>
            <p className="font-sans text-sm text-[#161D24]/70 leading-relaxed font-light">
              Tinjau karya desain, repositori kode, atau hubungi saya langsung lewat profil di bawah ini:
            </p>

            <div className="space-y-3 pt-2">
              {profile.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-[#FAF9F2] hover:bg-white border border-[#161D24]/10 rounded-xl transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <span className="font-serif-editorial text-lg text-[#161D24] group-hover:text-[#243B53]">
                      {social.name}
                    </span>
                    <span className="font-mono text-xs text-[#161D24]/50">
                      {social.handle}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#AC3931] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Direct Message Form Column */}
          <div className="lg:col-span-7 bg-[#FAF9F2] border border-[#161D24]/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif-editorial text-2xl text-[#161D24]">
                Kirim Pesan
              </h3>
              <p className="font-sans text-xs text-[#161D24]/60">
                Pesan Anda akan langsung masuk ke inbox email saya.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 bg-[#243B53] text-[#F2EFDE] rounded-xl space-y-2 text-center animate-fade-in">
                <Check size={28} className="mx-auto text-[#AC3931]" />
                <h4 className="font-serif-editorial text-xl">Pesan Terkirim</h4>
                <p className="text-xs font-sans text-[#F2EFDE]/80">
                  Terima kasih sudah menghubungi! Saya akan membalas secepatnya dalam 1x24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#161D24]/70">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="cth. Budi Pratama"
                      className="w-full px-4 py-2.5 bg-white border border-[#161D24]/15 rounded-lg text-sm text-[#161D24] focus:outline-none focus:border-[#243B53]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#161D24]/70">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#161D24]/15 rounded-lg text-sm text-[#161D24] focus:outline-none focus:border-[#243B53]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#161D24]/70">
                    Kategori Minat
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#161D24]/15 rounded-lg text-sm text-[#161D24] focus:outline-none focus:border-[#243B53]"
                  >
                    <option>Proyek Web Development</option>
                    <option>Desain UI/UX &amp; Prototype</option>
                    <option>Peluang Kerja / Rekrutmen</option>
                    <option>Ngobrol Santai / Kolaborasi</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#161D24]/70">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran singkat kebutuhan atau ide Anda..."
                    className="w-full px-4 py-2.5 bg-white border border-[#161D24]/15 rounded-lg text-sm text-[#161D24] focus:outline-none focus:border-[#243B53]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-editorial bg-[#243B53] text-[#F2EFDE] hover:bg-[#161D24] text-xs font-mono uppercase tracking-widest py-3 rounded-lg"
                >
                  <Send size={14} className="text-[#AC3931]" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
