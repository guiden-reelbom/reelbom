import { motion } from 'motion/react';
import { Camera, Palette, Cpu, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: '릴스/숏폼 제작, 쓰레드/블로그 대행',
    description: '단순 제작을 넘어 트렌디한 감각과 알고리즘 최적화를 통해 압도적인 도달률과 브랜드 팬덤을 형성하는 올인원 콘텐츠 서비스를 제공합니다.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Palette,
    title: '브랜딩',
    description: '브랜드의 핵심 가치를 파악하여 일관된 톤앤매너와 시각적 정체성을 구축, 팬덤을 만드는 콘텐츠를 기획합니다.',
    color: 'from-pink-500 to-rose-400',
  },
  {
    icon: Cpu,
    title: 'AI기술 활용',
    description: '최신 AI 기술을 활용한 영상 제작 및 음성 삽입, 자동화 편집으로 제작 효율성을 높이고 타겟팅의 정확도를 극대화합니다.',
    color: 'from-purple-500 to-indigo-400',
  },
  {
    icon: BarChart3,
    title: '성과 최적화 분석',
    description: '조회수, 전환율 등 정밀한 데이터 대시보드를 통해 인사이트를 도출하고 다음 성장을 위한 전략을 설계합니다.',
    color: 'from-orange-500 to-amber-400',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/10">
      {/* Decorative Orbs & Sparkles */}
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
              className="text-4xl md:text-7xl font-black font-display tracking-tighter leading-[1.1]"
            >
              더 스마트한 프로세스, <br /> 
              <span className="text-primary italic">더 빠른 결과!</span>
            </motion.h2>
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
              className={`group relative p-8 rounded-[3rem] overflow-hidden transition-all duration-500 border-2 ${
                idx % 2 === 1 
                ? 'bg-primary border-primary text-dark lg:translate-y-12' 
                : 'bg-white/5 border-white/10 text-white'
              }`}
            >
              {/* Decorative Diamond Icon */}
              <div className="absolute top-6 right-6 opacity-30 select-none group-hover:scale-125 transition-transform">
                <span className={`text-4xl ${idx % 2 === 1 ? 'text-dark' : 'text-primary'}`}>✦</span>
              </div>

              <div className="relative z-10 pt-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:rotate-12 ${
                  idx % 2 === 1 ? 'bg-dark/10 border-dark/20' : 'glass border-primary/20'
                }`}>
                  <step.icon className={`w-7 h-7 ${idx % 2 === 1 ? 'text-dark' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-xl font-black mb-4 tracking-tight flex items-center gap-3 break-keep">
                  <span className={`text-sm font-black px-2 py-1 rounded-lg ${
                    idx % 2 === 1 ? 'bg-secondary text-white' : 'bg-secondary/20 text-secondary'
                  }`}>0{idx + 1}</span>
                  {step.title}
                </h3>
                <p className={`leading-relaxed text-sm font-bold break-keep ${
                  idx % 2 === 1 ? 'text-dark' : 'text-primary/80 text-outline'
                }`}>
                  {step.description}
                </p>
              </div>

              <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className={`px-4 py-2 rounded-full border flex items-center justify-center ${
                  idx % 2 === 1 ? 'bg-dark/5 border-dark/10' : 'bg-secondary/10 border-secondary/20'
                }`}>
                  <span className={`text-[10px] font-black ${idx % 2 === 1 ? 'text-dark' : 'text-secondary'}`}>
                    OK
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
