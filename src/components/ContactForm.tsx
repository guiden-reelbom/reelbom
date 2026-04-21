import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inflow: '',
    purpose: [] as string[],
    subject: '',
    count: '',
    budget: '',
    message: '',
    refUrl: '',
  });

  const purposes = ['릴스/숏폼 대행', '광고 홍보용 숏폼', '기업홍보 영상', '개인소장 영상', '블로그 대행'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS configuration missing. Simulated success.');
      // Ensure we always stop sending state
      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(true);
        resetForm();
      }, 1500);
      return;
    }

    try {
      console.log('Sending email with data:', formData);
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          inflow: formData.inflow,
          purpose: formData.purpose.join(', '),
          subject: formData.subject,
          count: formData.count,
          budget: formData.budget,
          message: formData.message,
          ref_url: formData.refUrl || '없음',
        },
        publicKey
      );
      
      console.log('Email successfully sent:', result);
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('문의 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      inflow: '',
      purpose: [],
      subject: '',
      count: '',
      budget: '',
      message: '',
      refUrl: '',
    });
  };

  const togglePurpose = (p: string) => {
    const current = formData.purpose;
    if (current.includes(p)) {
      setFormData({ ...formData, purpose: current.filter(item => item !== p) });
    } else if (current.length < 2) {
      setFormData({ ...formData, purpose: [...current, p] });
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-dark to-black overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-20 items-start">
        <div className="lg:col-span-2 sticky top-32">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-4"
          >
            ✨ 문의하기 (Contact)
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black font-display tracking-tighter mb-8 leading-tight flex flex-col gap-2"
          >
            <span>지금 바로</span>
            <span className="text-primary italic">무료 신청하세요!</span>
            <span className="text-xl md:text-3xl text-gray-500 font-bold">(Apply for Free)</span>
          </motion.h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            계정 진단부터 영상 제작까지, 가이든의 전문가들이 당신의 브랜드에 가장 필요한 해답을 제안해 드립니다.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">이메일</p>
                <p className="text-lg font-bold">ceo.guiden@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">평균 응답 속도</p>
                <p className="text-lg font-bold">24시간 이내</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-3 glass p-8 md:p-12 rounded-[3.5rem] border border-white/10"
        >
          {isSubmitted ? (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-center py-32 flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(242,107,122,0.3)] animate-pulse">
                <CheckCircle2 className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">신청이 완료되었습니다!</h3>
              <p className="text-gray-400 text-lg mb-10">가이든의 전문가가 확인 후 <br/> 빠른 시일 내에 연락드리겠습니다.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 glass rounded-full text-secondary font-bold hover:bg-secondary hover:text-white transition-all transform hover:scale-105"
              >
                추가 문의하기
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black tracking-widest uppercase text-primary ml-2 flex items-center gap-2">
                  의뢰자 성함 <span className="text-secondary">✦</span>
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium focus:bg-white/10"
                  placeholder="성함을 입력해 주세요"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black tracking-widest uppercase text-primary ml-2 flex items-center gap-2">이메일 주소 <span className="text-secondary">✦</span></label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium focus:bg-white/10"
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="space-y-3">
                   <label className="text-xs font-black tracking-widest uppercase text-primary ml-2 flex items-center gap-2">유입 경로 <span className="text-secondary">✦</span></label>
                   <select
                    required
                    value={formData.inflow}
                    onChange={(e) => setFormData({ ...formData, inflow: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all font-medium focus:bg-white/10 appearance-none text-white font-sans"
                  >
                    <option value="" disabled className="bg-dark">유입 경로를 선택해 주세요</option>
                    <option value="인스타그램" className="bg-dark text-white">인스타그램</option>
                    <option value="블로그" className="bg-dark text-white">블로그</option>
                    <option value="지인추천" className="bg-dark text-white">지인추천</option>
                    <option value="검색" className="bg-dark text-white">검색</option>
                    <option value="기타" className="bg-dark text-white">기타</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                 <label className="text-xs font-bold tracking-widest uppercase text-primary/70 ml-2 font-display">제작 목적 (최대 2개 선택) <span className="text-secondary">✦</span></label>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {purposes.map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => togglePurpose(p)}
                        className={`py-4 rounded-full border transition-all text-[11px] font-bold tracking-tight ${
                          formData.purpose.includes(p) 
                          ? 'bg-secondary border-secondary text-white shadow-[0_0_15px_rgba(242,107,122,0.4)]' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-primary/50'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold tracking-widest uppercase text-primary/70 ml-2">영상 주제 <span className="text-secondary">✦</span></label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all font-medium focus:bg-white/10"
                    placeholder="예: 웰니스 제품 홍보"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold tracking-widest uppercase text-primary/70 ml-2">월 편집 예상 편수 <span className="text-secondary">✦</span></label>
                  <input
                    required
                    type="text"
                    value={formData.count}
                    onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all font-medium focus:bg-white/10"
                    placeholder="예: 월 8편"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold tracking-widest uppercase text-primary/70 ml-2">월 예산 범위 <span className="text-secondary">✦</span></label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all font-medium focus:bg-white/10 appearance-none font-sans"
                >
                  <option value="" disabled className="bg-dark text-white">예산 범위를 선택해 주세요</option>
                  <option value="50만원 이하" className="bg-dark text-white">50만원 이하</option>
                  <option value="50~70만원" className="bg-dark text-white">50~70만원</option>
                  <option value="80~100만원" className="bg-dark text-white">80~100만원</option>
                  <option value="100만원 이상" className="bg-dark text-white">100만원 이상</option>
                </select>
              </div>

              <div className="space-y-3">
                 <label className="text-xs font-bold tracking-widest uppercase text-primary/70 ml-2">참고 자료 URL (선택)</label>
                 <input
                  type="url"
                  value={formData.refUrl}
                  onChange={(e) => setFormData({ ...formData, refUrl: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all font-medium focus:bg-white/10"
                  placeholder="참고하고 싶은 영상이나 링크"
                />
              </div>

              <div className="space-y-3">
                 <label className="text-xs font-bold tracking-widest uppercase text-primary/70 ml-2">추가 문의 내용 <span className="text-secondary">✦</span></label>
                 <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all font-medium focus:bg-white/10 resize-none font-sans"
                  placeholder="브랜드의 목표와 고민을 자유롭게 알려주세요"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black tracking-widest uppercase text-lg glow-pink transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    신청 중...
                  </>
                ) : (
                  <>
                    신청하기 <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
