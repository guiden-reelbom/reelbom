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
    { name: '브랜드 스토리', enName: '(Story)', href: '/#about' },
    { name: '서비스', enName: '(Service)', href: '/#process' },
    { name: '포트폴리오', enName: '(Portfolio)', href: '/#portfolio' },
    { name: '성과지표', enName: '(Stats)', href: '/#performance' },
    { name: '문의하기', enName: '(Contact)', href: '/#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            {/* Reelbom Definitive Logo: Perfectly Centered Lens + Play + Pupil */}
            <svg 
              viewBox="0 0 40 40" 
              className="w-12 h-12 drop-shadow-[0_0_20px_rgba(242,107,122,0.4)]" 
              fill="none" 
            >
              <defs>
                <linearGradient id="reelbomGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="33%" stopColor="#F26B7A" />
                  <stop offset="66%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#D946EF" />
                </linearGradient>
              </defs>
              
              {/* Outer Ring Structure */}
              <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
              
              {/* Gradient Arc (12 o'clock to 3 o'clock) */}
              <path 
                d="M 20 4 A 16 16 0 0 1 36 20" 
                stroke="url(#reelbomGradNav)" 
                strokeWidth="2.8" 
                strokeLinecap="round" 
              />
              
              {/* Centered Identity Elements */}
              <g transform="translate(20, 20)">
                {/* Visual Play Triangle - Perfectly Balanced around 0,0 */}
                <path 
                  d="M -5 -6 C -6.5 -6 -7.5 -5 -7.5 -4 L -7.5 4 C -7.5 5 -6.5 6 -5 6 C -3.5 6 6.5 2 7.5 1 C 8.5 0 8.5 -1 7.5 -2 C 6.5 -3 -3.5 -6 -5 -6 Z" 
                  fill="url(#reelbomGradNav)" 
                />
                {/* Central Focus Pupil - Guaranteed Center */}
                <circle cx="0" cy="0" r="1.5" fill="white" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-black tracking-tighter flex items-center font-display leading-none">
              <span className="text-secondary tracking-widest leading-none">릴봄</span>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 group-hover:text-primary transition-colors mt-1.5 ml-0.5">REELBOM</span>
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
