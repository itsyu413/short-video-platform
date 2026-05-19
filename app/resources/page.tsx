"use client";

import Link from "next/link";

export default function ResourcesPage() {
  const databases = [
    {
      name: "Airiti Library 華藝線上圖書館",
      subtitle: "查詢中文學術資料",
      intro:
        "研究者可透過 Airiti Library 有效蒐集與主題相關之中文學術文獻，提升資料來源的可信度與研究品質。",
      steps: [
        "透過學校圖書館進入 Airiti Library 網頁。",
        "在搜尋框輸入 internet addiction，完成後按下搜尋。",
        "篩選「相關程度較高」、「期刊論文」，主要領域選「社會科學」，次要學科選「心理學」。",
      ],
      value: [
        "收錄大量台灣及華文核心期刊，能提供具公信力的中文學術證據。",
        "能找到針對台灣高中生、教育環境與網路使用行為的在地研究。",
        "涵蓋社會科學、行為科學、資訊傳播與教育心理學等領域。",
      ],
      path:
        "部分全文需付費，學生可透過學校圖書館電子資源系統登入後下載 PDF 全文。",
      link: "https://www.airitilibrary.com/",
    },
    {
      name: "Scopus",
      subtitle: "查詢文獻引用與研究影響力",
      intro:
        "研究者可透過 Scopus 查詢期刊論文、作者與主題資訊，並審視相關文獻的引用狀況及研究影響力。",
      steps: [
        "透過學校圖書館進入 Scopus 網頁。",
        "搜尋 Time perception，並將搜尋範圍設為論文名稱、摘要、關鍵字。",
        "左側篩選 Social Sciences、Article，再依引用次數或年份排序。",
      ],
      value: [
        "可查詢國際期刊與引用資料，適合確認研究影響力。",
        "適合追蹤短影音、認知心理與媒體研究等新興議題。",
        "能連結心理學、神經科學與社會科學等跨領域資料。",
      ],
      path:
        "Scopus 為付費資料庫，學生通常需透過學校圖書館電子資源系統登入使用。",
      link: "https://www.scopus.com/",
    },
  ];

  const checks = [
    "資料是否來自政府機構、學術期刊或權威資料庫。",
    "是否有研究數據、實驗結果或統計模型支持理論。",
    "發布時間是否過舊，短影音相關研究建議優先使用近三年資料。",
    "研究過程是否可能有偏誤，例如樣本數不足或缺少控制組。",
    "資料是否經過同儕審查或正式發表。",
    "作者是否為相關領域之專家或學者。",
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
            <Link href="/resources" className="text-[#7B61FF] font-semibold">文獻資源</Link>
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
            RESEARCH RESOURCES
          </p>

          <h1 className="text-5xl font-bold mb-6">文獻資源</h1>

          <p className="max-w-5xl leading-9 text-white/85">
            本頁整理短影音、注意力與時間知覺研究可使用的資料庫入口、搜尋方法、
            資料判讀標準與 APA 引用方式，協助學生建立可信的研究基礎。
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#7B61FF] pl-4">
            資料庫入口與搜尋教學
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {databases.map((db) => (
              <div key={db.name} className="bg-white rounded-3xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-2">{db.name}</h3>
                <p className="text-[#7B61FF] font-semibold mb-5">{db.subtitle}</p>

                <p className="text-[#556070] leading-8 mb-6">{db.intro}</p>

                <div className="bg-[#f4f7fb] rounded-2xl p-6 mb-6">
                  <h4 className="font-bold mb-3">查詢步驟</h4>
                  <ol className="space-y-3 text-[#556070] list-decimal pl-5">
                    {db.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-3">資料庫價值</h4>
                  <ul className="space-y-3 text-[#556070]">
                    {db.value.map((v) => (
                      <li key={v}>・{v}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-[#556070] leading-8 mb-6">
                  <span className="font-semibold text-[#1A2B49]">使用路徑：</span>
                  {db.path}
                </p>

                <button
                  onClick={() => window.open(db.link, "_blank")}
                  className="bg-[#1E2A4D] text-white px-6 py-3 rounded-full font-bold"
                >
                  前往資料庫
                </button>
              </div>
            ))}
          </div>
        </section>

      <section className="rounded-3xl p-10 shadow-md mb-14 bg-gradient-to-br from-white to-[#eef3f9]">
  <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#7B61FF] pl-4">
    資料判讀方法
  </h2>

  <div className="space-y-6">
    {[
      {
        title: "資料是否為可信來源（政府機構／學術期刊）",
        standard: "優先採納收錄於國際權威資料庫（如 Scopus）或具有 ISSN 編號的正式學術期刊。",
        example: "本站參考之《BMC Psychology》為知名開放獲取期刊，相較於匿名論壇或社群媒體貼文，其內容具有法律與學術上的公信力。",
      },
      {
        title: "是否有研究數據支持理論",
        standard: "拒絕只有「形容詞」的資料。優質研究必須包含統計數據、數學模型或實驗結果。",
        example: "參考 Jiang et al. (2026) 的研究，其使用「漂移擴散模型（DDM）」量化抑制控制能力，證明短影音成癮者在大腦決策門檻上的差異。",
      },
      {
        title: "發布時間是否過舊",
        standard: "短影音演算法迭代極快，資料應以近 3 年內為優。",
        example: "Scopus 的 Documents by Year 趨勢圖顯示，相關研究在 2023 年後才出現爆發性成長，因此引用 2025、2026 年論文更能反映現況。",
      },
      {
        title: "研究過程是否偏誤（Research Bias）",
        standard: "檢查實驗設計是否包含控制組與實驗組，樣本數是否具備代表性。",
        example: "判讀《臺灣諮商心理學報》論文時，應檢視問卷發放對象與回收數量。若僅針對單一班級，推論至全台高中生時需註明限制。",
      },
      {
        title: "資料是否經過審查或正式發表",
        standard: "確認文獻是否標註 Peer-reviewed（同儕審查）。",
        example: "華藝線上圖書館所下載的期刊論文多經過審查，能確保研究方法（如 Go/No-go 實驗設計）符合科學標準。",
      },
      {
        title: "作者是否為相關領域之專家或學者",
        standard: "檢視作者所屬機構及其過往研究發表領域。",
        example: "觀察作者是否隸屬心理學系或腦科學研究所；跨領域團隊產出的資料通常可信度更高。",
      },
    ].map((item, index) => (
      <div
        key={item.title}
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border-l-4 border-[#7B61FF]"
      >
        <div className="flex gap-5">
          <div className="shrink-0 w-12 h-12 rounded-full bg-[#1E2A4D] text-white flex items-center justify-center font-bold">
            {index + 1}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>

            <p className="text-[#556070] leading-8 mb-3">
              <span className="font-semibold text-[#1A2B49]">判讀標準：</span>
              {item.standard}
            </p>

            <p className="text-[#556070] leading-8">
              <span className="font-semibold text-[#1A2B49]">實例應用：</span>
              {item.example}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            APA 引用方式
          </h2>

          <p className="text-[#556070] leading-8 mb-6">
            本研究採用 APA 作為引用與參考文獻之撰寫格式。正文中引用資料時，
            需標示作者與出版年份；報告最後則需完整列出作者、年份、標題、
            期刊名稱或出版單位與網址等資訊。
          </p>

          <div className="bg-[#1E2A4D] text-white rounded-2xl p-6 leading-8">
            正確引用能清楚標示資料來源、尊重原作者研究成果，也有助於讀者查詢與驗證資料正確性，
            提升研究專業性與可信度，避免抄襲。
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">不知道該用什麼關鍵詞？</h2>
          <p className="text-[#556070] mb-6">
            前往關鍵詞實驗室，組合中英文關鍵詞並建立 Boolean 搜尋式。
          </p>

          <Link
            href="/keywords"
            className="inline-block bg-[#7B61FF] text-white px-8 py-4 rounded-full font-bold"
          >
            前往關鍵詞實驗室
          </Link>
        </section>
      </section>
    </main>
  );
}