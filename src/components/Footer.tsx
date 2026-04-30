import { Github, Instagram, Youtube, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'motion/react';

export default function Footer() {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link 
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 mb-6 group cursor-pointer"
            >
              <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {/* Reelbom Definitive Logo: Perfectly Centered */}
                <svg 
                  viewBox="0 0 40 40" 
                  className="w-12 h-12 drop-shadow-[0_0_25px_rgba(242,107,122,0.6)]" 
                  fill="none" 
                >
                  <defs>
                    <linearGradient id="luxuryGradFooter" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  
                  <circle cx="20" cy="20" r="16.5" stroke="#CBD5E1" strokeWidth="1.8" fill="none" />
                  <path d="M 20 3.5 A 16.5 16.5 0 0 1 36.5 20" stroke="url(#luxuryGradFooter)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  
                  <g transform="translate(20, 20)">
                    <path d="M -5 -7.5 C -7 -7.5 -8.5 -6.5 -8.5 -5 L -8.5 5 C -8.5 6.5 -7 7.5 -5 7.5 C -3 7.5 7.5 2.5 8.5 0 C 9.5 -2.5 -3 -7.5 -5 -7.5 Z" fill="url(#luxuryGradFooter)" />
                    <circle cx="0" cy="0" r="1.3" fill="white" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-black tracking-tighter font-display leading-none">
                  <span className="text-primary tracking-widest leading-none group-hover:text-secondary transition-colors duration-500">릴봄</span>
                </div>
                <span className="text-[10px] font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] group-hover:text-gray-500 group-hover:bg-none transition-all duration-500 mt-1.5 ml-0.5">REELBOM</span>
              </div>
            </Link>
            <p className="max-w-xs text-gray-500 leading-relaxed font-medium text-outline">
              우리는 단순한 영상을 제작하지 않습니다. <br />
              브랜드를 확장시키는 가장 강력한 <span className="whitespace-nowrap">관심을 만듭니다.</span>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-6">탐색</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-gray-400 hover:text-primary transition-colors font-medium">브랜드 스토리</a></li>
              <li><a href="/#process" className="text-gray-400 hover:text-primary transition-colors font-medium">서비스</a></li>
              <li><a href="/#portfolio" className="text-gray-400 hover:text-primary transition-colors font-medium">포트폴리오</a></li>
              <li><a href="/#performance" className="text-gray-400 hover:text-primary transition-colors font-medium">성과지표</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-6">팔로우하기</h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/reelbom.studio' },
                { Icon: BookOpen, href: 'https://blog.naver.com/reelbom' },
                { Icon: LinkIcon, href: 'https://litt.ly/reelbom' }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-secondary transition-all hover:scale-110"
                >
                  <item.Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-8 text-gray-500 text-outline">
          <div className="grid md:grid-cols-2 gap-8 text-[11px] font-medium leading-relaxed tracking-tight">
            <div className="space-y-1">
              <p>회사명 : 가이든  |  대표자 : 장은채</p>
              <p>사업자등록번호 : 653-10-02913</p>
              <p>주소 : 서울특별시 강서구 공항대로 269-15, 상가 315-엘23호</p>
            </div>
            <div className="space-y-1">
              <p>문의 : <a href="https://open.kakao.com/me/reelbom" target="_blank" rel="noreferrer" className="text-white hover:underline leading-relaxed break-all">1:1 오픈채팅 (KakaoTalk)</a></p>
              <p>이메일 : ceo.guiden@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to="/brand-assets" 
              className="text-xs text-gray-600 font-bold uppercase tracking-widest text-outline cursor-default hover:text-gray-600"
              style={{ textDecoration: 'none' }}
            >
              © 2026 GUIDEN. ALL RIGHTS RESERVED.
            </Link>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-xs text-gray-600 font-bold uppercase tracking-widest hover:text-white transition-colors">개인정보처리방침</Link>
              <Link to="/terms" className="text-xs text-gray-600 font-bold uppercase tracking-widest hover:text-white transition-colors tracking-tight">이용약관</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
