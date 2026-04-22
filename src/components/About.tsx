import { motion } from 'motion/react';
import { Target, Users, Zap } from 'lucide-react';
import brandStoryImg from '../assets/reelbom_brandstory.png';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square border border-white/5">
             <img 
               src={brandStoryImg} 
               alt="REELBOM Brand Story" 
               className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl z-20">
            <h3 className="text-2xl font-black mb-2">시선의 가치 (Visual Value)</h3>
            <p className="text-sm font-bold text-white leading-relaxed drop-shadow-md">"당신의 가치가 비로소 보이기 시작하는 순간, 릴봄"</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.4em] uppercase mb-4"
            >
              ✨ 릴봄 브랜드 스토리 (Reelbom Story)
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black font-sans tracking-tighter leading-[1.1] mb-8"
            >
              사람들의 시선이 <br />
              <span className="text-primary">머무는 순간, 릴봄</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed space-y-4 break-keep font-medium">
              <span className="block">
                릴봄(Reelbom)은 인스타그램 릴스(Reels)의 'Reel'과 시선의 '봄', <br className="hidden md:block" />
                그리고 도약의 계절 '봄'의 결합입니다.
              </span>
              <span className="block pt-2">
                릴스와 같은 숏폼과 브랜드 광고의 본질은 결국 <strong>'보여주는 것'</strong>입니다. <br className="hidden md:block" />
                브랜드의 숨겨진 가치를 제대로 보게 만들고(Vision), <br className="hidden md:block" />
                정체된 비즈니스에 가장 빠른 성장세(Spring)를 가져다줍니다.
              </span>
            </p>
          </div>

          {/* Logo Design Story Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/10 relative overflow-hidden group shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center glass rounded-3xl p-6 shadow-2xl relative transition-transform duration-500 group-hover:scale-110">
                 <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <defs>
                      <linearGradient id="storyGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="16.5" stroke="#CBD5E1" strokeWidth="1.8" fill="none" />
                    <path d="M 20 3.5 A 16.5 16.5 0 0 1 36.5 20" stroke="url(#storyGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <g transform="translate(20, 20)">
                      <path d="M -5 -7.5 C -7 -7.5 -8.5 -6.5 -8.5 -5 L -8.5 5 C -8.5 6.5 -7 7.5 -5 7.5 C -3 7.5 7.5 2.5 8.5 0 C 9.5 -2.5 -3 -7.5 -5 -7.5 Z" fill="url(#storyGrad)" />
                      <circle cx="0" cy="0" r="1.3" fill="white" />
                    </g>
                 </svg>
              </div>
              <div>
                <h4 className="text-primary font-black uppercase tracking-widest mb-3">The Lens of Focus [로고 스토리]</h4>
                <p className="text-sm text-gray-400 font-bold leading-relaxed break-keep">
                  릴봄의 로고는 <span className="text-white">카메라 조리개와 재생 버튼</span>을 결합한 형태입니다. 
                  메탈릭 링은 시선을 프레임 안에 가두는 '안정감'을, 정중앙의 화이트 도트(Pupil)는 고객의 시선이 완벽하게 머무는 <span className="text-white">무결한 초점(Perfect Focus)</span>을 상징합니다.
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
          </motion.div>

          <div className="grid gap-6">
            {[
              { 
                icon: Zap, 
                title: '시각적 가치 (Vision)', 
                desc: '사람들의 시선이 머무는 콘텐츠로 브랜드의 가치를 선명하게 증명합니다.',
                descEn: 'Creating the moment your value finally starts to be seen'
              },
              { 
                icon: Target, 
                title: '시기적 가치 (Spring)', 
                desc: '얼어붙은 SNS 계정에 새로운 에너지와 도약의 기회를 불어넣습니다.',
                descEn: 'Bringing the fastest spring and growth to your business'
              },
              { 
                icon: Users, 
                title: '경험적 가치 (Experience)', 
                desc: '"오, 볼만하네!" 고객이 결과물을 보고 감탄하는 긍정적 경험을 설계합니다.',
                descEn: 'Designing results that make customers want to see and read more'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 glass p-6 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1">{item.title}</h4>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-300 font-bold leading-tight">{item.desc}</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">{item.descEn}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
