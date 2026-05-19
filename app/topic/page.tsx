"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopicPage() {
  const [focus, setFocus] = useState("使用行為");
  const [result, setResult] = useState("");

  const generateTopic = () => {
    const topics: Record<string, string> = {
      使用行為: "短影音每日使用時間是否影響高中生的專注力表現？",
      心理影響: "長時間滑短影音是否會增加高中生的分心程度與焦慮感？",
      時間感: "長時間觀看短影片是否會使高中生低估實際經過時間？",
    };

    setResult(topics[focus]);
  };

  return (
    <main className="min-h-screen bg-[#ecf2f8] text-[#1A2B49]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm px-16 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="logo" className="w-24 h-auto object-contain" />

            <div>
              <h1 className="font-bold text-[#1A2B49] text-lg">數位人文探究</h1>
              <p className="text-[#556070] text-sm">短影片與注意力研究導航中心</p>
            </div>
          </Link>

          <nav className="flex gap-6 text-sm font-medium text-[#1A2B49]">
            <Link href="/">首頁</Link>
            <Link href="/topic" className="text-[#7B61FF] font-semibold">
              主題專區
            </Link>
            <Link href="/process">研究流程</Link>
            <Link href="/resources">文獻資源</Link>
            <Link href="/keywords">關鍵詞實驗室</Link>
            <Link href="/tools">工具區</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about">關於我們</Link>
            <Link href="/contact">參考諮詢團隊</Link>
          </nav>
        </div>
      </header>

      <section className="px-16 pt-40 pb-20 bg-[#f6f9fc]">
        <div className="mb-12 rounded-[36px] bg-gradient-to-r from-[#1E2A4D] via-[#4B4FA8] to-[#7B61FF] p-10 text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-200">
            TOPIC CENTER
          </p>

          <h1 className="text-5xl font-bold mb-6">主題專區</h1>

          <p className="max-w-5xl leading-9 text-white/85">
            主題以「短影片對注意力與時間知覺的影響」為核心，建議高中生從日常生活經驗出發，
            觀察自身及同儕的使用，例如長時間觀看短影音（如 Reels、TikTok、YouTube Shorts）
            對注意力造成的影響，並聚焦特定族群或行為，進一步轉化為可研究的問題。
          </p>
        </div>

       <section className="mb-14 rounded-3xl bg-gradient-to-br from-white to-[#f1f5f9] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
  <h2 className="mb-6 border-l-4 border-[#7B61FF] pl-4 text-3xl font-bold">
    選題指南詳細版
  </h2>

  <p className="mb-8 max-w-5xl leading-8 text-[#556070]">
    本區協助學生把「我平常會滑短影音」這種生活經驗，轉換成可以被觀察、
    測量與分析的研究問題。建議先從使用行為開始記錄，再選擇注意力、心理影響或時間感作為研究焦點。
  </p>

 <div className="grid gap-6 lg:grid-cols-3">
  {[
    {
      title: "01 觀察使用行為",
      desc: "先記錄自己或同儕的短影音使用情形。",
      examples: ["每天滑多久", "一週滑幾小時", "常用平台：Reels / TikTok / Shorts"],
    },
    {
      title: "02 聚焦影響面向",
      desc: "選擇一個可以被比較或測量的研究方向。",
      examples: ["專注力是否下降", "是否更容易分心", "是否低估實際使用時間"],
    },
    {
      title: "03 形成研究問題",
      desc: "把觀察到的現象轉換成具體題目。",
      examples: ["誰受到影響", "受到什麼影響", "如何測量這個影響"],
    },
  ].map((item) => (
    <div
      key={item.title}
      className="
        group
        rounded-2xl
        bg-white
        p-6
        shadow-md
        transition
        duration-300
        hover:-translate-y-2
        hover:bg-gradient-to-br
        hover:from-[#1E2A4D]
        hover:to-[#7B61FF]
        hover:text-white
        hover:shadow-xl
      "
    >
      <h3 className="mb-3 text-xl font-bold text-[#1E2A4D] group-hover:text-white">
        {item.title}
      </h3>

      <p className="mb-4 leading-7 text-[#556070] group-hover:text-white/85">
        {item.desc}
      </p>

      <ul className="space-y-2 text-sm text-[#556070] group-hover:text-white/85">
        {item.examples.map((ex) => (
          <li key={ex}>・{ex}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    <div className="rounded-2xl bg-[#ecf2f8] p-6">
      <h3 className="mb-4 text-xl font-bold">可研究變項範例</h3>

      <div className="space-y-3 text-[#556070]">
        <p><span className="font-semibold text-[#1A2B49]">自變項：</span>短影音使用時間、觀看內容類型、是否為個人化推薦</p>
        <p><span className="font-semibold text-[#1A2B49]">依變項：</span>專注力表現、分心程度、時間估計誤差、心理疲勞感</p>
        <p><span className="font-semibold text-[#1A2B49]">控制變項：</span>觀看時間、測驗環境、影片長度、受試者年齡</p>
      </div>
    </div>

    <div className="rounded-2xl bg-[#1E2A4D] p-6 text-white">
      <h3 className="mb-4 text-xl font-bold text-cyan-200">題目形成公式</h3>

      <p className="leading-8 text-white/85">
        「短影音使用情形」＋「研究對象」＋「影響面向」
      </p>

      <div className="mt-4 rounded-xl bg-white/10 p-4 leading-8">
        例：短影音使用時間是否影響高中生的專注力表現？
      </div>
    </div>
  </div>
</section>
        <section className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-white to-[#f1f5f9] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h2 className="mb-6 border-l-4 border-[#00AEEF] pl-4 text-3xl font-bold">
              研究切入點建議表
            </h2>

            <div className="space-y-4">

  {[
    {
      title: "使用行為",
      desc: "每日使用時間、觀看頻率、平台類型",
    },
    {
      title: "心理影響",
      desc: "專注力、分心程度、焦慮感、疲勞感",
    },
    {
      title: "時間感",
      desc: "時間低估、沉浸程度、主觀時間感受",
    },
  ].map((item) => (
    <div
      key={item.title}
      onClick={() => setFocus(item.title)}
      className={`
        cursor-pointer
        rounded-2xl
        p-5
        transition
        border
        ${
          focus === item.title
            ? "bg-[#1E2A4D] text-white border-transparent shadow-lg"
            : "bg-white text-[#1A2B49] border-gray-200 hover:bg-[#ecf2f8]"
        }
      `}
    >
      <h3 className="font-bold mb-2">{item.title}</h3>
      <p className={focus === item.title ? "text-white/80" : "text-[#556070]"}>
        {item.desc}
      </p>
    </div>
  ))}

</div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#1E2A4D] to-[#5B4FD6] p-8 text-white shadow-xl">
            <h2 className="mb-6 text-3xl font-bold">主題生成功能</h2>

            <p className="mb-6 leading-8 text-white/80">
              選擇左方研究切入點後，點擊按鈕即可產生一個可作為科展或小論文起點的研究題目。
            </p>

            <p className="mb-4">
              目前選擇：
              <span className="font-bold text-cyan-300"> {focus}</span>
            </p>

            <button
              onClick={generateTopic}
              className="rounded-full bg-white px-6 py-3 font-bold text-[#1E2A4D]"
            >
              生成研究題目
            </button>

            {result && (
              <div className="mt-6 rounded-2xl bg-white/10 p-5 leading-8">
                {result}
              </div>
            )}
          </div>
        </section>

        <section className="space-y-10">
          <div className="rounded-3xl bg-gradient-to-br from-white to-[#f1f5f9] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h2 className="mb-5 border-l-4 border-[#7B61FF] pl-4 text-3xl font-bold">
              議題一：短影音對注意力的影響
            </h2>

            <p className="mb-6 leading-8 text-[#556070]">
              相關研究探討觀看短影音如何影響事件分割能力，也就是大腦將連續訊息切割成有意義單元以形成記憶的過程。
              研究人員透過行為測試與眼動追蹤技術，觀察快節奏影音內容是否干擾處理複雜長篇資訊的能力。
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">核心發現</h3>
                <ul className="space-y-3 text-[#556070]">
                  <li>記憶受損：頻繁切換內容可能降低長篇敘事記憶。</li>
                  <li>隨機性是關鍵：隨機短影音的負面影響最明顯。</li>
                  <li>眼動不同步：注意力變得碎片化。</li>
                  <li>日常高度依賴短影音者，干擾更明顯。</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">什麼是眼動穩定度？</h3>
                <p className="leading-8 text-[#556070]">
                  眼動穩定度可理解為眼睛是否能穩定抓住重點。
                  穩定度高時，觀看者較能跟隨敘事邏輯；穩定度低時，眼睛頻繁跳動，
                  注意力呈現碎片化，可能干擾事件分割與記憶形成。
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full bg-white">
                <thead className="bg-[#1E2A4D] text-white">
                  <tr>
                    <th className="p-4 text-left">影片類型</th>
                    <th className="p-4 text-left">對記憶的影響</th>
                    <th className="p-4 text-left">眼動穩定度</th>
                  </tr>
                </thead>

                <tbody className="text-[#556070]">
                  <tr className="border-b">
                    <td className="p-4">隨機短影音</td>
                    <td className="p-4">顯著受損</td>
                    <td className="p-4">高度碎片化</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-4">個人化短影音</td>
                    <td className="p-4">影響極小 / 無影響</td>
                    <td className="p-4">穩定</td>
                  </tr>

                  <tr>
                    <td className="p-4">靜態圖片</td>
                    <td className="p-4">無影響</td>
                    <td className="p-4">穩定</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-white to-[#f1f5f9] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h2 className="mb-5 border-l-4 border-[#7B61FF] pl-4 text-3xl font-bold">
              議題二：短影音成癮與心理健康問題
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">即時回饋機制</h3>
                <p className="leading-8 text-[#556070]">
                  短影音透過按讚、留言與滑動提供即時回饋，使使用者容易反覆使用並延長使用時間。
                </p>
              </div>

              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">衝動控制</h3>
                <p className="leading-8 text-[#556070]">
                  問題型短影音使用者在抑制衝動時可能表現較弱，較難執行「停止滑手機」的控制。
                </p>
              </div>

              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">金魚腦效應</h3>
                <p className="leading-8 text-[#556070]">
                  長期接觸碎片化資訊，可能降低深度思考與長時間專注的能力。
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#1E2A4D] p-6 text-white">
              <h3 className="mb-3 text-xl font-bold text-cyan-200">心理健康連鎖影響</h3>
              <p className="leading-8 text-white/85">
                長時間使用短影音可能影響睡眠與情緒狀態，並可能形成
                「學習挫折—過度使用短影音—認知能力再下降」的循環。
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-white to-[#f1f5f9] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <h2 className="mb-5 border-l-4 border-[#7B61FF] pl-4 text-3xl font-bold">
              議題三：數位媒體對青少年認知與時間感的影響
            </h2>

            <p className="mb-6 leading-8 text-[#556070]">
              數位裝置本身不一定會帶來負面影響，關鍵在於使用方式。
              其中，媒體多工是影響最明顯的因素之一。
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">對認知功能的影響</h3>
                <ul className="space-y-3 text-[#556070]">
                  <li>工作記憶：媒體多工越頻繁，短期記憶與處理訊息能力可能越弱。</li>
                  <li>注意力：高媒體多工者較難穩定集中注意。</li>
                  <li>抑制控制：較容易被無關刺激分心。</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-[#ecf2f8] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">對心理適應的影響</h3>
                <ul className="space-y-3 text-[#556070]">
                  <li>心理憂鬱：媒體多工與憂鬱指標可能呈正相關。</li>
                  <li>衝動性：頻繁切換內容可能增加行為衝動。</li>
                  <li>生活滿意度：與使用時間不一定有顯著關聯。</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border-l-4 border-[#7B61FF] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">實務建議</h3>
              <p className="leading-8 text-[#556070]">
                學校與家長可以關注學生的使用習慣，例如讀書時減少干擾，
                培養專心完成一件事情的能力，協助學生建立穩定的專注力。
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}