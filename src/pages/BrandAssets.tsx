import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Compass, Brain, Zap, Target, Users, Sparkles, Navigation, Search } from 'lucide-react';
import React from 'react';

const COLORS = {
  gold: '#F59E0B',
  violet: '#7C3AED',
  silver: '#CBD5E1',
  navy: '#020617'
};

// Reelbom Fixed: Perfect Alignment + No outer black line on solid
const ReelbomLogo = ({ isSolid = false, className = "", idPrefix = "trans" }: { isSolid?: boolean, className?: string, idPrefix?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`luxuryGradRB${idPrefix}`} gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={COLORS.gold} />
        <stop offset="100%" stopColor={COLORS.violet} />
      </linearGradient>
    </defs>
    {isSolid && <circle cx="20" cy="20" r="17.4" fill={COLORS.navy} />}
    <circle cx="20" cy="20" r="16.5" stroke={COLORS.silver} strokeWidth="1.8" />
    <path d="M 20 3.5 A 16.5 16.5 0 0 1 36.5 20" stroke={`url(#luxuryGradRB${idPrefix})`} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <g transform="translate(20, 20)">
      <path d="M -5 -7.5 C -7 -7.5 -8.5 -6.5 -8.5 -5 L -8.5 5 C -8.5 6.5 -7 7.5 -5 7.5 C -3 7.5 7.5 2.5 8.5 0 C 9.5 -2.5 -3 -7.5 -5 -7.5 Z" fill={`url(#luxuryGradRB${idPrefix})`} />
      <circle cx="0" cy="0" r="1.3" fill="white" />
    </g>
  </svg>
);

// Guiden Fixed: No borders, Pure Silver + Gradient + Rounded Diamond Core
const GuidenLogo = ({ isSolid = false, className = "", idPrefix = "trans" }: { isSolid?: boolean, className?: string, idPrefix?: string }) => {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`luxuryGradGD${idPrefix}`} gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor={COLORS.violet} />
        </linearGradient>
      </defs>
      {isSolid && <circle cx="20" cy="20" r="17.4" fill={COLORS.navy} />}
      <circle cx="20" cy="20" r="16.5" stroke={COLORS.silver} strokeWidth="1.8" />
      
      {/* Guiden Gradient Arc - Consistent with Reelbom for unified brand identity */}
      <path d="M 20 3.5 A 16.5 16.5 0 0 1 36.5 20" stroke={`url(#luxuryGradGD${idPrefix})`} strokeWidth="2.5" strokeLinecap="round" fill="none" />

      <g transform="rotate(45 20 20)">
        {/* Rounded Diamond Core - Softening the corners to match Reelbom's aesthetic */}
        <rect x="11.5" y="11.5" width="17" height="17" rx="4" fill={`url(#luxuryGradGD${idPrefix})`} />
        <circle cx="20" cy="20" r="1.3" fill="white" />
      </g>
    </svg>
  );
};

