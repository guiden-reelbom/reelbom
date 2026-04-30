import { motion } from 'motion/react';
import { Camera, Palette, Cpu, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: '릴스/숏폼 제작',
    description: '트렌드와 브랜드 톤을 반영해 시선을 멈추게 만드는 릴스와 숏폼을 제작합니다.\n\n기획안, 대본, 자막, 편집, 썸네일까지 업로드 가능한 형태로 완성합니다.',
    color: 'from-blue-500 to-cyan-400',
    badge: '트렌드 리딩',
  },
  {
    icon: Palette,
    title: '브랜딩',
    description: '계정의 방향성, 말투, 비주얼 톤을 정리해 브랜드가 한눈에 기억되는 콘텐츠 흐름을 만듭니다.\n\n단순한 영상 제작을 넘어 계정 전체의 인상을 설계합니다.',
    color: 'from-pink-500 to-rose-400',
    badge: '정체성 구축',
  },
  {
    icon: Cpu,
    title: 'AI 기술 활용',
    description: 'AI 음성, 자막 자동화, 편집 보조 기술을 활용해 제작 속도와 퀄리티를 함께 높입니다.\n\n반복 작업은 줄이고, 콘텐츠의 완성도에 더 집중합니다.',
    color: 'from-purple-500 to-indigo-400',
    badge: '스마트 자동화',
  },
  {
    icon: BarChart3,
    title: '성과 최적화 분석',
    description: '조회수, 저장, 반응, 문의 흐름을 분석해 다음 콘텐츠의 방향을 구체적으로 개선합니다.\n\n감으로 올리는 콘텐츠가 아니라 데이터로 성장하는 계정을 만듭니다.',
    color: 'from-orange-500 to-amber-400',
    badge: '성과 중심',
  },
];

export default function Process() {
  return (
    <section id="service" className="py-32 px-6 relative overflow-hidden bg-[#1e1635]/30">
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.4em] uppercase mb-4 flex items-center gap-2"
            >
              <span>✨</span> 서비스 (Service)
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black font-sans tracking-tighter leading-tight"
            >
              압도적 결과를 만드는 <br /> <span className="text-primary">스마트 숏폼 프로세스</span>
            </motion.h2>
            <p className="text-gray-500 font-bold mt-4 uppercase tracking-[0.05em] text-sm break-keep max-w-2xl">
              감각적인 기획, 빠른 제작, 데이터 기반 개선까지 <br className="hidden md:block" />
              브랜드 상황에 맞는 숏폼 운영 흐름을 설계합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`group relative p-8 rounded-[3.5rem] overflow-hidden transition-all duration-500 border border-white/10 glass ${
                idx % 2 === 1 ? 'lg:translate-y-12 bg-white/[0.03]' : 'bg-white/[0.01]'
              }`}
            >
              {/* Decorative Diamond Icon */}
              <div className="absolute top-6 right-6 opacity-30 select-none group-hover:scale-125 transition-transform">
                <span className="text-4xl text-primary">✦</span>
              </div>

              <div className="relative z-10 pt-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8 border border-primary/20 glass transition-transform duration-500 group-hover:rotate-12">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-black mb-4 tracking-tight flex items-center gap-3 break-keep text-white">
                  <span className="text-sm font-black px-2 py-1 rounded-lg bg-primary/20 text-primary">0{idx + 1}</span>
                  {step.title}
                </h3>
                <p className="leading-relaxed text-sm font-bold break-keep text-gray-400">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="px-4 py-2 rounded-full border bg-secondary/10 border-secondary/20 flex items-center justify-center">
                  <span className="text-[10px] font-black text-secondary uppercase">
                    {step.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
