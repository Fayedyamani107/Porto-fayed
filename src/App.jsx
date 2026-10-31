import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetailModal from './components/ProjectDetailModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [modalProject, setModalProject] = useState(null);

  // Handle URL hash or back/forward if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'projects', 'experience', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth page transition variant (0.5s ease-in-out)
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F2EFDE] text-[#161D24] flex flex-col font-sans-body selection:bg-[#243B53] selection:text-[#F2EFDE]">
      
      {/* Paper Grain Overlay (~3% opacity) */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Ambient Moving Gradient (Navy & Brick Red at ~4-5% opacity) */}
      <div className="ambient-glow" aria-hidden="true"></div>

      {/* Global Navbar */}
      <Navbar activePage={activePage} setActivePage={navigateTo} />

      {/* Main Content Area with Seamless Page Transitions */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home
                onNavigate={navigateTo}
                onSelectProject={(project) => setModalProject(project)}
              />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About onNavigate={navigateTo} />
            </motion.div>
          )}

          {activePage === 'projects' && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Projects onNavigate={navigateTo} />
            </motion.div>
          )}

          {activePage === 'experience' && (
            <motion.div
              key="experience"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Experience onNavigate={navigateTo} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Project Detail Modal if opened from Home */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />

      {/* Global Dark Editorial Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
