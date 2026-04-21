import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/60 z-10" />
        <img 
          src="https://picsum.photos/seed/content-creation/1920/1080?blur=2" 
          alt="Atmosphere"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 glass rounded-full mb-8 border-primary/20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent break-keep text-center">
            ✨ 정체된 계정에 봄을 피워낸 따뜻한 햇살, 릴봄
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display leading-[1.2] tracking-tighter mb-8 px-4 break-keep"
        >
          숨겨진 잠재력, <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] italic pr-12">
            현실이 되다
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base md:text-2xl font-bold text-primary/90 mb-12 px-2 break-keep"
        >
          브랜드의 본질을 꿰뚫는 선구적 감각으로 <br className="hidden md:block" />
          <span className="text-secondary italic">기하급수적 성장</span>을 현실로 구축하는 <span className="font-black text-white">REELBOM</span>입니다.
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
            className="group relative px-10 py-5 bg-secondary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(242,107,122,0.4)] hover:shadow-secondary/60"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center font-bold tracking-widest uppercase text-white">
              1:1 오픈채팅 문의하기 (Open Chat) <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          </a>

          <button className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <Play className="fill-current w-4 h-4 ml-1" />
            </div>
            <span className="font-bold tracking-widest uppercase text-sm">릴스 영상 보기 (View Reels)</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Elements/Mockup Hint */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.4, x: -20 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute -right-20 bottom-20 w-64 h-[450px] glass rounded-3xl border-2 border-white/20 hidden lg:block rotate-12"
      >
         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
      </motion.div>
    </section>
  );
}
