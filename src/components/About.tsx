import { motion } from 'motion/react';
import { Target, Users, Zap } from 'lucide-react';

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
          <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square">
             <img 
               src="https://picsum.photos/seed/agency/800/800" 
               alt="GUIDEN Agency" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl z-20">
            <h3 className="text-2xl font-black mb-2 italic">시선의 가치 (Visual Value)</h3>
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
              className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-[1.1] mb-8"
            >
              사람들의 시선이 <br />
              <span className="text-primary italic">머무는 순간, 릴봄</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed space-y-4 break-keep">
              <span className="block">
                <strong>릴봄(Reelbom)</strong>은 숏폼의 <strong>'Reel'</strong>과 시선의 <strong>'봄'</strong>, 그리고 도약의 계절 <strong>'봄'</strong>의 결합입니다. 
              </span>
              <span className="block">
                숏폼과 광고의 본질은 결국 <strong>'보여주는 것'</strong>입니다. 브랜드의 숨겨진 가치를 제대로 보게 만들고(Vision), 정체된 비즈니스에 가장 빠른 성장세(Spring)를 가져다줍니다.
              </span>
            </p>
          </div>

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
