import { motion } from 'motion/react';
import { ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: '병원 (Hospital)',
    title: '신뢰 중심의 환자 유치 숏폼',
    stats: { views: '1.2M', likes: '45K' },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=1000',
  },
  {
    id: 2,
    category: '웰니스 (Wellness)',
    title: '마음 챙김: 일상 속의 명상',
    stats: { views: '890K', likes: '32K' },
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600&h=1000',
  },
  {
    id: 3,
    category: '뷰티 (Beauty)',
    title: '광채 피부를 위한 1분 루틴',
    stats: { views: '2.5M', likes: '120K' },
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=1000',
  },
  {
    id: 4,
    category: '푸드 (Food)',
    title: '입맛 돋우는 ASMR 레시피',
    stats: { views: '1.8M', likes: '98K' },
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600&h=1000',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] uppercase mb-4"
            >
              ✨ 포트폴리오 (Portfolio)
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black font-sans tracking-tighter"
            >
              시선의 가치를 <br /> <span className="relative text-secondary leading-none inline-block">증명한 프로젝트</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-8 py-4 border border-secondary/30 rounded-full hover:bg-secondary hover:text-white transition-all font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(242,107,122,0.2)] whitespace-nowrap"
          >
            전체 프로젝트 보기
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden glass border-2 border-white/10"
            >
              {/* Mockup Frame Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[6px] border-dark/80 rounded-3xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-dark/80 rounded-b-xl z-20" />

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-8 flex flex-col justify-end">
                <div className="mb-4 space-y-1">
                   <p className="text-secondary text-xs font-bold tracking-widest uppercase">{project.category}</p>
                   <h3 className="text-xl font-black leading-tight">{project.title}</h3>
                </div>
                
                <div className="flex items-center gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Heart className="w-4 h-4 fill-secondary text-secondary" />
                    <span>{project.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-primary/60">
                    <MessageCircle className="w-4 h-4" />
                    <span>{project.stats.views} 조회수 (views)</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all text-xs tracking-widest uppercase">
                    재생 (Play) <ExternalLink className="w-3 h-3" />
                  </button>
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Label when not hovered */}
              <div className="absolute bottom-6 left-6 right-6 z-20 group-hover:opacity-0 transition-opacity">
                 <p className="text-white font-bold text-lg drop-shadow-lg tracking-tight">@{project.category.toLowerCase()}_bom</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
