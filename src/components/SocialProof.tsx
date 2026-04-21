import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: '누적 조회수 (Cumulative Views)', value: 154000000, suffix: '+', prefix: '' },
  { label: '운영 채널 수 (Managed Channels)', value: 342, suffix: '', prefix: '' },
  { label: '평균 성장률 (Average Growth Rate)', value: 420, suffix: '%', prefix: '' },
  { label: '고객 만족도 (Customer Satisfaction)', value: 99, suffix: '%', prefix: '' },
];

function Counter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function SocialProof() {
  return (
    <section id="performance" className="py-32 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-[0.4em] uppercase mb-4"
        >
          ✨ 성과지표 (Performance Metrics)
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-black font-display tracking-tighter mb-8 leading-tight">
            숫자로 증명하는 <br /> 
            <span className="text-primary italic">진짜 성과!</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-xl max-w-3xl mx-auto text-outline leading-relaxed break-keep">
            매월 1억 회 이상의 누적 조회수를 기록하며 기하급수적 성장을 직접 증명하고 있습니다.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 p-8 glass rounded-3xl flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
        >
          <div className="flex -space-x-4">
             {[1,2,3,4].map(i => (
               <img 
                 key={i} 
                 src={`https://picsum.photos/seed/user${i}/100/100`} 
                 alt="Client" 
                 className="w-14 h-14 rounded-full border-2 border-dark"
                 referrerPolicy="no-referrer"
               />
             ))}
          </div>
          <div className="space-y-1">
            <p className="text-secondary text-lg font-black tracking-tight">
              실제 성과로 증명하는 릴스, 블로그 파트너십 (Reels & Blog Partnerships)
            </p>
            <p className="text-sm font-bold text-gray-400">
              릴봄과 함께 폭발적인 성장을 경험하고 있는 수많은 브랜드들이 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
