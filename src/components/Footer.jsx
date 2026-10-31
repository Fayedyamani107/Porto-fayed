import Logo from './Logo';

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full bg-[#161D24] text-[#F2EFDE] border-t border-[#F2EFDE]/10 py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Logo onClick={() => onNavigate && onNavigate('home')} variant="dark" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#F2EFDE]/75 pl-3 border-l border-[#F2EFDE]/20">
                Fayed Yamani
              </span>
            </div>
            <p className="font-sans text-sm text-[#F2EFDE]/75 leading-relaxed font-light max-w-md">
              Portofolio digital yang menggabungkan tampilan visual yang tenang dengan eksekusi teknis yang solid. Dirancang khusus, simpel, dan tepat sasaran.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#AC3931] uppercase tracking-widest block font-semibold">
              Halaman
            </span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#89CEFF] transition-colors">
                  00 — Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#89CEFF] transition-colors">
                  01 — About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#89CEFF] transition-colors">
                  02 — Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experience')} className="hover:text-[#89CEFF] transition-colors">
                  03 — Experience
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#89CEFF] transition-colors">
                  04 — Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#AC3931] uppercase tracking-widest block font-semibold">
              Lokasi &amp; Waktu
            </span>
            <p className="text-[#F2EFDE]/75 leading-relaxed font-light">
              Tangerang Selatan &amp; Jakarta, ID<br />
              Zona Waktu: GMT+7 (WIB)<br />
              Ketersediaan: Terbuka
            </p>
            <div className="pt-2 text-[11px] text-[#F2EFDE]/50">
              fayedyamani369@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
