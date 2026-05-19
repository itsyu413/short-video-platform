"use client";

import Link from "next/link";
import {
  Brain,
  Smartphone,
  Clock3,
  CalendarDays,
} from "lucide-react";

export default function Home() {
  const features = [
    { title: "主題專區", text: "整理短影音對注意力、心理健康與時間知覺的研究議題。", link: "/topic" },
    { title: "研究流程", text: "以七步驟引導完成科展與小論文。", link: "/process" },
    { title: "文獻資源", text: "提供資料庫入口與資料可信度判讀。", link: "/resources" },
    { title: "關鍵詞實驗室", text: "透過關鍵詞與布林邏輯進行檢索。", link: "/keywords" },
  ];

  const themes = [
    { title: "短影音對注意力的影響", icon: <Brain size={36} />, text: "探討短影音是否影響專注力與學習表現。" },
    { title: "短影音成癮與心理健康", icon: <Smartphone size={36} />, text: "分析成癮、焦慮與 FOMO 現象。" },
    { title: "時間知覺與沉浸式設計", icon: <Clock3 size={36} />, text: "探討時間感與媒體使用的關係。" },
  ];

  return (
    <main className="min-h-screen bg-[#ecf2f8] text-[#1A2B49]">

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#08111f]/75 backdrop-blur-xl border-b border-white/10 px-16 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="logo" className="w-24 h-auto object-contain" />
            <div>
              <h1 className="font-bold text-white text-lg">數位人文探究</h1>
              <p className="text-slate-300 text-sm">短影片與注意力研究導航中心</p>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium text-slate-100">
              <Link href="/">首頁</Link>
              <Link href="/topic">主題專區</Link>
              <Link href="/process">研究流程</Link>
              <Link href="/resources">文獻資源</Link>
              <Link href="/keywords">關鍵詞實驗室</Link>
              <Link href="/tools">工具區</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/about">關於我們</Link>
              <Link href="/contact">參考諮詢團隊</Link>
            </nav>

            <input
              placeholder="搜尋..."
              className="w-28 bg-white/90 border border-white/30 text-black rounded-full px-4 py-2 text-sm outline-none"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
     <section className="relative w-full pt-52 pb-44 overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/70 to-transparent" />

        <div className="relative z-10 max-w-2xl pt-10 px-16">
          <p className="text-[#00F5FF] font-semibold tracking-widest mb-6">
            DIGITAL HUMANITIES × ATTENTION
          </p>

          <h1 className="text-6xl font-black leading-[1.2]">
            從滑動開始
            <br />
            重新理解注意力<br />與時間感
          </h1>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            引導影音研究方向，將媒體使用行為轉化為知覺依據。
          </p>

          <Link
            href="/topic"
            className="inline-block mt-10 bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] px-10 py-5 rounded-full text-black font-bold hover:scale-105 transition"
          >
            開始探究
          </Link>
        </div>
      </section>

     {/* 中間快速導覽 */}
<section className="px-16 py-6 border-b border-gray-200 bg-[#ecf2f8]">

  <div className="flex flex-wrap gap-6 text-[#1A2B49] text-sm font-medium">

    <a href="#guide" className="text-[#7B61FF] font-semibold">
      快速選題指南
    </a>

    <a href="#features" className="hover:text-[#7B61FF] transition">
      平台功能導覽
    </a>

    <a href="#themes" className="hover:text-[#7B61FF] transition">
      三大探究議題
    </a>

    <a href="#countdown" className="hover:text-[#7B61FF] transition">
      科展 / 小論文倒數
    </a>

    <a href="#tags" className="hover:text-[#7B61FF] transition">
      熱門研究標籤
    </a>

  </div>

</section>

      {/* 快速選題指南 */}
      <section id="guide" className="px-16 py-20 bg-[#ecf2f8]">
        <h2 className="text-4xl font-bold mb-10">快速選題指南</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            ["01 使用行為", "滑多久？使用頻率？"],
            ["02 心理影響", "專注力與分心程度"],
            ["03 時間感", "是否低估觀看時間"],
          ].map(([title, text]) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <p className="font-bold text-lg">{title}</p>
              <p className="text-[#556070] mt-2">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#1E2A4D] text-white rounded-2xl p-6">
          <p className="font-bold mb-3 text-[#00F5FF]">題目舉例</p>
          <ul className="space-y-2">
            <li>短影音使用是否影響高中生專注力？</li>
            <li>長時間觀看短影片是否會低估實際經過時間？</li>
            <li>長時間滑短影音是否對心理健康造成影響？</li>
          </ul>

          <Link href="/topic" className="inline-block mt-6 text-[#9D8CFF] font-semibold hover:underline">
            前往主題專區查看更多 →
          </Link>
        </div>
      </section>

      {/* 平台功能 */}
      <section id="features" className="px-16 py-20 bg-[#ecf2f8]">
        <h2 className="text-4xl font-bold mb-10">平台功能導覽</h2>

        <div className="grid lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition hover:-translate-y-1 transition"
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-[#556070]">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 三大議題 */}
      <section id="themes" className="px-16 py-20 bg-[#ecf2f8]">
        <h2 className="text-4xl font-bold mb-10">三大探究議題</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {themes.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition hover:-translate-y-1 transition">
              <div className="mb-4 text-[#7B61FF]">{item.icon}</div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-[#556070] leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 倒數器 */}
      <section id="countdown" className="px-16 py-20 bg-[#ecf2f8]">
        <h2 className="text-4xl font-bold mb-12">科展 / 小論文倒數</h2>

        <div className="bg-gradient-to-br from-[#1E2A4D] to-[#7B61B6] text-white rounded-[40px] p-10 shadow-xl grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <CalendarDays size={52} className="mb-6" />
            <h3 className="text-3xl font-bold mb-5">距離研究成果提交日</h3>
            <p className="leading-8 text-white/80">
              倒數器以時間管理為核心，提醒學生掌握科展與小論文研究進度，
              避免研究歷程延宕。
            </p>

            <Link
              href="/countdown"
              className="inline-block mt-8 bg-white text-[#1E2A4D] px-8 py-4 rounded-full font-bold"
            >
              開啟倒數器
            </Link>
          </div>

          <div className="bg-white/15 rounded-[30px] p-8 text-center backdrop-blur">
            <p className="text-white/70 mb-4">DEADLINE COUNTDOWN</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-2xl p-5">
                <p className="text-5xl font-black">42</p>
                <p>天</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-5">
                <p className="text-5xl font-black">08</p>
                <p>時</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-5">
                <p className="text-5xl font-black">30</p>
                <p>分</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 熱門標籤 */}
      <section id="tags" className="px-16 py-20 bg-[#ecf2f8]">
        <h2 className="text-4xl font-bold mb-10">熱門研究標籤</h2>

        <div className="flex flex-wrap gap-4">
          {["#短影音", "#注意力碎片化", "#時間知覺", "#演算法推播", "#FOMO", "#心理健康"].map((tag) => (
            <Link
              href="/keywords"
              key={tag}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition hover:scale-105 transition"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050816] text-white px-16 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <img src="/logo.png" alt="logo" className="w-28 h-auto object-contain mb-6" />

            <h2 className="text-2xl font-bold">
              數位人文探究
            </h2>

            <p className="text-slate-300 mt-2">
              短影片與注意力研究導航中心
            </p>

            <p className="text-slate-400 mt-6 leading-8">
              引導影音研究方向，將媒體使用行為轉化為知覺依據。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">平台產品</h3>

            <div className="flex flex-col gap-3 text-slate-300">
              <Link href="/topic">主題專區</Link>
              <Link href="/process">研究流程</Link>
              <Link href="/resources">文獻資源</Link>
              <Link href="/keywords">關鍵詞實驗室</Link>
              <Link href="/tools">工具區</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">聯絡資訊</h3>

            <p className="text-slate-300">電話：02 2621 5656</p>

            <p className="text-slate-300 mt-3 leading-8">
              地址：251新北市淡水區中興里英專路151號
            </p>

            <div className="mt-6 flex flex-col gap-3 text-slate-300">
              <Link href="/about">關於我們</Link>
              <Link href="/contact">參考諮詢團隊 / 聯絡方式</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-slate-500 text-sm">
          © 2026 Digital Humanities Research Navigation Platform
        </div>
      </footer>
    </main>
  );
}