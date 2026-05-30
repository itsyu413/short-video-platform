"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const categories = [
    {
      title: "📘 平台使用",
      questions: [
        {
          q: "本平台適合哪些人使用？",
          a: "本平台以高中職學生為主要使用對象，協助進行科展、小論文及專題研究，同時提供教師與圖書館員作為教學與研究指導參考。",
        },
        {
          q: "使用平台需要註冊帳號嗎？",
          a: "目前所有研究資源與工具皆可直接使用，無須註冊帳號即可瀏覽與操作。",
        },
        {
          q: "平台內容可以直接引用嗎？",
          a: "平台內容主要提供研究方向與資源導航，正式引用時仍建議回到原始文獻進行確認與引用。",
        },
      ],
    },

    {
      title: "📗 研究流程",
      questions: [
        {
          q: "如何開始進行科展研究？",
          a: "建議依照本平台提供的研究流程進行，從發現問題、蒐集資料、形成研究問題開始，再逐步完成研究設計與成果發表。",
        },
        {
          q: "如何選擇研究主題？",
          a: "可從自身興趣、生活觀察或社會現象出發，再透過文獻查詢確認研究價值與可行性。",
        },
        {
          q: "科展與小論文有什麼差異？",
          a: "科展較重視實驗設計與實作成果，小論文則偏重文獻蒐集、分析與研究論述。",
        },
        {
          q: "研究一定要做實驗嗎？",
          a: "不一定。研究可依主題選擇問卷調查、訪談法、觀察法、文獻分析或實驗法等不同研究方法。",
        },
        {
          q: "問卷調查需要多少份樣本？",
          a: (
            <>
              <p>
                一般而言，小型研究或前導性研究建議至少蒐集30份以上有效樣本，以利進行基本統計分析。若研究條件允許，建議蒐集100份以上樣本，以提升研究結果的代表性與可信度。
              </p>
        
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-[#7B61FF] mb-2">
                  參考文獻
                </p>
        
                <ul className="text-xs text-[#8892A6] leading-6 space-y-2">
                  <li>
                    吳明隆、涂金堂（2011）。《SPSS與統計應用分析》。臺北市：五南圖書出版股份有限公司。
                  </li>
        
                  <li>
                    林生傳（2003）。《教育研究法：全方位的統整與分析》。臺北市：心理出版社。
                  </li>
        
                  <li>
                    Gay, L. R., Mills, G. E., & Airasian, P. (2012).
                    <i> Educational Research: Competencies for Analysis and Applications </i>
                    (10th ed.). Pearson Education.
                  </li>
                </ul>
              </div>
            </>
          ),
        }
      ],
    },

    {
      title: "📙 文獻與引用",
      questions: [
        {
          q: "找不到相關文獻怎麼辦？",
          a: "可透過關鍵詞實驗室調整搜尋關鍵字，並搭配 Airiti Library、Scopus 等資料庫進行中英文文獻搜尋。",
        },
        {
          q: "平台推薦哪些資料庫？",
          a: "目前主要推薦 Airiti Library（華藝線上圖書館）、Scopus 及 Google Scholar 等學術資料庫。",
        },
        {
          q: "為什麼推薦 Airiti Library？",
          a: "Airiti Library 收錄大量中文學術期刊與碩博士論文，特別適合查找台灣地區相關研究。",
        },
        {
          q: "為什麼推薦 Scopus？",
          a: "Scopus 為全球大型引文資料庫，可快速了解研究趨勢、熱門議題及文獻影響力。",
        },
        {
          q: "如何判斷資料是否可信？",
          a: "建議優先使用政府機關、學術期刊或收錄於權威資料庫的研究資料，並檢查作者背景與發表日期。",
        },
        {
          q: "APA 格式如何撰寫？",
          a: "APA 格式需於正文標示作者與年份，並於參考文獻完整列出作者、出版年、標題、期刊名稱及網址等資訊。",
        },
      ],
    },

    {
      title: "📕 工具區使用",
      questions: [
        {
          q: "關鍵詞實驗室如何使用？",
          a: "使用者可選擇研究主題相關關鍵字，系統會自動組合 Boolean 搜尋式，協助提升文獻搜尋效率。",
        },
        {
          q: "倒數器資料會保存嗎？",
          a: "會。系統會將使用者設定的日期儲存在瀏覽器中，再次開啟網站時仍可保留設定內容。",
        },
        {
          q: "如何聯絡館員取得協助？",
          a: "可透過參考諮詢團隊頁面查看館員服務時間與聯絡資訊，取得研究與資料搜尋協助。",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#ecf2f8] text-[#1A2B49]">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm px-16 py-4">
  <div className="flex justify-between items-center">

    <Link href="/" className="flex items-center gap-4">
      <img
        src="/logo.png"
        alt="logo"
        className="w-24 h-auto object-contain"
      />

      <div>
        <h1 className="font-bold text-lg">
          數位人文探究
        </h1>

        <p className="text-sm text-[#556070]">
          短影片與注意力研究導航中心
        </p>
      </div>
    </Link>

    <nav className="flex gap-6 text-sm font-medium text-[#1A2B49]">
      <Link href="/">首頁</Link>
      <Link href="/topic">主題專區</Link>
      <Link href="/process">研究流程</Link>
      <Link href="/resources">文獻資源</Link>
      <Link href="/keywords">關鍵詞實驗室</Link>
      <Link href="/tools">工具區</Link>

      <Link
        href="/faq"
        className="text-[#7B61FF] font-semibold"
      >
        FAQ
      </Link>

      <Link href="/about">關於我們</Link>
      <Link href="/contact">參考諮詢團隊</Link>
    </nav>

  </div>
</header>

      {/* Hero */}
      
      <section className="px-16 pt-40 pb-32 bg-gradient-to-b from-[#f6f9fc] to-[#ecf2f8]">
        <div className="mb-12 rounded-[36px] bg-gradient-to-r from-[#1E2A4D] via-[#4B4FA8] to-[#7B61FF] p-10 text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-200">
          Frequently Asked Questions
          </p>

          <h1 className="text-5xl font-bold mb-6">常見問題 FAQ</h1>

          <p className="max-w-5xl leading-9 text-white/85">
          協助使用者快速了解平台功能、研究流程、文獻資源與工具使用方式。
          </p>
        </div>
        </section>

{/* 熱門問題 */}
<section className="px-16 -mt-24 mb-16">
<div className="max-w-5xl mx-auto -mt-16 relative z-10">

    <h2 className="text-2xl font-bold text-[#1A2B49] mb-6">
      🔥 熱門問題
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="bg-white rounded-2xl shadow-md p-5">
        <p className="text-sm text-[#556070] mb-2">
          研究流程
        </p>
        <h3 className="font-semibold">
          如何開始進行科展研究？
        </h3>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5">
        <p className="text-sm text-[#556070] mb-2">
          文獻資源
        </p>
        <h3 className="font-semibold">
          找不到相關文獻怎麼辦？
        </h3>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5">
        <p className="text-sm text-[#556070] mb-2">
          引用格式
        </p>
        <h3 className="font-semibold">
          APA 格式如何撰寫？
        </h3>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5">
        <p className="text-sm text-[#556070] mb-2">
          問卷調查
        </p>
        <h3 className="font-semibold">
          問卷需要多少份樣本？
        </h3>
      </div>

    </div>

  </div>
</section>
      {/* FAQ */}
      <section className="px-16 pb-24">

        <div className="max-w-5xl mx-auto space-y-10">

          {categories.map((category, categoryIndex) => (

            <div
              key={categoryIndex}
              className="bg-white rounded-3xl shadow-md p-8"
            >

              <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
                {category.title}
              </h2>

              <div className="space-y-4">

                {category.questions.map((item, questionIndex) => {

                  const key = `${categoryIndex}-${questionIndex}`;

                  return (
                    <div
                      key={key}
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                    >

                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex === key ? null : key
                          )
                        }
                        className="w-full flex justify-between items-center text-left p-5 hover:bg-[#f7f8fc] transition"
                      >

                        <span className="font-semibold">
                          {item.q}
                        </span>

                        <span className="text-[#7B61FF] text-2xl">
                          {openIndex === key ? "−" : "+"}
                        </span>

                      </button>

                      {openIndex === key && (

                        <div className="border-t bg-[#f8fbff] px-5 py-5 text-[#556070] leading-8">

                          {item.a}

                        </div>

                      )}

                    </div>
                  );
                })}

              </div>

            </div>

          ))}

        </div>

      </section>
{/* CTA */}
<section className="px-16 pb-20">
  <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#7B61FF] to-[#5D7BFF] rounded-3xl p-10 text-center text-white">

    <h2 className="text-3xl font-bold mb-4">
      找不到想要的答案？
    </h2>

    <p className="text-white/90 mb-6">
      歡迎聯絡參考諮詢團隊，
      我們將協助您解決研究與資料搜尋相關問題。
    </p>

    <Link
      href="/contact"
      className="inline-block bg-white text-[#7B61FF] px-8 py-4 rounded-full font-bold hover:scale-105 transition"
    >
      聯絡參考諮詢團隊
    </Link>

  </div>
</section>
      {/* Footer */}

      <footer className="bg-[#050816] text-white px-16 py-10">
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col lg:flex-row justify-between gap-12">

      {/* 左側品牌介紹 */}
      <div className="max-w-md">
        <img
          src="/logo.png"
          alt="logo"
          className="w-28 h-auto object-contain mb-4"
        />

        <h2 className="text-2xl font-bold">
          數位人文探究
        </h2>

        <p className="text-slate-300 mt-2">
          短影片與注意力研究導航中心
        </p>

        <p className="text-slate-400 mt-4 leading-7">
          引導影音研究方向，將媒體使用行為轉化為知覺依據。
        </p>
      </div>

      {/* 右側兩欄 */}
      <div className="flex gap-16 lg:gap-24">

        <div>
          <h3 className="font-bold text-lg mb-3">
            平台產品
          </h3>

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
          <h3 className="font-bold text-lg mb-3">
            聯絡資訊
          </h3>

          <p className="text-slate-300">
            電話：02 2621 5656
          </p>

          <p className="text-slate-300 mt-2 leading-7">
            地址：251新北市淡水區中興里英專路151號
          </p>

          <div className="mt-4 flex flex-col gap-2 text-slate-300">
            <Link href="/about">關於我們</Link>
            <Link href="/contact">
              參考諮詢團隊 / 聯絡方式
            </Link>
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