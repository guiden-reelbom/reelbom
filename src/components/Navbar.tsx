import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Instagram, BookOpen } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    const targetPath = href.split('#')[0];
    const hash = href.split('#')[1];
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';

    if (isHomePage && hash && targetPath === '/') {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        const offset = 80; // Adjust for navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 0.8)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(16px)']
  );

  const navLinks = [
    { name: '브랜드 스토리', enName: '(Story)', href: '/#story' },
    { name: '서비스', enName: '(Service)', href: '/#service' },
    { name: '포트폴리오', enName: '(Portfolio)', href: '/#portfolio' },
    { name: '릴봄의 관점', enName: '(Viewpoint)', href: '/#viewpoint' },
    { name: '문의하기', enName: '(Contact)', href: '/#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 md:py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            {/* Reelbom Definitive Logo: Perfectly Centered Lens + Play + Pupil */}
            <svg 
              viewBox="0 0 40 40" 
              className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_25px_rgba(242,107,122,0.6)]" 
              fill="none" 
            >
              <defs>
                <linearGradient id="luxuryGradNav" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              
              <circle cx="20" cy="20" r="16.5" stroke="#CBD5E1" strokeWidth="1.8" fill="none" />
              <path d="M 20 3.5 A 16.5 16.5 0 0 1 36.5 20" stroke="url(#luxuryGradNav)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              
              <g transform="translate(20, 20)">
                <path d="M -5 -7.5 C -7 -7.5 -8.5 -6.5 -8.5 -5 L -8.5 5 C -8.5 6.5 -7 7.5 -5 7.5 C -3 7.5 7.5 2.5 8.5 0 C 9.5 -2.5 -3 -7.5 -5 -7.5 Z" fill="url(#luxuryGradNav)" />
                <circle cx="0" cy="0" r="1.3" fill="white" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-xl md:text-3xl font-black tracking-tighter flex items-center font-display leading-none">
              <span className="text-primary tracking-widest leading-none group-hover:text-secondary transition-colors duration-500">릴봄</span>
            </div>
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] group-hover:text-gray-500 group-hover:bg-none transition-all duration-500 mt-1 md:mt-1.5 ml-0.5 uppercase">REELBOM</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center justify-center text-center py-1 transition-all"
            >
              <span className="text-[11px] xl:text-[13px] font-bold group-hover:text-primary transition-colors leading-tight whitespace-nowrap">
                {link.name}
              </span>
              <span className="text-[9px] xl:text-[10px] font-bold text-gray-500 group-hover:text-secondary opacity-80 transition-colors leading-none mt-0.5">
                {link.enName}
              </span>
            </motion.a>
          ))}
          <motion.a
            href="https://open.kakao.com/me/reelbom"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 xl:px-6 py-2 xl:py-2.5 bg-secondary text-white text-[10px] xl:text-xs font-black rounded-full hover:shadow-[0_0_15px_rgba(242,107,122,0.5)] transition-all tracking-widest text-center flex items-center justify-center whitespace-nowrap"
          >
            1:1 오픈채팅
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white w-7 h-7" /> : <Menu className="text-white w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="absolute top-full left-0 right-0 bg-[#0f172a] shadow-2xl mt-0 p-6 flex flex-col space-y-4 lg:hidden border-t border-white/5 backdrop-blur-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex flex-col items-start"
            >
              <span className="text-lg font-bold hover:text-primary tracking-widest uppercase">
                {link.name}
              </span>
              <span className="text-xs font-bold text-gray-500 uppercase">
                {link.enName}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
