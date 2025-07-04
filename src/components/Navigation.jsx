import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleViewWork = () => {
    scrollToSection('#work');
  };

  const handleDownloadCV = () => {
    // Replace with actual download logic or link
    toast({
      title: "🚧 CV Download",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
    setMenuOpen(false);
  };

  // Button style for CTA
  const downloadBtnStyle = {
    background: theme === 'light' ? '#111' : '#22FF88',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontWeight: 700,
    fontSize: '1rem',
    fontFamily: 'Manrope, Inter, Satoshi, sans-serif',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px 0 rgba(34,255,136,0.08)'
  };

  // Logo click: refresh to home
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur border-b border-border' : 'bg-transparent'} font-sans`}
      style={{ fontFamily: 'Manrope, Inter, Satoshi, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 relative">
        {/* Left: Hamburger */}
        <div className="flex items-center flex-1 min-w-0">
          <button
            className="flex items-center justify-center p-2 rounded focus:outline-none lg:mr-4"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
              {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </motion.div>
          </button>
        </div>
        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none cursor-pointer w-fit" style={{ zIndex: 20 }} onClick={handleLogoClick}>
          <span className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'Manrope, Inter, Satoshi, sans-serif', letterSpacing: '-0.03em' }}>DANIEL</span>
        </div>
        {/* Right: CTA buttons + theme toggle */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
          <button
            onClick={handleViewWork}
            className="hidden sm:inline text-base md:text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:underline hover:text-primary focus:outline-none bg-transparent text-[#111] dark:text-white"
            style={{ fontFamily: 'Manrope, Inter, Satoshi, sans-serif' }}
          >
            View Work
          </button>
          <Button
            onClick={handleDownloadCV}
            style={downloadBtnStyle}
            className="hover:scale-105 hover:shadow-lg focus:outline-none transition-transform duration-300 text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-6 sm:py-3"
            onMouseOver={e => e.currentTarget.style.background = theme === 'light' ? '#222' : '#1ED173'}
            onMouseOut={e => e.currentTarget.style.background = theme === 'light' ? '#111' : '#22FF88'}
          >
            Download CV
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hidden sm:inline ml-1"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </Button>
        </div>
        {/* Hamburger Menu Slide-out Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-4 left-2 sm:top-8 sm:left-8 z-40 w-[90vw] max-w-xs sm:max-w-[320px] glass-effect rounded-2xl p-4 sm:p-8 pt-8 sm:pt-10"
              style={{ minHeight: '70vh', backdropFilter: 'blur(16px)' }}
            >
              <div className="flex items-center mb-8 sm:mb-10">
                <button
                  className="p-2 rounded focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>
              <nav className="flex flex-col gap-5 sm:gap-6 mt-2">
                {navItems.map((item, idx) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg sm:text-[1.35rem] font-extrabold tracking-tight text-[#111] dark:text-white text-left py-1 px-2 rounded transition-all duration-200 hover:underline hover:opacity-80 focus:outline-none"
                    style={{ letterSpacing: '-0.01em', fontFamily: 'Manrope, Inter, Satoshi, sans-serif' }}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-4">
                <button
                  onClick={handleViewWork}
                  className="sm:hidden text-base font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:underline hover:text-primary focus:outline-none bg-transparent text-[#111] dark:text-white"
                  style={{ fontFamily: 'Manrope, Inter, Satoshi, sans-serif' }}
                >
                  View Work
                </button>
                <Button
                  onClick={handleDownloadCV}
                  style={downloadBtnStyle}
                  className="hover:scale-105 hover:shadow-lg focus:outline-none transition-transform duration-300 text-sm px-3 py-1.5"
                  onMouseOver={e => e.currentTarget.style.background = theme === 'light' ? '#222' : '#1ED173'}
                  onMouseOut={e => e.currentTarget.style.background = theme === 'light' ? '#111' : '#22FF88'}
                >
                  Download CV
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="sm:hidden ml-1 self-start"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;