export default function BrandAssets() {
  const downloadSVG = (svgId: string, fileName: string) => {
    const svgElement = document.getElementById(svgId);
    if (!svgElement) return;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadPNG = (svgId: string, fileName: string) => {
    const svgElement = document.getElementById(svgId)?.firstElementChild as SVGElement;
    if (!svgElement) return;

    // Clone the SVG to modify attributes for proper rendering
    const clonedSvg = svgElement.cloneNode(true) as SVGElement;
    clonedSvg.setAttribute('width', '560');
    clonedSvg.setAttribute('height', '560');
    
    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 560;
    canvas.width = size;
    canvas.height = size;
    
    const img = new Image();
    // Use proper base64 encoding that handles non-ASCII characters
    const encodedData = btoa(unescape(encodeURIComponent(svgData)));
    img.src = `data:image/svg+xml;base64,${encodedData}`;
    
    img.onload = () => {
      if (ctx) {
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
  };

  return (
    <div className="min-h-screen bg-dark py-24 px-4 sm:px-6 selection:bg-primary selection:text-white text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12 text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black italic mb-6 tracking-tighter uppercase">Brand Assets</h1>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-primary italic font-bold text-lg md:text-xl break-keep leading-relaxed underline decoration-white/20 underline-offset-8">
              "숨겨진 공간을 찾아내셨군요. 오늘 하루, 기분 좋은 직감이 당신을 이끌 거예요. <br/> 릴봄과 가이든의 비밀스러운 브랜드 자산을 공유합니다."
            </p>
          </div>
          <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">Pure Identity System / CMYK Optimized for Print / Resolution Focus (560px)</p>
        </motion.div>

        <div className="space-y-32">
          {/* Reelbom Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-white/10 flex-grow" />
              <h2 className="text-2xl font-black italic text-primary uppercase tracking-widest">Reelbom</h2>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest flex justify-between">
                  <span>Transparent</span>
                  <span className="text-white/20">SVG / PNG</span>
                </h3>
                <div className="aspect-square bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-2xl flex items-center justify-center p-6 sm:p-12 mb-8 shadow-inner overflow-hidden">
                  <div id="rb-t-svg">
                    <ReelbomLogo idPrefix="T-rb" className="w-48 h-48 drop-shadow-2xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('rb-t-svg', 'reelbom-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('rb-t-svg', 'reelbom-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
              <div className="glass p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-primary mb-6 uppercase tracking-widest flex justify-between">
                  <span>Solid Identity</span>
                  <span className="text-primary italic">DEEP NAVY</span>
                </h3>
                <div className="aspect-square bg-[#020617] rounded-2xl flex items-center justify-center p-6 sm:p-12 mb-8 shadow-2xl overflow-hidden">
                  <div id="rb-s-svg">
                    <ReelbomLogo isSolid idPrefix="S-rb" className="w-48 h-48 drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('rb-s-svg', 'reelbom-solid')} className="py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('rb-s-svg', 'reelbom-solid')} className="py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Guiden Section */}
          <section className="relative pt-12">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-white/10 flex-grow" />
              <h2 className="text-2xl font-black italic text-secondary uppercase tracking-widest">Guiden</h2>
              <div className="h-px bg-white/10 flex-grow" />
            </div>

            {/* Guiden Brand Story - Same Style as About Page */}
            <div className="grid lg:grid-cols-2 gap-16 items-start text-left mb-20">
              <div className="space-y-10">
                <div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-secondary font-bold tracking-[0.4em] uppercase mb-4 text-[10px]"
                  >
                    ✨ 가이든 브랜드 스토리 (Guiden Story)
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black font-sans tracking-tighter leading-[1.1] mb-6"
                  >
                    숏폼 생태계의 <br />
                    전략적 나침반 <br/>
                    <span className="text-secondary text-xl md:text-3xl font-bold tracking-tight">(The Strategic Compass)</span>
                  </motion.h2>
                  <p className="text-gray-400 text-base leading-relaxed space-y-4 break-keep font-medium">
                    무수히 쏟아지는 콘텐츠 속에서 <br/>
                    브랜드가 길을 잃지 않도록 이끄는 것이 가이든의 본질입니다. <br/><br/>
                    단순한 대행을 넘어, 클라이언트의 비전을 확장(Expand)시키고 <br/>
                    성공을 실현(Enable)하는 압도적인 실행력을 약속합니다.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    { icon: Brain, title: '전략의 두뇌 (Strategy Brain)', desc: '가이든은 브랜드의 성장 궤도를 설계하고 뼈대를 잡는 하이엔드 컨설팅을 담당합니다.' },
                    { icon: Compass, title: '명확한 방향 (Clear Direction)', desc: '데이터와 트렌드 분석을 통해 정확한 타겟에게 도달하는 리더십을 제시합니다.' },
                    { icon: Sparkles, title: '든든한 파트너 (Trusted Partner)', desc: '브랜드 고유의 매력에 완벽하게 스며들어 가장 믿음직한 러닝메이트가 됩니다.' }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 glass p-5 rounded-2xl border border-white/5 bg-white/[0.01]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-black text-sm mb-1">{item.title}</h4>
                        <p className="text-[11px] text-gray-400 font-bold leading-tight break-keep">{item.desc}</p>
                      </div>
                    </motion.div>
                  )) }
                </div>
              </div>

              <div className="space-y-8">
                {/* Logo Design Story Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 md:p-10 rounded-[2.5rem] bg-secondary/5 border border-secondary/20 relative overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-center relative z-10">
                    <div className="w-20 h-20 shrink-0 flex items-center justify-center glass rounded-2xl p-4 shadow-2xl relative transition-transform duration-500 group-hover:scale-110">
                       <GuidenLogo className="w-full h-full drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]" idPrefix="Story" />
                    </div>
                    <div>
                      <h4 className="text-secondary font-black uppercase tracking-widest mb-3 text-sm">The Guiden Geometry <br/> [로고 스토리]</h4>
                      <p className="text-xs text-gray-400 font-bold leading-relaxed break-keep">
                        가이든의 로고는 <span className="text-white">나침반의 핵심 방위표</span>와 <span className="text-white">유연한 전략적 다이아몬드</span>를 결합했습니다. 
                        릴봄과 통일된 <span className="text-white">라운드 마름모</span>는 부드러운 리더십을, 상단의 오렌지-바이올렛 아크는 트렌드를 선점하는 <span className="text-white">선구적 통찰(Insight)</span>을 상징합니다.
                      </p>
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl opacity-50" />
                </motion.div>

                {/* Slogans Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 space-y-6"
                >
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4">가이든 슬로건 (Guiden Slogans)</h4>
                  <div className="space-y-4">
                    <p className="text-sm font-black text-white/90">"트렌드를 읽고 브랜드를 이끄는 크리에이티브 가이드" <br/> (Reading trends, Guiding brands. Your Creative Guide)</p>
                    <div className="h-px bg-white/5 w-8" />
                    <p className="text-xs font-bold text-gray-400 leading-relaxed italic">
                      "당신의 브랜드가 가야 할 단 하나의 길, 가이든."
                    </p>
                  </div>
                </motion.div>
                
                {/* Synegry Alert */}
                <div className="p-6 bg-white/[0.01] rounded-2xl border border-white/5 border-dashed flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 leading-tight break-keep">
                    가이든이 <span className="text-secondary font-black inline-block">전략(두뇌)</span>이라면, 릴봄은 그 전략을 폭발시키는 <span className="text-primary font-black inline-block">실행(심장)</span>입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest flex justify-between">
                  <span>Pure Silver</span>
                  <span className="text-white/20">SVG / PNG</span>
                </h3>
                <div className="aspect-square bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-2xl flex items-center justify-center p-6 sm:p-12 mb-8 shadow-inner overflow-hidden">
                  <div id="gd-t-svg">
                    <GuidenLogo idPrefix="T-gd" className="w-48 h-48 drop-shadow-2xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('gd-t-svg', 'guiden-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('gd-t-svg', 'guiden-transparent')} className="py-4 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
              <div className="glass p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-[10px] font-black text-secondary mb-6 uppercase tracking-widest flex justify-between">
                  <span>Solid Identity</span>
                  <span className="text-secondary italic">TRUSTED</span>
                </h3>
                <div className="aspect-square bg-[#020617] rounded-2xl flex items-center justify-center p-6 sm:p-12 mb-8 shadow-2xl overflow-hidden">
                  <div id="gd-s-svg">
                    <GuidenLogo isSolid idPrefix="S-gd" className="w-48 h-48 drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => downloadSVG('gd-s-svg', 'guiden-solid')} className="py-4 bg-secondary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    SVG
                  </button>
                  <button onClick={() => downloadPNG('gd-s-svg', 'guiden-solid')} className="py-4 bg-secondary text-white rounded-xl text-[10px] font-black uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    PNG
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 text-gray-600 font-bold uppercase tracking-widest text-[10px] space-y-4">
          <p>© 2026 REELBOM x GUIDEN. LUXURY IDENTITY SYSTEM COMPLETE.</p>
          <p className="text-[8px] opacity-50 px-8 max-w-lg mx-auto">
            Printer's Note: All colors are cross-checked for CMYK gamut safety. 
            For professional print, please use the SVG versions which preserve vector paths and precision color mapping.
          </p>
        </div>
      </div>
    </div>
  );
}
