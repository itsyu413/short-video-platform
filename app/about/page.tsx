import Link from "next/link";

export default function AboutPage() {
  const goals = [
    "提供科展與小論文研究參考架構",
    "協助學生理解短影音與注意力、時間知覺的關聯",
    "培養資料搜尋、判讀與引用能力",
    "整合可信文獻資源與研究工具",
    "提升學生自主研究與資訊素養",
    "強化圖書館員於研究歷程中的輔助角色",
  ];

  const members = [
  
    {
      name: "葉珈瑄",
      role: "研究資料整理",
      task: "負責文獻蒐集、書面內容撰寫與資料分析。",
    },
    {
      name: "房立穎",
      role: "研究資料整理",
      task: "負責文獻蒐集、書面內容撰寫與資料分析。",
    },
    {
      name: "許靜儀",
      role: "研究資料整理",
      task: "負責文獻蒐集、書面內容撰寫與資料分析。",
    },
    {
      name: "呂宥萱",
      role: "網站設計",
      task: "負責平台架構規劃、網站介面設計與開發。",
    },
    {
      name: "岑家琪",
      role: "成果展示",
      task: "負責網站功能測試、簡報製作與口頭報告。",
    },
    {
      name: "陳姿涵",
      role: "成果展示",
      task: "負責網站功能測試、簡報製作與口頭報告。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ecf2f8] text-[#1A2B49]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm px-16 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="logo" className="w-24 h-auto object-contain" />
            <div>
              <h1 className="font-bold text-lg">數位人文探究</h1>
              <p className="text-sm text-[#556070]">短影片與注意力研究導航中心</p>
            </div>
          </Link>

          <nav className="flex gap-6 text-sm font-medium text-[#1A2B49]">
            <Link href="/">首頁</Link>
            <Link href="/topic">主題專區</Link>
            <Link href="/process">研究流程</Link>
            <Link href="/resources">文獻資源</Link>
            <Link href="/keywords">關鍵詞實驗室</Link>
            <Link href="/tools">工具區</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about" className="text-[#7B61FF] font-semibold">關於我們</Link>
            <Link href="/contact">參考諮詢團隊</Link>
          </nav>
        </div>
      </header>

      <section className="px-16 pt-40 pb-20">
        <div className="mb-12 rounded-[36px] bg-gradient-to-r from-[#1E2A4D] to-[#7B61FF] p-10 text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-200">
            ABOUT US
          </p>

          <h1 className="text-5xl font-bold mb-6">關於我們</h1>

          <p className="max-w-4xl leading-9 text-white/85">
            本頁介紹平台建立理念、企劃背景與團隊分工，說明本平台如何協助學生進行科展與小論文研究。
          </p>
        </div>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            平台理念
          </h2>

          <p className="text-[#556070] leading-9 mb-5">
          本平台以短影音議題為核心，結合研究資源、文獻資料與學習工具，協助學生探索短影音對注意力與時間知覺的影響。希望透過系統化的資訊整理與研究引導，培養學生的資訊素養、研究能力與自主學習精神。

          </p>

          
        </section>
        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
  <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#7B61FF] pl-4">
    使用者族群與需求說明
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-[#f4f7fb] rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3 text-[#7B61FF]">
        高中職學生
      </h3>

      <p className="text-[#556070] leading-7">
        平台主要使用者，提供科展與小論文研究方向、
        文獻資源與研究工具，協助學生建立研究能力。
      </p>
    </div>

    <div className="bg-[#f4f7fb] rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3 text-[#7B61FF]">
        教師
      </h3>

      <p className="text-[#556070] leading-7">
        可作為課程延伸教材與研究指導輔助工具，
        協助學生規劃研究主題與研究歷程。
      </p>
    </div>

    <div className="bg-[#f4f7fb] rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3 text-[#7B61FF]">
        學校圖書館員
      </h3>

      <p className="text-[#556070] leading-7">
        作為資訊素養教學與參考諮詢服務的輔助平台，
        提供研究支援與文獻檢索指引。
      </p>
    </div>

  </div>
</section>
        

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
  <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
    平台目標
  </h2>

  <div className="space-y-5 text-[#556070]">

    {goals.map((goal) => (
      <div
        key={goal}
        className="flex items-start gap-4"
      >
        <div className="w-8 h-8 rounded-full bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center font-bold flex-shrink-0">
          ✓
        </div>

        <p className="leading-8">
          {goal}
        </p>
      </div>
    ))}

  </div>
</section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#7B61FF] pl-4">
            團隊介紹
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl p-7 shadow-md hover:shadow-lg transition">
                <div className="w-14 h-14 rounded-full bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center text-2xl font-black mb-5">
                  {member.name.slice(0, 1)}
                </div>

                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>

                <p className="inline-block bg-[#eef2ff] text-[#7B61FF] px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {member.role}
                </p>

                <p className="text-[#556070] leading-8">{member.task}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <footer className="bg-[#050816] text-white px-16 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="max-w-md">
              <img src="/logo.png" alt="logo" className="w-28 h-auto object-contain mb-4" />
              <h2 className="text-2xl font-bold">數位人文探究</h2>
              <p className="text-slate-300 mt-2">短影片與注意力研究導航中心</p>
              <p className="text-slate-400 mt-4 leading-7">
                引導影音研究方向，將媒體使用行為轉化為知覺依據。
              </p>
            </div>

            <div className="flex gap-16 lg:gap-24">
              <div>
                <h3 className="font-bold text-lg mb-3">平台產品</h3>
                <div className="flex flex-col gap-2 text-slate-300">
                  <Link href="/topic">主題專區</Link>
                  <Link href="/process">研究流程</Link>
                  <Link href="/resources">文獻資源</Link>
                  <Link href="/keywords">關鍵詞實驗室</Link>
                  <Link href="/tools">工具區</Link>
                  <Link href="/faq">FAQ</Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">聯絡資訊</h3>
                <p className="text-slate-300">電話：02 2621 5656</p>
                <p className="text-slate-300 mt-2 leading-7">
                  地址：251新北市淡水區中興里英專路151號
                </p>

                <div className="mt-4 flex flex-col gap-2 text-slate-300">
                  <Link href="/about">關於我們</Link>
                  <Link href="/contact">參考諮詢團隊 / 聯絡方式</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-5 text-slate-500 text-sm">
            © 2026 Digital Humanities Research Navigation Platform
          </div>
        </div>
      </footer>
    </main>
  );
}