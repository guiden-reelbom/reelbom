import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BrandAssets() {
  const downloadSvg = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPng = (svgUrl: string, fileName: string) => {
    const img = new Image();
    img.src = svgUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 524;
      canvas.height = 524;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 524, 524);
        ctx.drawImage(img, 0, 0, 524, 524);
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
  };

  return (
    <div className="min-h-screen bg-dark py-24 px-6 selection:bg-primary selection:text-white text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기 (Back to Home)
          </Link>
        </motion.div>

        <div className="text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black italic mb-6">릴봄 브랜드 자산</h1>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-primary italic font-bold text-lg md:text-xl break-keep leading-relaxed">
                "숨겨진 공간을 발견하셨군요. 오늘 하루, 기분 좋은 직감이 당신을 이끌 거예요. 릴봄의 숨겨진 브랜드 자산을 공유합니다."
              </p>
            </div>
            <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">Brand Identity Assets / 524px High-Resolution</p>
          </motion.div>

          <div className="space-y-24">
            {/* App Icon Strategy Section */}
            <section className="mb-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow" />
                <h2 className="text-2xl font-black italic text-secondary uppercase">App Icon Strategy</h2>
                <div className="h-px bg-white/10 flex-grow" />
              </div>
              <p className="text-gray-500 font-bold mb-12 max-w-2xl mx-auto italic break-keep">
                "작은 공간에서 가장 강력하게 비치는 방법. <br className="hidden md:block" /> 릴봄은 몰입감 있는 블랙을, 가이든은 신뢰감 있는 화이트 배색을 제안합니다."
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Reelbom Icon Preview */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="glass p-8 rounded-[3rem] border border-white/5"
                >
                  <h3 className="text-sm font-black mb-8 text-primary tracking-widest uppercase text-center">Reelbom: Dark Mode Optimized</h3>
                  <div className="flex flex-col items-center gap-10">
                    {/* The Icon itself */}
                    <div className="w-24 h-24 rounded-[1.8rem] bg-black shadow-2xl flex items-center justify-center p-4 border border-white/10 group hover:scale-105 transition-transform duration-500">
                      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_15px_rgba(242,107,122,0.5)]">
                        <defs>
                          <linearGradient id="iconReelGradFix" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#FB923C" />
                            <stop offset="33%" stopColor="#F26B7A" />
                            <stop offset="66%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#D946EF" />
                          </linearGradient>
                        </defs>
                        {/* Higher visibility ring for small scale */}
                        <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                        <path d="M 20 4 A 16 16 0 0 1 36 20" stroke="url(#iconReelGradFix)" strokeWidth="3.5" strokeLinecap="round" />
                        <g transform="translate(20, 20)">
                          <path d="M -5 -6 C -6.5 -6 -7.5 -5 -7.5 -4 L -7.5 4 C -7.5 5 -6.5 6 -5 6 C -3.5 6 6.5 2 7.5 1 C 8.5 0 8.5 -1 7.5 -2 C 6.5 -3 -3.5 -6 -5 -6 Z" fill="url(#iconReelGradFix)" />
                          <circle cx="0" cy="0" r="2" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <div className="text-left w-full space-y-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <p className="text-[11px] font-bold text-gray-400 leading-relaxed">
                        <span className="text-secondary mr-2">●</span> 블랙 배경은 릴봄의 그라데이션을 '발광'하게 만들어 미디어 채널의 전문성을 극대화합니다.
                      </p>
                      <p className="text-[11px] font-bold text-gray-400 leading-relaxed">
                        <span className="text-secondary mr-2">●</span> 외곽 링의 두께를 200% 강화하여 작은 화면에서도 형태가 깨지지 않습니다.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Guiden Icon Preview */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="glass p-8 rounded-[3rem] border border-white/5"
                >
                  <h3 className="text-sm font-black mb-8 text-gray-400 tracking-widest uppercase text-center">Guiden: Trusted White</h3>
                  <div className="flex flex-col items-center gap-10">
                    <div className="w-24 h-24 rounded-[1.8rem] bg-white shadow-2xl flex items-center justify-center p-4 group hover:scale-105 transition-transform duration-500">
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        <defs>
                          <linearGradient id="iconGuiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FB923C" />
                            <stop offset="33%" stopColor="#F26B7A" />
                            <stop offset="66%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#D946EF" />
                          </linearGradient>
                        </defs>
                        <circle cx="20" cy="20" r="14" fill="#0f172a" />
                        <circle cx="20" cy="20" r="15" stroke="#e2e8f0" strokeWidth="1.5" />
                        <path d="M20 3.5 L22 8 H18 Z" fill="#1e293b" />
                        <path d="M20 36.5 L18 32 H22 Z" fill="#1e293b" />
                        <path d="M36.5 20 L32 18 V22 Z" fill="#1e293b" />
                        <path d="M3.5 20 L8 22 V18 Z" fill="#1e293b" />
                        <g transform="rotate(45 20 20)">
                          <path d="M20 8 L27 20 L20 32 L13 20 Z" fill="url(#iconGuiGrad)" />
                          <circle cx="20" cy="20" r="2" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <div className="text-left w-full space-y-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <p className="text-[11px] font-bold text-gray-400 leading-relaxed">
                        <span className="text-white mr-2">●</span> 화이트 배경은 나침반의 날카로운 선을 명확히 보여주며 사용자에게 신뢰를 줍니다.
                      </p>
                      <p className="text-[11px] font-bold text-gray-400 leading-relaxed">
                        <span className="text-white mr-2">●</span> 메탈릭한 컬러감과 화이트의 조합은 전통적인 프리미엄 도구의 느낌을 자아냅니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Reelbom Asset */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow" />
                <h2 className="text-2xl font-black italic text-primary uppercase">Reelbom Logo</h2>
                <div className="h-px bg-white/10 flex-grow" />
              </div>
              <div className="flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass p-12 rounded-[4rem] flex flex-col items-center w-full max-w-md shadow-2xl"
                >
                  <div className="w-48 h-48 mb-10 flex items-center justify-center p-8 bg-dark rounded-[2.5rem] group border border-white/5 shadow-inner">
                    <svg 
                      viewBox="0 0 40 40" 
                      className="w-full h-full transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_30px_rgba(242,107,122,0.4)]" 
                      fill="none" 
                    >
                      <defs>
                        <linearGradient id="gPre1Fix" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="#FB923C" />
                          <stop offset="0.33" stopColor="#F26B7A" />
                          <stop offset="0.66" stopColor="#8B5CF6" />
                          <stop offset="1" stopColor="#D946EF" />
                        </linearGradient>
                      </defs>
                      <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                      <path 
                        d="M 20 4 A 16 16 0 0 1 36 20" 
                        stroke="url(#gPre1Fix)" 
                        strokeWidth="2.8" 
                        strokeLinecap="round" 
                      />
                      <g transform="translate(20, 20)">
                        <path 
                          d="M -5 -6 C -6.5 -6 -7.5 -5 -7.5 -4 L -7.5 4 C -7.5 5 -6.5 6 -5 6 C -3.5 6 6.5 2 7.5 1 C 8.5 0 8.5 -1 7.5 -2 C 6.5 -3 -3.5 -6 -5 -6 Z" 
                          fill="url(#gPre1Fix)" 
                        />
                        <circle cx="0" cy="0" r="1.5" fill="white" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-black mb-8 text-white tracking-[0.2em] leading-none uppercase">REELBOM Identity</h3>
                  <div className="flex flex-col gap-4 w-full px-8">
                    <button 
                      onClick={() => downloadSvg('reelbom-logo.svg', 'reelbom')}
                      className="w-full py-4 bg-white/5 border border-white/10 rounded-full text-xs font-black hover:bg-white/10 transition-all tracking-widest uppercase"
                    >
                      Download SVG
                    </button>
                    <button 
                      onClick={() => downloadPng('reelbom-logo.svg', 'reelbom-logo.png')}
                      className="w-full py-4 bg-primary rounded-full text-xs font-black text-white hover:scale-105 transition-all tracking-widest uppercase shadow-lg shadow-primary/20"
                    >
                      Download PNG (524px)
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Guiden Asset */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow" />
                <h2 className="text-2xl font-black italic text-gray-500 uppercase">Guiden Logo (Legacy)</h2>
                <div className="h-px bg-white/10 flex-grow" />
              </div>
              <div className="flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass p-12 rounded-[4rem] flex flex-col items-center w-full max-w-md opacity-90"
                >
                  <div className="w-48 h-48 mb-10 flex items-center justify-center p-8 bg-white rounded-[2.5rem] group border border-white/5 shadow-inner">
                    <svg 
                      viewBox="0 0 40 40" 
                      className="w-full h-full transition-transform group-hover:scale-110 duration-500" 
                      fill="none" 
                    >
                      <linearGradient id="gPre2" gradientUnits="userSpaceOnUse" x1="13" y1="8" x2="27" y2="32">
                        <stop offset="0" stopColor="#FB923C" />
                        <stop offset="0.33" stopColor="#F26B7A" />
                        <stop offset="0.66" stopColor="#8B5CF6" />
                        <stop offset="1" stopColor="#D946EF" />
                      </linearGradient>
                      <circle cx="20" cy="20" r="14" fill="#0f172a" />
                      <circle cx="20" cy="20" r="15" stroke="#e2e8f0" strokeWidth="1" />
                      <path d="M20 3.5 L22 8 H18 Z" fill="#1e293b" />
                      <path d="M20 36.5 L18 32 H22 Z" fill="#1e293b" />
                      <path d="M36.5 20 L32 18 V22 Z" fill="#1e293b" />
                      <path d="M3.5 20 L8 22 V18 Z" fill="#1e293b" />
                      <g transform="rotate(45 20 20)">
                        <path d="M20 8 L27 20 L20 32 L13 20 Z" fill="url(#gPre2)" />
                        <circle cx="20" cy="20" r="2" fill="white" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-black mb-8 text-gray-400 tracking-[0.2em] leading-none uppercase">GUIDEN Identity</h3>
                  <div className="flex flex-col gap-4 w-full px-8">
                    <button 
                      onClick={() => downloadSvg('guiden-logo.svg', 'guiden')}
                      className="w-full py-4 bg-white/5 border border-white/10 rounded-full text-xs font-black hover:bg-white/10 transition-all tracking-widest uppercase opacity-60 hover:opacity-100"
                    >
                      Download SVG
                    </button>
                    <button 
                      onClick={() => downloadPng('guiden-logo.svg', 'guiden-logo.png')}
                      className="w-full py-4 bg-gray-500/20 border border-white/10 rounded-full text-xs font-black text-white hover:scale-105 transition-all tracking-widest uppercase opacity-60 hover:opacity-100"
                    >
                      Download PNG (524px)
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-12 border-t border-white/5"
          >
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
              © 2026 GUIDEN. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
