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
            {/* Premium Compass/Navigator Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-10 h-10 drop-shadow-[0_0_15px_rgba(242,107,122,0.5)]" 
              fill="none" 
            >
              <defs>
                <linearGradient id="compassGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="50%" stopColor="#F26B7A" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              
              {/* Outer Markers - Light color for dark bg */}
              <path d="M12 2l1.2 2h-2.4z" fill="white" fillOpacity="0.8" />
              <path d="M12 22l-1.2-2h2.4z" fill="white" fillOpacity="0.8" />
              <path d="M22 12l-2 1.2v-2.4z" fill="white" fillOpacity="0.8" />
              <path d="M2 12l2-1.2v2.4z" fill="white" fillOpacity="0.8" />

              {/* Inner Circle - Semi-transparent white ring */}
              <circle cx="12" cy="12" r="7.5" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
              
              {/* Needle Rhombus */}
              <g transform="rotate(45 12 12)">
                <path 
                  d="M12 4l3 8-3 8-3-8z" 
                  fill="url(#compassGradFooter)" 
                  stroke="white" 
                  strokeWidth="0.5"
                />
                {/* Center Hole (White) */}
                <circle cx="12" cy="12" r="1.5" fill="white" />
              </g>
            </svg>
          </div>
              <div className="flex flex-col">
                <div className="text-2xl font-black tracking-tighter font-display">
                  <span className="text-secondary tracking-widest leading-none">가이든</span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 mt-1">릴봄 스튜디오 (Reelbom studio)</span>
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
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-secondary transition-all hover:scale-110"
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
            <p className="text-xs text-gray-600 font-bold uppercase tracking-widest text-outline">
              © 2026 GUIDEN. ALL RIGHTS RESERVED.
            </p>
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
