import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[140px] -z-10 opacity-70"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[160px] -z-10 opacity-50"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center pt-24 pb-12 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 glass rounded-full mb-8 border-primary/20"
        >
          <span className="text-xs font-black tracking-[0.1em] uppercase bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent break-keep text-center">
            ✨ 당신의 가치가 비로소 보이기 시작하는 순간, 릴봄
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans leading-[1.2] tracking-tighter mb-8 px-4 break-keep"
        >
          <span className="font-light">숨겨진 잠재력, </span><br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] font-black">
            현실이 되다
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base md:text-2xl font-medium text-primary/90 mb-12 px-2 break-keep leading-relaxed"
        >
          사람들의 시선이 머무는 곳에, <br className="hidden md:block" />
          <span className="text-secondary font-bold">브랜드의 내일을 세웁니다.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://open.kakao.com/me/reelbom"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 md:px-10 py-4 md:py-5 bg-secondary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 border border-white/20 w-full max-w-[320px] md:max-w-none md:w-auto shadow-[0_20px_50px_-10px_rgba(242,107,122,0.4)]"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            <span className="relative z-10 flex items-center justify-center font-black tracking-widest uppercase text-white text-sm md:text-base whitespace-nowrap drop-shadow-sm">
              1:1 상담 바로가기 <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 text-white stroke-[3px]" />
            </span>
          </a>

          <a 
            href="https://www.instagram.com/reelbom.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Play className="fill-current w-4 h-4 ml-1 text-white group-hover:text-primary transition-colors" />
            </div>
            <span className="font-bold tracking-widest uppercase text-sm">릴스 영상 보기 (View Reels)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
