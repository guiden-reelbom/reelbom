import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, Zap, Camera, Megaphone, Building2, User, FileText, MessageSquare, ArrowRight, Lock, MessageCircle } from 'lucide-react';
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

  const purposes = [
    { id: 'reels', label: '릴스/숏폼 제작', icon: Camera },
    { id: 'ads', label: '광고용 숏폼', icon: Megaphone },
    { id: 'brand', label: '브랜드 홍보 영상', icon: Building2 },
    { id: 'branding', label: '개인 브랜딩 영상', icon: User },
    { id: 'blog', label: '블로그 운영 대행', icon: FileText },
    { id: 'threads', label: '스레드 운영 대행', icon: MessageSquare }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Hardcoded configuration for production compatibility
    const serviceId = 'service_so3tlnj';
    const templateId = 'template_9trrpey';
    const publicKey = '5ktn5fY6vVZYHI1UA';

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS Configuration missing in code.');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          inflow: formData.inflow,
          purpose: formData.purpose.join(', '),
          subject: formData.subject,
          count: formData.count,
          budget: formData.budget,
          message: formData.message,
          url: formData.refUrl || '없음',
        },
        publicKey
      );
      
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
    } else if (current.length < 3) {
      setFormData({ ...formData, purpose: [...current, p] });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-[#1e1635]/90 overflow-hidden relative">
      {/* Background atmosphere for Contact */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Diagnosis Items */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12 mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-primary font-bold tracking-[0.2em] text-sm md:text-base">
              <span className="text-xl">✨</span>
              <span>문의하기 (CONTACT)</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white leading-[1.1] break-keep">
              무료로 계정 흐름을 <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">먼저 진단해드립니다</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-bold leading-relaxed break-keep max-w-lg mb-10">
              계정 상태와 제작 목적을 확인한 뒤, <br />
              지금 필요한 숏폼 방향을 현실적으로 제안해드립니다.
            </p>


            <div className="space-y-6 pt-10 border-t border-white/5">
              <div className="flex items-center gap-4 mb-4">
                 <p className="text-white font-black text-xs tracking-widest uppercase shrink-0">
                    릴봄이 제공하는 무료 진단 항목
                 </p>
                 <div className="h-[2px] flex-1 bg-primary" />
              </div>
              {[
                { id: '01', title: '프로필 진단', desc: '첫 방문자가 3초 안에 계정의 목적을 이해하는지 확인합니다.', icon: User },
                { id: '02', title: '콘텐츠 진단', desc: '최근 게시물의 후킹, 자막, 반복되는 흐름을 점검합니다.', icon: Camera },
                { id: '03', title: '전환 흐름 진단', desc: '조회 후 팔로우, 저장, 문의로 이어지는 흐름을 확인합니다.', icon: Zap },
                { id: '04', title: '개선 방향 제안', desc: '바로 적용할 수 있는 콘텐츠 방향과 수정 포인트를 제안합니다.', icon: MessageSquare }
              ].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-3xl border border-white/10 flex gap-6 items-center hover:bg-secondary/5 hover:border-secondary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40 font-bold leading-relaxed break-keep">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>


            {/* Contact Info Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                <a 
                  href="https://open.kakao.com/me/reelbom" 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass p-5 rounded-3xl border border-white/10 flex items-center gap-4 hover:border-primary/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <MessageCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">카카오톡 오픈채팅</p>
                     <p className="text-xs md:text-sm font-black text-white group-hover:text-primary transition-colors leading-tight whitespace-nowrap">1:1 오픈채팅 바로가기 →</p>
                  </div>
                </a>

                <div className="glass p-5 rounded-3xl border border-white/10 flex items-center gap-4 min-w-0 overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <Send className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                     <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">이메일</p>
                     <p className="text-[9px] min-[380px]:text-[10px] sm:text-xs md:text-sm font-black text-white break-all leading-tight">ceo.guiden@gmail.com</p>
                  </div>
                </div>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-600 mt-6 pl-2">
               <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
               평균 응답 속도 <span className="text-secondary font-black ml-1">24시간 이내</span>
            </div>
          </motion.div>
        </div>


        {/* Right Column: Form */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-7 bg-[#1c182d] p-6 md:p-12 lg:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 relative shadow-[0_0_100px_rgba(0,0,0,0.5)] z-20"
        >
          {isSubmitted ? (
            <div className="text-center py-20">
               <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
               </div>
               <h3 className="text-3xl font-black text-white mb-4">신청이 완료되었습니다!</h3>
               <p className="text-gray-400 font-bold mb-10 leading-relaxed text-lg">릴봄 전문가가 확인 후 <br /> 최대한 빨리 연락드리겠습니다.</p>
               <button 
                 onClick={() => setIsSubmitted(false)}
                 className="px-10 py-4 rounded-full border border-white/20 font-black hover:bg-white/5 transition-all text-white"
               >
                 추가 문의하기
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 flex gap-5 items-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                 <div className="w-12 h-12 rounded-full bg-[#F26B7A]/15 flex items-center justify-center shrink-0 border border-[#F26B7A]/30 shadow-[0_0_15px_rgba(242,107,122,0.1)]">
                    <Zap className="w-6 h-6 text-[#F26B7A]" />
                 </div>
                 <p className="text-sm md:text-base text-white/80 font-bold leading-[1.6] break-keep relative z-10">
                    정확히 정해진 내용이 없어도 괜찮습니다. <br className="hidden sm:block" />
                    현재 계정의 고민이나 만들고 싶은 방향만 남겨주세요.
                 </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-base font-black tracking-widest text-white ml-2 uppercase">의뢰자 성함 <span className="text-[#F26B7A]">*</span></label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold placeholder:text-white/40 text-white text-base"
                    placeholder="의뢰자 성함을 입력해 주세요"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-base font-black tracking-widest text-white ml-2 uppercase">이메일 <span className="text-[#F26B7A]">*</span></label>
                  <input
                    required
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold placeholder:text-white/40 text-white text-base"
                    placeholder="이메일을 입력해 주세요"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-base font-black tracking-widest text-white ml-2 uppercase">제작 목적 (최대 3개 선택) <span className="text-[#F26B7A]">*</span></label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {purposes.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => togglePurpose(p.label)}
                      className={`py-5 px-3 rounded-2xl border flex items-center justify-center gap-3 transition-all text-sm font-bold ${
                        formData.purpose.includes(p.label)
                        ? 'bg-secondary/30 border-secondary text-white shadow-[0_0_20px_rgba(157,112,255,0.2)]'
                        : 'bg-black/60 border-white/10 text-white/50 hover:border-white/30'
                      }`}
                    >
                      <p.icon className={`w-5 h-5 ${formData.purpose.includes(p.label) ? 'text-secondary' : 'text-white/50'}`} />
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-base font-black tracking-widest text-white ml-2 uppercase">문의 내용(고민) <span className="text-[#F26B7A]">*</span></label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-3xl px-6 py-6 outline-none focus:border-primary transition-all font-bold placeholder:text-white/40 resize-none h-48 text-white text-base leading-relaxed"
                    placeholder="브랜드의 목표와 고민을 자유롭게 알려주세요"
                  />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-base font-black tracking-widest text-white ml-2 uppercase">영상 주제 (선택)</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold placeholder:text-white/40 text-white text-base"
                    placeholder="예: 웰니스 제품 홍보"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-base font-black tracking-widest text-white ml-2 uppercase">월 제작 예상 편수 (선택)</label>
                  <input
                    type="text"
                    value={formData.count}
                    onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold placeholder:text-white/40 text-white text-base"
                    placeholder="예: 월 8편"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-base font-black tracking-widest text-white ml-2 uppercase">예산 범위 (선택)</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold appearance-none text-white text-base font-sans"
                  >
                    <option value="" className="bg-dark">선택해 주세요</option>
                    <option value="50만원 이하" className="bg-dark">50만원 이하</option>
                    <option value="50~100만원" className="bg-dark">50~100만원</option>
                    <option value="100~200만원" className="bg-dark">100~200만원</option>
                    <option value="200만원 이상" className="bg-dark">200만원 이상</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-base font-black tracking-widest text-white ml-2 uppercase">참고 자료 URL (선택)</label>
                  <input
                    type="text"
                    value={formData.refUrl}
                    onChange={(e) => setFormData({ ...formData, refUrl: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold placeholder:text-white/40 text-white text-base"
                    placeholder="내 계정이나 참고 영상 링크"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-base font-black tracking-widest text-white ml-2 uppercase">유입 경로 (선택)</label>
                <select
                  value={formData.inflow}
                  onChange={(e) => setFormData({ ...formData, inflow: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all font-bold appearance-none text-white text-base font-sans"
                >
                   <option value="" className="bg-dark">유입 경로를 선택해 주세요</option>
                   <option value="인스타그램" className="bg-dark">인스타그램</option>
                   <option value="블로그" className="bg-dark">블로그</option>
                   <option value="유튜브" className="bg-dark">유튜브</option>
                   <option value="지인추천" className="bg-dark">지인추천</option>
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-5 bg-gradient-to-r from-[#9D70FF] to-[#F26B7A] text-white rounded-full font-black text-xl tracking-widest transition-all hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(242,107,122,0.3)] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-[#F26B7A]/10 group"
                >
                  {isSending ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      무료 상담 신청하기 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-6 flex items-center justify-center gap-2 font-bold">
                   <Lock className="w-3 h-3" />
                   입력하신 정보는 상담 목적으로만 사용됩니다.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
