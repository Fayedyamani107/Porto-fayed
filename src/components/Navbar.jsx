import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', num: '00' },
    { id: 'about', label: 'About', num: '01' },
    { id: 'projects', label: 'Projects', num: '02' },
    { id: 'experience', label: 'Experience', num: '03' },
    { id: 'contact', label: 'Contact', num: '04' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F2EFDE]/92 backdrop-blur-md border-b border-[#161D24]/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Logo onClick={() => handleNavClick('home')} />
          <div className="flex flex-col border-l border-[#161D24]/15 pl-3">
            <span className="text-[13px] font-semibold tracking-tight text-[#161D24] leading-tight">
              Fayed Yamani
            </span>
            <span className="hidden sm:block text-[11px] font-mono tracking-widest text-[#243B53]/70 uppercase">
              UI/UX & Web Dev
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`editorial-link text-[13px] tracking-wider uppercase transition-colors duration-200 cursor-pointer font-mono ${
                  isActive
                    ? 'text-[#243B53] font-semibold active'
                    : 'text-[#161D24]/75 hover:text-[#243B53]'
                }`}
              >
                <span className="text-[#AC3931] text-[11px] mr-1 font-mono font-medium">
                  {item.num}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#243B53] focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-[#243B53] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-[#AC3931] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#243B53] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F2EFDE] border-b border-[#161D24]/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between py-2 text-left text-base font-mono uppercase tracking-wider text-[#161D24] border-b border-[#161D24]/5"
                >
                  <span className={activePage === item.id ? 'text-[#243B53] font-semibold' : ''}>
                    {item.label}
                  </span>
                  <span className="text-xs text-[#AC3931]">{item.num}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
