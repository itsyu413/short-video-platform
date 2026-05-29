"use client";

import Link from "next/link";
import { useState } from "react";

type Keyword = {
  zh: string;
  en: string;
  desc: string;
};

const categories: Record<string, Keyword[]> = {
  主題核心: [
    { zh: "短影音 / 短影片", en: "Short-form Video", desc: "研究的核心媒介，指 60 秒以內的直式影音內容。" },
    { zh: "演算法推播", en: "Algorithmic Recommendation", desc: "探討平台如何透過自動化篩選，將特定內容精準投遞給使用者。" },
    { zh: "沉浸式設計", en: "Immersive Design", desc: "分析 App 介面（如自動循環播放、全螢幕顯示）如何維持使用者黏性。" },
    { zh: "數位內容消費", en: "Digital Content Consumption", desc: "描述當前大眾對於資訊獲取速度與形式的轉變。" },
  ],
  認知與心理: [
    { zh: "注意力碎片化", en: "Attention Fragmentation", desc: "描述短時間內頻繁接收不同資訊，導致深度專注力下降的現象。" },
    { zh: "時間知覺 / 時間感", en: "Time Perception", desc: "研究使用者進入心流狀態後，對現實時間流逝產生的誤判。" },
    { zh: "認知負荷", en: "Cognitive Load", desc: "探討大腦在短時間內處理大量高頻刺激影像時的心理負擔。" },
    { zh: "多巴胺回饋機制", en: "Dopamine Reward System", desc: "分析短影音的即時回饋感如何引發大腦持續尋求刺激。" },
  ],
  媒體行為: [
    { zh: "數位成癮 / 網路成癮", en: "Digital Addiction / Internet Addiction", desc: "探討過度依賴短影音對青少年日常生活的負面衝擊。" },
    { zh: "錯失焦慮", en: "Fear of Missing Out / FOMO", desc: "分析使用者因擔心錯過流行話題，而產生的焦慮與持續滑動行為。" },
    { zh: "碎片化閱讀", en: "Snackable Content", desc: "描述將知識或娛樂內容零食化，追求快速、淺層吸收的消費行為。" },
    { zh: "心理健康", en: "Mental Health", desc: "涵蓋焦慮、憂鬱及社交孤立等與數位媒介使用相關的健康議題。" },
  ],
};

