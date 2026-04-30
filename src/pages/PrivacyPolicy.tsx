import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-secondary font-bold mb-12 hover:text-white active:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> 메인으로 돌아가기
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass p-8 md:p-16 rounded-[3rem] border border-white/10"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">개인정보처리방침 (Privacy Policy)</h1>
          
          <div className="space-y-12 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              가이든(이하 “회사”라 합니다)은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제1조 (개인정보의 처리 목적)</h2>
              <p className="mb-4 text-white/80">회사는 문의 폼을 통해 수집한 개인정보를 다음의 목적을 위해 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">1. 문의 접수 및 상담</h3>
                  <p>– 영상 제작 문의 접수</p>
                  <p>– 고객 상담 및 서비스 안내</p>
                  <p>– 문의 내용 확인 및 답변 제공</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">2. 견적 제공 및 제안서 발송</h3>
                  <p>– 서비스 이용 요금 견적 제공</p>
                  <p>– 맞춤형 제안서 작성 및 발송</p>
                  <p>– 프로젝트 가능 여부 검토</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">3. 서비스 관련 안내 및 공지</h3>
                  <p>– 문의 진행 상황 안내</p>
                  <p>– 서비스 관련 중요 공지사항 전달</p>
                  <p>– 프로젝트 일정 및 결과 안내</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제2조 (수집하는 개인정보의 항목)</h2>
              <p className="mb-4">회사는 문의 폼을 통해 다음과 같은 개인정보를 수집하고 있습니다.</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">1. 필수 수집 항목</h3>
                  <p>가. 의뢰자 성함(이름)</p>
                  <p>나. 이메일 주소</p>
                  <p>다. 유입 경로</p>
                  <p>라. 제작목적 (최대 3개 선택)</p>
                  <p>마. 영상 주제</p>
                  <p>바. 월 편집 예상 편수</p>
                  <p>사. 월 예산범위</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">2. 선택 수집 항목</h3>
                  <p>가. 영상 설명(추가 설명 사항)</p>
                  <p>나. 참고 자료(URL)</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">3. 자동으로 수집되는 정보</h3>
                  <p>가. IP 주소, 나. 쿠키, 다. 서비스 이용 기록, 라. 방문 일시, 마. 기기 정보(운영체제, 브라우저 종류), 바. 문의 접수 일시</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제3조 (개인정보의 수집 방법)</h2>
              <p>회사는 다음과 같은 방법으로 개인정보를 수집합니다.</p>
              <p>1. 홈페이지 문의 폼을 통한 수집: 이용자가 직접 입력한 정보, 문의하기 버튼 클릭 시 제출되는 정보</p>
              <p>2. 자동 수집: 웹사이트 방문 및 문의 폼 작성 시 자동으로 생성·수집되는 정보</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제4조 (개인정보의 처리 및 보유 기간)</h2>
              <p>1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <p>2. 문의 폼을 통해 수집된 개인정보의 처리 및 보유 기간은 다음과 같습니다.</p>
              <p className="pl-4">가. 문의 접수 및 상담 관련 정보</p>
              <p className="pl-8">– 수집 항목: 의뢰자 성함, 이메일 주소, 유입 경로, 제작목적, 영상 주제, 월 편집 예상 편수, 월 예산범위, 영상 설명, 참고 자료</p>
              <p className="pl-8">– 보유 근거: 정보주체의 동의</p>
              <p className="pl-8">– 보유 기간: 문의 접수일로부터 3년</p>
              <p className="pl-8">– 근거 법령: 전자상거래 등에서의 소비자보호에 관한 법률</p>
              <p>3. 다만, 다음의 경우에는 해당 기간 종료 시까지 보유합니다.</p>
              <p className="pl-4">가. 계약 또는 청약철회 등에 관한 기록 (보존 이유: 전자상거래법 / 보존 기간: 5년)</p>
              <p className="pl-4">나. 대금결제 및 재화 등의 공급에 관한 기록 (보존 이유: 전자상거래법 / 보존 기간: 5년)</p>
              <p className="pl-4">다. 소비자의 불만 또는 분쟁처리에 관한 기록 (보존 이유: 전자상거래법 / 보존 기간: 3년)</p>
              <p className="pl-4">라. 웹사이트 방문 기록 (보존 이유: 통신비밀보호법 / 보존 기간: 3개월)</p>
              <p>4. 보유 기간이 경과한 개인정보는 지체 없이 파기합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제5조 (개인정보의 제3자 제공)</h2>
              <p>1. 회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
              <p>2. 회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
              <p className="pl-4">가. 이용자가 사전에 동의한 경우</p>
              <p className="pl-4">나. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제6조 (개인정보 처리업무의 위탁)</h2>
              <p className="mb-4">1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <div className="space-y-4 pl-4 mb-6">
                <p>가. 고객 문의 접수 및 이메일 발송 처리 (수탁자: EmailJS, Google LLC / 내용: 웹사이트 문의하기 시스템 연동 및 문의 내역(이메일) / 수신·보관 기간: 서비스 제공 기간 동안 (또는 개인정보 보관 기간 만료 시까지))</p>
                <p>나. 웹사이트 접속 환경 제공 및 운영 (수탁자: Cloudflare, Inc., GitHub, Inc. / 내용: 웹사이트 호스팅 및 CDN 연동을 통한 접속 환경 제공 / 기간: 서비스 제공 기간 동안)</p>
              </div>
              <p className="mb-4">2. 회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지 감독하고 있습니다.</p>
              <p>3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제7조 (정보주체의 권리·의무 및 행사방법)</h2>
              <p>1. 정보주체는 개인정보 열람 요구, 정정 요구, 삭제 요구, 처리정지 요구 권리를 행사할 수 있습니다.</p>
              <p>2. 서면, 전자우편, 전화 등을 통해 요청 시 지체 없이 조치하겠습니다.</p>
              <p>3. 정정/삭제 요청 시 완료 전까지 이용하거나 제공하지 않습니다.</p>
              <p>4. 대리인을 통한 행사도 가능하며 위임장을 제출해야 합니다.</p>
              <p>5. 만 14세 미만 아동의 경우 법정대리인의 동의가 필요합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제8조 (개인정보의 파기)</h2>
              <p>1. 목적 달성 등 불필요하게 되었을 때 지체 없이 파기합니다.</p>
              <p>2. 법령에 따라 계속 보존해야 하는 경우 별도 DB로 옮겨 보존합니다.</p>
              <p>3. 파기 방법: 전자적 파일은 재생 불가하게 삭제, 종이 문서는 분쇄 또는 소각합니다.</p>
              <p>4. 문의 삭제 요청, 답변 완료 및 보유 기간 경과, 목적 달성 시 즉시 파기됩니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제9조 (개인정보의 안전성 확보조치)</h2>
              <p>회사는 내부관리계획 수립, 필수 직원 교육, 접근권한 관리, 접근통제시스템, 암호화(이메일), 보안프로그램 설치, SSL 적용 등 조치를 취하고 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제10조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</h2>
              <p>1. 개별적 맞춤 서비스를 위해 쿠키를 사용합니다.</p>
              <p>2. 쿠키는 브라우저에 임시 저장되는 소량의 정보입니다.</p>
              <p>3. 사용 목적: 입력 정보 임시 저장, 방문 형태 파악, 서비스 최적화</p>
              <p>4. 거부 방법: 브라우저 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제11조 (개인정보 보호책임자)</h2>
              <p>성명: 장은채 | 직책: 대표 | 이메일: ceo.guiden@gmail.com</p>
              <p>정보주체께서는 서비스 중 발생한 모든 개인정보 보호 관련 문의를 위 연락처로 하실 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제12조 (개인정보 열람청구)</h2>
              <p>부서명: 고객지원팀 | 담당자: 장은채 | 이메일: ceo.guiden@gmail.com</p>
              <p>개인정보보호 종합포털(www.privacy.go.kr)을 통해서도 열람청구가 가능합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제13조 (권익침해 구제방법)</h2>
              <p>개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</p>
              <p>개인정보침해신고센터: 118 (privacy.kisa.or.kr)</p>
              <p>대검찰청 사이버수사과: 1301 (www.spo.go.kr)</p>
              <p>경찰청 사이버안전국: 182 (ecrm.cyber.go.kr)</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제14조 (개인정보 처리방침의 변경)</h2>
              <p>1. 이 방침은 2026년 4월 21일부터 적용됩니다.</p>
              <p>2. 이전 방침 이력은 2026년 4월 9일 버전이 있습니다.</p>
              <p>3. 변경 시 최소 7일 전(중요한 경우 30일 전) 홈페이지 공지하겠습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제15조 (개인정보의 열람 및 정정·삭제 요청)</h2>
              <p>이용자는 언제든 열람/정정/삭제 요청이 가능하며, 보호책임자에게 연락 시 지체 없이 조치합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6">제16조 (문의 폼 이용 시 유의사항)</h2>
              <p>1. 제출 정보는 문의 처리 및 서비스 제공 목적으로만 사용됩니다.</p>
              <p>2. 허위 정보 입력 시 불이익은 본인에게 있습니다.</p>
              <p>3. 주민번호, 신용카드번호 등 민감 정보는 포함하지 마십시오.</p>
              <p>4. 타의 개인정보 무단 수집 시 처벌받을 수 있습니다.</p>
            </section>
            
            <p className="pt-12 text-xs opacity-50 border-t border-white/10">본 방침 시행일: 2026년 4월 21일</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
