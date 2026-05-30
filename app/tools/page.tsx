"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToolsPage() {
  const [deadline, setDeadline] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedSlot, setSelectedSlot] = useState("");
  const [theme, setTheme] = useState("digital");
  const [titleStyle, setTitleStyle] = useState("line");
  const [frameStyle, setFrameStyle] = useState("soft");
  const [panelStyle, setPanelStyle] = useState("default");
  const [numbers, setNumbers] = useState("");
const [name, setName] = useState("");
const [booked, setBooked] = useState(false);

  const themes: any = {
    digital: {
      name: "數位霓虹",
      primary: "#7B61FF",
      secondary: "#4dd2ff",
      posterBg: "#050816",
      layerBg: "#004080",
      text: "#FFFFFF",
    },
    academic: {
      name: "嚴謹學術",
      primary: "#1A2B49",
      secondary: "#6C8EBF",
      posterBg: "#F5F7FA",
      layerBg: "#FFFFFF",
      text: "#1A2B49",
    },
    warm: {
      name: "溫暖人文",
      primary: "#B45309",
      secondary: "#FFB26B",
      posterBg: "#FFF6EC",
      layerBg: "#FFE8CC",
      text: "#3B2A1A",
    },
    minimal: {
      name: "極簡高級",
      primary: "#111827",
      secondary: "#6B7280",
      posterBg: "#FFFFFF",
      layerBg: "#F3F4F6",
      text: "#111827",
    },
    darkpro: {
      name: "深色專業",
      primary: "#0EA5E9",
      secondary: "#38BDF8",
      posterBg: "#0F172A",
      layerBg: "#1E293B",
      text: "#FFFFFF",
    },
  };

  const current = themes[theme];

  useEffect(() => {
    if (!deadline) return;

    const timer = setInterval(() => {
      const target = new Date(deadline).getTime();
      const now = new Date().getTime();
      const distance = target - now;

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((distance / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const values = numbers
    .split(",")
    .map((n) => Number(n.trim()))
    .filter((n) => !isNaN(n));

  const average =
    values.length > 0
      ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2)
      : "尚未輸入";

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
            <Link href="/tools" className="text-[#7B61FF] font-semibold">工具區</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about">關於我們</Link>
            <Link href="/contact">參考諮詢團隊</Link>
          </nav>
        </div>
      </header>

      <section className="px-16 pt-40 pb-20">
        <div className="mb-12 rounded-[36px] bg-gradient-to-r from-[#1E2A4D] to-[#7B61FF] p-10 text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-200">
            RESEARCH TOOLS
          </p>
          <h1 className="text-5xl font-bold mb-6">工具區</h1>
          <p className="max-w-5xl leading-9 text-white/85">
            本區提供研究過程中可使用的互動工具，協助學生進行時間管理、資料蒐、統計分析與成果呈現。
          </p>
        </div>
        <section id="countdown" className="bg-white rounded-3xl p-8 shadow-md mb-14">
        
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            全國中學生科展／小論文倒數器
          </h2>

          <input
  type="datetime-local"
  value={deadline}
  onChange={(e) => {
    setDeadline(e.target.value);
    localStorage.setItem("researchDeadline", e.target.value);
  }}
  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-3 mb-8"
/>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["天", timeLeft.days],
              ["時", timeLeft.hours],
              ["分", timeLeft.minutes],
              ["秒", timeLeft.seconds],
            ].map(([label, value]) => (
              <div key={label} className="bg-gradient-to-br from-[#1E2A4D] to-[#7B61FF] text-white rounded-2xl p-6 text-center shadow-md">
                <p className="text-5xl font-black">{value}</p>
                <p className="mt-2 text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            科展海報設計工具
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <p className="font-bold mb-3">配色系統</p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(themes).map(([key, item]: any) => (
                    <button
                      key={key}
                      onClick={() => setTheme(key)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        theme === key ? "bg-[#7B61FF] text-white" : "bg-[#ecf2f8]"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  ["主色調", current.primary],
                  ["次色調", current.secondary],
                  ["海報底色", current.posterBg],
                  ["層次底色", current.layerBg],
                ].map(([label, color]) => (
                  <div key={label} className="bg-[#f4f7fb] rounded-2xl p-5">
                    <p className="font-bold mb-3">{label}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border shadow-sm" style={{ background: color }} />
                      <span className="text-sm text-[#556070]">{color}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-bold mb-3">外框設計</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    ["soft", "柔和圓角"],
                    ["double", "雙層外框"],
                    ["bold", "粗線框"],
                  ].map(([style, label]) => (
                    <button
                      key={style}
                      onClick={() => setFrameStyle(style)}
                      className={`px-4 py-2 rounded-full ${
                        frameStyle === style ? "bg-[#7B61FF] text-white" : "bg-[#ecf2f8]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold mb-3">卡片底板設計</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    ["default", "預設底板"],
                    ["glass", "玻璃底板"],
                    ["dark", "深色底板"],
                  ].map(([style, label]) => (
                    <button
                      key={style}
                      onClick={() => setPanelStyle(style)}
                      className={`px-4 py-2 rounded-full ${
                        panelStyle === style ? "bg-[#7B61FF] text-white" : "bg-[#ecf2f8]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold mb-3">標題樣式</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    ["line", "底線"],
                    ["bar", "左側色條"],
                    ["tag", "標籤"],
                  ].map(([style, label]) => (
                    <button
                      key={style}
                      onClick={() => setTitleStyle(style)}
                      className={`px-4 py-2 rounded-full ${
                        titleStyle === style ? "bg-[#7B61FF] text-white" : "bg-[#ecf2f8]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] p-6 shadow-xl" style={{ background: current.posterBg }}>
              <div
                className="p-6 min-h-[390px]"
                style={{
                  background:
                    panelStyle === "glass"
                      ? "rgba(255,255,255,0.16)"
                      : panelStyle === "dark"
                      ? "#1E2A4D"
                      : current.layerBg,
                  color:
                    panelStyle === "dark" || theme === "darkpro"
                      ? "#FFFFFF"
                      : current.text,
                  border:
                    frameStyle === "bold"
                      ? `4px solid ${current.primary}`
                      : frameStyle === "double"
                      ? `4px double ${current.primary}`
                      : `2px solid ${current.secondary}`,
                  borderRadius: frameStyle === "soft" ? "24px" : "10px",
                  backdropFilter: panelStyle === "glass" ? "blur(10px)" : "none",
                }}
              >
                <div className="mb-6">
                  {titleStyle === "bar" && (
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-10 rounded-full" style={{ background: current.primary }} />
                      <h3 className="text-2xl font-bold">研究標題</h3>
                    </div>
                  )}

                  {titleStyle === "line" && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">研究標題</h3>
                      <div className="h-1 w-24 rounded-full" style={{ background: current.primary }} />
                    </>
                  )}

                  {titleStyle === "tag" && (
                    <span
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{ background: current.primary, color: "#fff" }}
                    >
                      研究主題
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-black leading-tight mb-5">
                  短影音使用對高中生注意力與時間知覺之影響
                </h3>

                <p className="mb-6 opacity-80">
                  探討短影音使用時間、專注力表現與時間估計之間的關係。
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: current.secondary,
                      color: theme === "academic" || theme === "minimal" ? "#fff" : current.text,
                    }}
                  >
                    <p className="font-bold mb-1">研究方法</p>
                    <p className="text-sm opacity-85">問卷調查＋注意力測驗</p>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{ background: current.primary, color: "#fff" }}
                  >
                    <p className="font-bold mb-1">研究結果</p>
                    <p className="text-sm opacity-85">分析使用時間與專注力差異</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
  <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
    研究資料蒐集工具（問卷與觀察紀錄）
  </h2>

  <p className="text-[#556070] leading-8 mb-8">
    本區提供研究資料蒐集工具，請依步驟操作：先複製問卷題目並貼到 Google 表單，
    再下載觀察日誌模板，用 Excel 或 Google 試算表記錄自己的使用情形。
  </p>

  <div className="grid lg:grid-cols-2 gap-8 mb-8">
    <div className="bg-[#f4f7fb] rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-bold mb-4">
        短影音使用行為調查表單
      </h3>

      <p className="text-[#556070] leading-8 mb-6">
        複製問卷題目後，開啟 Google 表單並貼上建立問卷。
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => {
            navigator.clipboard.writeText(
`短影音使用行為調查

1. 你平均每天觀看短影音多久？
□ 30分鐘以下 □ 30分鐘–1小時 □ 1–2小時 □ 2小時以上

2. 你最常使用的平台？
□ TikTok □ Instagram Reels □ YouTube Shorts □ 其他

3. 觀看短影音後，你是否覺得較難專心讀書？
□ 非常不同意 □ 不同意 □ 普通 □ 同意 □ 非常同意

4. 你是否常常低估實際觀看時間？
□ 從不 □ 偶爾 □ 經常 □ 幾乎每次

5. 觀看短影音後的疲勞感？
□ 很低 □ 低 □ 普通 □ 高 □ 很高`
            );
            alert("問卷題目已複製，請貼到 Google 表單中使用");
          }}
          className="bg-[#7B61FF] text-white px-6 py-3 rounded-full font-bold"
        >
          複製問卷題目
        </button>

        <button
          onClick={() => window.open("https://forms.new", "_blank")}
          className="bg-[#1E2A4D] text-white px-6 py-3 rounded-full font-bold"
        >
          開啟 Google 表單
        </button>
      </div>

      <div className="mt-5 bg-[#eef2ff] border-l-4 border-[#7B61FF] p-4 rounded-xl">
        <p className="text-sm text-[#1A2B49] font-medium">
          建議：每份問卷至少收集 30 份以上樣本，資料會比較有分析價值。
        </p>
      </div>
    </div>

    <div className="bg-[#f4f7fb] rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-bold mb-4">
        觀察日誌模板
      </h3>

      <p className="text-[#556070] leading-8 mb-6">
        下載 CSV 檔，可用 Excel 或 Google 試算表開啟。
      </p>

      <button
        onClick={() => {
          const csv =
            "\uFEFF日期,使用時間,平台,專注程度,時間感知\n2026/05/19,30分鐘,YouTube Shorts,普通,覺得只過10分鐘\n";
          const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "短影音觀察日誌模板.csv";
          a.click();
          URL.revokeObjectURL(url);
        }}
        className="bg-[#1E2A4D] text-white px-6 py-3 rounded-full font-bold"
      >
        下載觀察日誌模板
      </button>

      <div className="mt-5 bg-[#eef2ff] border-l-4 border-[#7B61FF] p-4 rounded-xl">
        <p className="text-sm text-[#1A2B49] font-medium">
          建議：連續紀錄 3–7 天，可觀察短影音使用與時間感的變化。
        </p>
      </div>
    </div>
  </div>

  <div className="overflow-hidden rounded-2xl border border-gray-200">
    <table className="w-full bg-white">
      <thead className="bg-[#1E2A4D] text-white">
        <tr>
          <th className="p-4 text-left">日期</th>
          <th className="p-4 text-left">使用時間</th>
          <th className="p-4 text-left">平台</th>
          <th className="p-4 text-left">專注程度</th>
          <th className="p-4 text-left">時間感知</th>
        </tr>
      </thead>

      <tbody className="text-[#556070]">
        <tr>
          <td className="p-4">2026/05/19</td>
          <td className="p-4">30 分鐘</td>
          <td className="p-4">YouTube Shorts</td>
          <td className="p-4">普通</td>
          <td className="p-4">覺得只過 10 分鐘</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

       <section className="bg-white rounded-3xl p-8 shadow-md">
  <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
    基礎統計分析教學工具
  </h2>

  <p className="text-[#556070] leading-8 mb-8">
    本工具協助學生理解研究資料的整理、比較與解釋方式，包含平均數計算與 t 檢定基本概念。
  </p>

  <div className="grid lg:grid-cols-2 gap-8">
    <div className="bg-[#f4f7fb] rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-bold mb-4">平均數計算教學</h3>

      <p className="text-[#556070] leading-8 mb-6">
        平均數可用來描述一組資料的整體趨勢。例如記錄 4 位學生每日觀看短影音時間：
        20、35、40、25 分鐘，平均數就是將數值相加後除以資料筆數。
      </p>

      <div className="bg-white rounded-xl p-4 mb-6 text-[#1A2B49]">
        平均數 = （20 + 35 + 40 + 25）÷ 4 = 30
      </div>

      <input
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="例如：20, 35, 40, 25"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      <div className="bg-[#1E2A4D] text-white rounded-2xl p-6">
        <p className="text-white/70 mb-2">計算結果</p>
        <p className="text-4xl font-black">{average}</p>
      </div>
    </div>

    <div className="bg-[#f4f7fb] rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-bold mb-4">t 檢定概念介紹</h3>

      <p className="text-[#556070] leading-8 mb-6">
        t 檢定可用來比較兩組資料的平均數是否有明顯差異。例如比較「觀看短影音組」
        與「未觀看短影音組」在專注力測驗分數上的差異。
      </p>

      <div className="bg-white rounded-2xl p-6 mb-6">
        <div className="mb-5">
          <p className="font-bold mb-2">觀看短影音組</p>
          <div className="h-5 bg-[#7B61FF] rounded-full w-[65%]" />
          <p className="text-sm text-[#556070] mt-2">平均專注力分數：65</p>
        </div>

        <div>
          <p className="font-bold mb-2">未觀看短影音組</p>
          <div className="h-5 bg-[#1E2A4D] rounded-full w-[82%]" />
          <p className="text-sm text-[#556070] mt-2">平均專注力分數：82</p>
        </div>
      </div>

      <div className="bg-[#eef2ff] border-l-4 border-[#7B61FF] p-4 rounded-xl">
        <p className="text-sm text-[#1A2B49] font-medium leading-7">
          教學提醒：t 檢定不是只看兩組平均數不同，而是進一步判斷這個差異是否可能具有統計意義。
          初學者可先理解為「比較兩組資料差異是否明顯」的方法。
        </p>
      </div>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}