import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Heart, MessageCircle, Share2, Check } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: '브랜드 홍보 (Promotion)',
    title: '숏폼, 감으로 하지마세요',
    stats: { views: '1.2M', likes: '45K' },
    image: '/brand.png',
    link: 'https://youtube.com/shorts/Jd-Mse4y3mE?si=-rgbvyZ-9PbBX9xr'
  },
  {
    id: 2,
    category: '웰니스 (Wellness)',
    title: '여기 입장하는 순간, 서울 맞나 싶음',
    stats: { views: '890K', likes: '32K' },
    image: '/well.png',
    link: 'https://youtube.com/shorts/vspbSIgTvCw?si=XpxXgMgZrbX6axHS'
  },
  {
    id: 3,
    category: '뷰티 (Beauty)',
    title: '향기를 피부에 새기다',
    stats: { views: '2.5M', likes: '120K' },
    image: '/beauty.png',
    link: 'https://youtube.com/shorts/Ta9xwWe7KlM?si=YRbd_FQ6VkDEJL_V'
  },
  {
    id: 4,
    category: '푸드 (Food)',
    title: '대전 가족외식 여기 몰랐어요',
    stats: { views: '1.8M', likes: '98K' },
    image: '/food.png',
    link: 'https://youtube.com/shorts/RtM3xcrKVP8?si=wMUU1iIHFzWx3Va7'
  },
];

export default function Portfolio() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleShare = (e: MouseEvent, link: string, id: number) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };
  return (
    <section id="portfolio" className="py-32 bg-[#1e1635]/50">
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
              시선의 가치를 <br /> <span className="relative text-secondary leading-none inline-block">결과로 증명한 프로젝트</span>
            </motion.h2>
            <p className="text-gray-400 font-bold mt-4 break-keep max-w-xl">
              다양한 업종의 브랜드가 릴봄과 함께 <br className="hidden md:block" />
              더 많은 시선과 반응을 만들어가고 있습니다.
            </p>
          </div>
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all text-xs tracking-widest uppercase"
                    >
                      재생 (Play) <ExternalLink className="w-3 h-3" />
                    </a>
                    <button 
                      onClick={(e) => handleShare(e, project.link, project.id)}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all relative group/share"
                    >
                      <Share2 className="w-4 h-4" />
                      
                      <AnimatePresence>
                        {copiedId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: -45, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute bg-primary text-white text-[10px] py-1.5 px-3 rounded-full whitespace-nowrap font-bold shadow-xl flex items-center gap-1.5"
                          >
                            <Check className="w-3 h-3" />
                            링크 복사 완료!
                          </motion.div>
                        )}
                      </AnimatePresence>
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
