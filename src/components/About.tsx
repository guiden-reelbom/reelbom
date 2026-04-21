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
            <h3 className="text-2xl font-black mb-2 italic">선구적 콘텐츠 (Visionary Content)</h3>
            <p className="text-sm font-medium text-primary/70">우리는 단순한 영상을 넘어 브랜드를 성장시키는 바이럴 스토리를 설계합니다.</p>
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
              ✨ 브랜드 스토리 (Brand Story)
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-[1.1] mb-8"
            >
              성공을 실현하는 <br />
              <span className="text-primary italic">전략적 나침반, 가이든</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed space-y-4 break-keep">
              <span className="block">
                <strong>가이든(Guiden)</strong>은 <strong>'Guide + en'</strong>의 결합으로, 단순한 안내를 넘어 브랜드의 성공을 가능하게 하고(Enable) 확장(Expand)한다는 실행력을 의미합니다.
              </span>
              <span className="block">
                똑똑한 시스템인 <strong>가이든</strong>이 브랜드의 나침반이 되어 가장 효율적인 성장 경로를 설계하면, 제작팀인 <span className="text-secondary font-bold italic">릴봄 스튜디오 (Reelbom studio)</span>가 사람들의 시선을 사로잡는 강력한 콘텐츠를 완성합니다.
              </span>
            </p>
          </div>

          <div className="grid gap-6">
            {[
              { 
                icon: Target, 
                title: '전략적 두뇌 (Strategic Brain)', 
                desc: '트렌드를 읽고 브랜드가 가장 빠르게 성장할 수 있는 전략을 세웁니다.',
                descEn: 'Building the most efficient growth strategy by reading trends'
              },
              { 
                icon: Zap, 
                title: '압도적 실행력 (Strategic Action)', 
                desc: '상상을 현실로 만드는 릴봄 스튜디오의 강력한 제작 에너지입니다.',
                descEn: 'Powerful production energy that turns imagination into reality'
              },
              { 
                icon: Users, 
                title: '성장 파트너 (Growth Partner)', 
                desc: '단순한 대행을 넘어 브랜드의 성공을 위해 함께 뛰는 파트너입니다.',
                descEn: 'A partner who runs together for brand success beyond simple agency work'
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