export default function KeywordsPage() {
  const [selected, setSelected] = useState<Keyword[]>([]);
  const [mode, setMode] = useState("AND");
  const [language, setLanguage] = useState<"zh" | "en" | "both">("en");
  function getWord(item: Keyword) {
    if (language === "zh") return item.zh;
    if (language === "both") return `${item.zh} / ${item.en}`;
    return item.en;
  }
  function toggle(item: Keyword) {
    const exists = selected.some((word) => word.en === item.en);

    if (exists) {
      setSelected(selected.filter((word) => word.en !== item.en));
    } else if (selected.length < 3) {
      setSelected([...selected, item]);
    }
  }

  function getWord(item: Keyword) {
    if (language === "zh") return item.zh;
    if (language === "both") return `${item.zh} / ${item.en}`;
    return item.en;
  }

  const query = selected
  .map((item) => `("${getWord(item)}")`)
  .join(` ${mode} `);

  function clearAll() {
    setSelected([]);
  }

  function copyText() {
    if (!query) return;
    navigator.clipboard.writeText(query);
    alert("已複製搜尋式！");
  }

  function openAiriti() {
    window.open("https://www.airitilibrary.com/Home/Index", "_blank");
  }

  function openScopus() {
    if (!query) return;
    window.open(
      `https://www.scopus.com/results/results.uri?query=${encodeURIComponent(query)}`,
      "_blank"
    );
  }

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
            <Link href="/keywords" className="text-[#7B61FF] font-semibold">關鍵詞實驗室</Link>
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
            KEYWORD LAB
          </p>

          <h1 className="text-5xl font-bold mb-6">關鍵詞實驗室</h1>

          <p className="max-w-5xl leading-9 text-white/85">
            使用者可點選最多三個關鍵詞，並選擇中文、英文或中英並列，
            建立 Boolean 搜尋式，前往華藝線上圖書館或 Scopus 進行文獻查找。
          </p>
        </div>

        {Object.entries(categories).map(([title, items]) => (
          <section key={title} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
              {title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => {
                const isSelected = selected.some((word) => word.en === item.en);

                return (
                  <div
                    key={item.en}
                    onClick={() => toggle(item)}
                    className={`cursor-pointer rounded-2xl p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg ${
                      isSelected
                        ? "bg-gradient-to-br from-[#1E2A4D] to-[#7B61FF] text-white"
                        : "bg-white"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.zh}</h3>

                    <p className={isSelected ? "text-white/80" : "text-[#6C8EBF]"}>
                      {item.en}
                    </p>

                    <p className={isSelected ? "mt-4 text-white/85" : "mt-4 text-[#556070]"}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <section className="rounded-3xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            Boolean 搜尋組合
          </h2>

          <div className="mb-6">
            <p className="mb-3 font-semibold">搜尋語言</p>

            <div className="flex flex-wrap gap-3">
              {[
                ["zh", "中文"],
                ["en", "英文"],
                ["both", "中英並列"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setLanguage(value as "zh" | "en" | "both")}
                  className={`px-5 py-2 rounded-full font-semibold ${
                    language === value
                      ? "bg-[#7B61FF] text-white"
                      : "bg-[#ecf2f8] text-[#1A2B49]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-3 font-semibold">搜尋邏輯</p>

            <div className="flex gap-3">
              <button
                onClick={() => setMode("AND")}
                className={`px-5 py-2 rounded-full font-semibold ${
                  mode === "AND" ? "bg-[#7B61FF] text-white" : "bg-[#ecf2f8] text-[#1A2B49]"
                }`}
              >
                AND 精準查找
              </button>

              <button
                onClick={() => setMode("OR")}
                className={`px-5 py-2 rounded-full font-semibold ${
                  mode === "OR" ? "bg-[#7B61FF] text-white" : "bg-[#ecf2f8] text-[#1A2B49]"
                }`}
              >
                OR 擴大搜尋
              </button>
            </div>
          </div>

          <p className="mb-4 text-[#556070]">已選關鍵詞：</p>

          <div className="flex flex-wrap gap-3 min-h-12 mb-8">
            {selected.length === 0 ? (
              <span className="text-[#556070]">尚未選擇關鍵詞</span>
            ) : (
              selected.map((item) => (
                <span
                  key={item.en}
                  className="rounded-full bg-[#7B61FF]/10 px-4 py-2 text-[#7B61FF] font-semibold"
                >
                  {getWord(item)}
                </span>
              ))
            )}
          </div>

          <div className="rounded-2xl bg-[#1E2A4D] p-6 text-white mb-6">
          <p className="font-bold mb-2">
  學術資料庫檢索式
</p>

<p className="text-sm text-white/70 mb-4">
  已依據 Boolean Logic 自動產生學術檢索格式
</p>

            <div className="rounded-xl bg-white/10 p-4 font-mono break-words">
              {query || "請選擇關鍵字"}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={clearAll} className="rounded-full bg-gray-200 px-5 py-3 font-semibold text-[#1A2B49]">
              清除全部
            </button>

            <button onClick={copyText} className="rounded-full bg-[#7B61FF] px-5 py-3 font-semibold text-white">
              複製搜尋式
            </button>

            <button onClick={openAiriti} className="rounded-full bg-[#1E2A4D] px-5 py-3 font-semibold text-white">
              前往華藝線上圖書館
            </button>

            <button onClick={openScopus} className="rounded-full bg-[#6C8EBF] px-5 py-3 font-semibold text-white">
              前往 Scopus
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}