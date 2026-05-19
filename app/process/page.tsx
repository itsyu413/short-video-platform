"use client";

import Link from "next/link";

export default function ProcessPage() {
  const steps = [
    {
      title: "發現問題",
      text: "從日常生活觀察現象，例如：長時間觀看短影音後，是否更容易分心或難以專心讀書，或常出現「滑一下卻過很久」的情況，進而形成研究問題。",
    },
    {
      title: "蒐集資料",
      text: "透過學術資料庫（如 Google Scholar）或 Airiti Library 華藝線上圖書館查詢相關研究，了解理論背景，作為研究依據。",
    },
    {
      title: "提出假設",
      text: "根據蒐集到的資料提出可驗證的推測，例如：「觀看短影音會降低專注力表現」或「短影音使用者會低估實際經過時間」。",
    },
    {
      title: "設計實驗",
      text: "規劃研究方法與流程，例如將受試者分為兩組（一組觀看短影音，一組觀看長影片或不觀看），並控制時間、環境與內容一致，以確保實驗公平性。",
    },
    {
      title: "收集數據",
      text: "透過測驗或問卷蒐集資料，例如：進行專注力測驗（如閱讀理解或反應測試），或請受試者估計觀看時間，再與實際時間比較。",
    },
    {
      title: "分析結果並討論",
      text: "將收集到的數據進行整理與比較，計算平均值或差異，觀察不同組別之間在專注力或時間知覺上的變化，根據結果判斷假設是否成立，並討論可能原因、研究限制及未來可改進方向。",
    },
    {
      title: "發表作品",
      text: "準備科展海報與口頭報告，清楚呈現研究問題、研究方法、研究結果與結論。",
    },
  ];

  const reminders = [
    {
      title: "小論文第一學期",
      deadline: "9/1–10/15 中午12時",
      reminder: "建議暑假先完成選題與初步文獻蒐集，9月開始撰寫，10月初完成修稿。",
    },
    {
      title: "小論文第二學期",
      deadline: "2/1–3/13 中午12時",
      reminder: "建議寒假完成研究架構與資料整理，開學後進行最後修訂與上傳。",
    },
    {
      title: "科展校內準備期",
      deadline: "建議提前 2–3 個月",
      reminder: "多數科展需先經校內或縣市初選，建議提早完成題目、實驗設計與初步資料。",
    },
    {
      title: "科展縣市報名期",
      deadline: "約 2–3 月間",
      reminder: "各縣市日期不同，需依學校公告確認正式報名與送件截止日。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ecf2f8] text-[#1A2B49]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm px-16 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="logo"
              className="w-24 h-auto object-contain"
            />
            <div>
              <h1 className="font-bold text-lg">數位人文探究</h1>
              <p className="text-sm text-[#556070]">
                短影片與注意力研究導航中心
              </p>
            </div>
          </Link>

          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/">首頁</Link>
            <Link href="/topic">主題專區</Link>
            <Link href="/process" className="text-[#7B61FF] font-semibold">
              研究流程
            </Link>
            <Link href="/resources">文獻資源</Link>
            <Link href="/keywords">關鍵詞實驗室</Link>
            <Link href="/tools">工具區</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about">關於我們</Link>
            <Link href="/contact">參考諮詢團隊</Link>
          </nav>
        </div>
      </header>

      <section className="px-16 pt-40 pb-20">
        <div className="mb-12 rounded-[36px] bg-gradient-to-r from-[#1E2A4D] to-[#7B61FF] p-10 text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-200">
            RESEARCH PROCESS
          </p>

          <h1 className="text-5xl font-bold mb-6">研究流程</h1>

          <p className="max-w-4xl leading-9 text-white/85">
            本頁整理科展與小論文的七步驟研究流程，協助學生掌握從發現問題到發表作品的完整研究歷程。
          </p>
        </div>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-[#7B61FF] pl-4">
            科展研究七步驟流程
          </h2>

          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-7 h-1 bg-[#d8e2ee]" />

            <div className="relative grid grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1E2A4D] to-[#7B61FF] text-white font-bold shadow-md">
                    {index + 1}
                  </div>

                  <div className="rounded-2xl bg-[#f4f7fb] p-4 shadow-sm">
                    <p className="font-bold">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-[#f4f7fb] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-3">
                  {index + 1}. {step.title}
                </h3>

                <p className="text-[#556070] leading-8">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#7B61FF] pl-4">
            各階段截止日期與通知提醒
          </h2>

          <p className="text-[#556070] leading-8 mb-8">
            以下日期為依往年小論文投稿期與科展報名時程整理出的準備提醒。
            實際截止日仍需以學校、縣市或官方公告為準。
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {reminders.map((item) => (
              <div
                key={item.title}
                className="bg-[#f4f7fb] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <span className="shrink-0 rounded-full bg-[#7B61FF]/10 px-4 py-1 text-sm font-semibold text-[#7B61FF]">
                    {item.deadline}
                  </span>
                </div>

                <p className="text-[#556070] leading-8">
                  🔔 {item.reminder}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}