import { motion } from 'motion/react';
import { Target, Zap, Palette, MessageSquare } from 'lucide-react';

const methods = [
  {
    id: '01',
    icon: Zap,
    label: 'Hook',
    title: '첫 3초 후킹',
    description: '스크롤을 멈추게 만드는 첫 문장과 첫 화면을 설계합니다.',
    color: 'from-purple-500 to-primary',
    position: 'top-right'
  },
  {
    id: '02',
    icon: Palette,
    label: 'Flow',
    title: '전개의 흐름',
    description: '시청자가 끝까지 시선을 떼지 못하도록 영상의 기승전결(또는 결전승기)과 리듬을 설계합니다.',
    color: 'from-blue-500 to-cyan-400',
    position: 'mid-left'
  },
  {
    id: '03',
    icon: Target,
    label: 'Tone',
    title: '브랜드 톤',
    description: '업종과 고객층에 맞는 말투, 색감, 화면 분위기를 맞춥니다.',
    color: 'from-indigo-500 to-purple-500',
    position: 'mid-right'
  },
  {
    id: '04',
    icon: MessageSquare,
    label: 'Action',
    title: '문의 전환',
    description: '자연스럽게 문의로 이어지는 CTA 흐름 설계',
    color: 'from-pink-500 to-rose-500',
    position: 'bottom-center'
  },
];

export default function SocialProof() {
  return (
    <section id="viewpoint" className="py-24 md:py-40 relative overflow-hidden bg-[#1e1635]/70">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/15 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-[45%] text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-primary font-bold tracking-[0.2em] text-sm md:text-base">
                <span className="text-xl">✨</span>
                <span>릴봄의 관점 (VIEWPOINT)</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white leading-[1.1] break-keep">
                감각이 아니라, <br /> 
                <span className="text-primary font-black">기준으로 만드는 숏폼</span>
              </h2>

              <p className="text-gray-400 text-lg md:text-xl font-bold leading-relaxed break-keep max-w-sm">
                릴봄은 예쁜 영상보다 먼저 <br className="hidden md:block" />
                사람들이 멈추고, 이해하고, <br className="hidden md:block" />
                문의하게 되는 흐름을 설계합니다.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-12 border-t border-white/10 font-sans">
                {['HOOK', 'FLOW', 'TONE', 'ACTION'].map((tag, i) => (
                  <div key={tag} className="flex items-center gap-4">
                    <span className="text-primary font-bold text-xs md:text-sm tracking-[0.2em]">{tag}</span>
                    {i < 3 && <span className="text-primary font-bold text-xs">·</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Cards (Vertical) */}
          <div className="lg:w-[55%] relative w-full">
            <div className="space-y-6 relative z-10">
              {methods.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-white/15 transition-all duration-500 hover:shadow-[0_0_40px_rgba(242,107,122,0.05)] relative overflow-hidden flex items-center gap-6">
                    {/* Background Number */}
                    <span className="absolute right-8 top-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white/[0.03] pointer-events-none group-hover:text-white/[0.05] transition-colors">{item.id}</span>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full bg-secondary/5 flex items-center justify-center p-3.5 border border-secondary/20 group-hover:border-primary/40 transition-colors`}>
                      <item.icon className="w-full h-full text-secondary group-hover:text-primary transition-colors" />
                    </div>

                    <div className="flex-1 relative z-10">
                      <p className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.3em] mb-1">{item.label}</p>
                      <h4 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base font-bold text-gray-500 leading-relaxed break-keep">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


