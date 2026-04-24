import { motion } from 'motion/react';
import { Camera, Palette, Cpu, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: '릴스/숏폼 제작, 스레드/블로그 대행',
    description: '단순 제작을 넘어 트렌디한 감각과 알고리즘 최적화를 통해 압도적인 도달률과 브랜드 팬덤을 형성하는 올인원 콘텐츠 서비스를 제공합니다.',
    color: 'from-blue-500 to-cyan-400',
    badge: '트렌드 리딩',
  },
  {
    icon: Palette,
    title: '브랜딩',
    description: '브랜드의 핵심 가치를 파악하여 일관된 톤앤매너와 시각적 정체성을 구축, 팬덤을 만드는 콘텐츠를 기획합니다.',
    color: 'from-pink-500 to-rose-400',
    badge: '정체성 구축',
  },
  {
    icon: Cpu,
    title: 'AI기술 활용',
    description: '최신 AI 기술을 활용한 영상 제작 및 음성 삽입, 자동화 편집으로 제작 효율성을 높이고 타겟팅의 정확도를 극대화합니다.',
    color: 'from-purple-500 to-indigo-400',
    badge: '스마트 자동화',
  },
  {
    icon: BarChart3,
    title: '성과 최적화 분석',
    description: '조회수, 전환율 등 정밀한 데이터 대시보드를 통해 인사이트를 도출하고 다음 성장을 위한 전략을 설계합니다.',
    color: 'from-orange-500 to-amber-400',
    badge: '성과 중심',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/10">
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
              압도적 결과를 만드는 <br /> 
              <span className="text-primary">스마트 프로세스</span>
            </motion.h2>
            <p className="text-gray-500 font-bold mt-4 uppercase tracking-[0.2em] text-xs">데이터와 크리에이티브의 완벽한 결합</p>
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
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 glass transition-transform duration-500 group-hover:rotate-12">
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
