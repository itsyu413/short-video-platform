"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [sent, setSent] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDone, setBookingDone] = useState(false);
  const calendarItems = [
    "", "", "", "", "",
    { date: "1", status: "公休" },
    { date: "2", status: "公休" },

    { date: "3", status: "公休" },
    { date: "4", name: "呂宥萱", service: "文獻檢索", time: "10:00－12:00" },
    { date: "5", name: "葉珈瑄", service: "APA格式與引用", time: "14:00－16:00" },
    { date: "6", name: "房立穎", service: "問卷與研究設計", time: "15:30－17:00" },
    { date: "7", name: "許靜儀", service: "研究方法諮詢", time: "11:00－12:30" },
    { date: "8", name: "岑家琪", service: "資料分析與結果整理", time: "13:00－15:00" },
    { date: "9", status: "公休" },

    { date: "10", status: "公休" },
    { date: "11", name: "陳姿涵", service: "文獻檢索", time: "10:00－12:00" },
    { date: "12", name: "呂宥萱", service: "APA格式與引用", time: "14:00－16:00" },
    { date: "13", name: "葉珈瑄", service: "問卷與研究設計", time: "15:30－17:00" },
    { date: "14", name: "房立穎", service: "研究方法諮詢", time: "11:00－12:30" },
    { date: "15", name: "許靜儀", service: "資料分析與結果整理", time: "13:00－15:00" },
    { date: "16", status: "公休" },

    { date: "17", status: "公休" },
    { date: "18", name: "岑家琪", service: "文獻檢索", time: "10:00－12:00" },
    { date: "19", name: "陳姿涵", service: "APA格式與引用", time: "14:00－16:00" },
    { date: "20", name: "呂宥萱", service: "問卷與研究設計", time: "15:30－17:00" },
    { date: "21", name: "葉珈瑄", service: "研究方法諮詢", time: "11:00－12:30" },
    { date: "22", name: "房立穎", service: "資料分析與結果整理", time: "13:00－15:00" },
    { date: "23", status: "公休" },

    { date: "24", status: "公休" },
    { date: "25", name: "許靜儀", service: "文獻檢索", time: "10:00－12:00" },
    { date: "26", name: "岑家琪", service: "APA格式與引用", time: "14:00－16:00" },
    { date: "27", name: "陳姿涵", service: "問卷與研究設計", time: "15:30－17:00" },
    { date: "28", name: "呂宥萱", service: "研究方法諮詢", time: "11:00－12:30" },
    { date: "29", name: "葉珈瑄", service: "資料分析與結果整理", time: "13:00－15:00" },
    { date: "30", status: "公休" },

    { date: "31", status: "公休" },
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
            <Link href="/about">關於我們</Link>
            <Link href="/contact" className="text-[#7B61FF] font-semibold">
              參考諮詢團隊
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-16 pt-40 pb-20">
        <div className="mb-12 rounded-[36px] bg-gradient-to-r from-[#1E2A4D] to-[#7B61FF] p-10 text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-200">
            CONTACT & CONSULTATION
          </p>

          <h1 className="text-5xl font-bold mb-6">參考諮詢團隊 / 聯絡方法</h1>

          <p className="max-w-5xl leading-9 text-white/85">
            本頁提供圖書館參考諮詢窗口、服務時間、線上諮詢與平台回饋表單，
            協助學生在研究過程中獲得即時支援。
          </p>
        </div>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            館員諮詢服務月時間表
          </h2>

          <p className="text-[#556070] leading-8 mb-6">
            為協助學生進行科展與小論文研究，本平台規劃館員諮詢服務月時間表，
            提供文獻檢索、資料庫使用、APA引用格式、研究方法與資料分析等諮詢服務，
            協助學生在研究歷程中獲得適切的學習支援。
          </p>

          <div className="bg-[#f4f7fb] rounded-3xl p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                2026 年 5 月館員諮詢服務月時間表
              </h3>
              <p className="text-[#556070] mt-2">
                服務時間依排班日期提供，未排班日期為公休或暫停諮詢。
              </p>
            </div>

            <div className="grid grid-cols-7 gap-3 text-center mb-3 font-bold text-[#556070]">
              {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-3">
              {calendarItems.map((item, index) => {
                if (typeof item === "string") {
                  return <div key={index} />;
                }
                
                const isClosed = "status" in item;

                return (
                  <div
                  key={index}
                  
                  className={`min-h-[135px] rounded-2xl p-3 text-left shadow-sm ${
                    isClosed
                      ? "bg-white/70 text-[#8892a6]"
                      : "bg-white text-[#1A2B49] border border-[#7B61FF]/20 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                  }`}
                >
                    <p className="font-black text-lg mb-2">{item.date}</p>

                    {isClosed ? (
                      <div className="mt-5 text-center">
                        <p className="text-sm font-semibold">{item.status}</p>
                      </div>
                    ) : (
                      <>
                        <p className="text-[#7B61FF] font-bold text-sm">
                          {item.name}
                        </p>

                        <p className="text-xs text-[#556070] mt-2 leading-5">
                          {item.service}
                        </p>

                        <p className="text-xs font-semibold mt-2">
                          {item.time}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#556070]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white border border-[#7B61FF]" />
                有諮詢服務
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white/70 border border-gray-200" />
                公休 / 暫停服務
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            聯絡方式
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#f4f7fb] rounded-2xl p-5">
              <p className="font-bold text-[#1A2B49] mb-2">電子郵件</p>
              <p className="text-[#556070]">libraryconsult@example.com</p>
            </div>

            <div className="bg-[#f4f7fb] rounded-2xl p-5">
              <p className="font-bold text-[#1A2B49] mb-2">服務電話</p>
              <p className="text-[#556070]">02 2621 5656</p>
            </div>

            <div className="bg-[#f4f7fb] rounded-2xl p-5">
              <p className="font-bold text-[#1A2B49] mb-2">服務地點</p>
              <p className="text-[#556070]">淡江大學圖書館參考諮詢服務台</p>
            </div>

            <div className="bg-[#f4f7fb] rounded-2xl p-5">
              <p className="font-bold text-[#1A2B49] mb-2">服務時間</p>
              <p className="text-[#556070]">依館員諮詢服務月時間表辦理</p>
            </div>
          </div>
          {selectedSlot && (
  <div className="mt-8 bg-white rounded-3xl p-6 border border-[#7B61FF]/20 shadow-sm">
    <h3 className="text-2xl font-bold mb-4">
      預約館員諮詢
    </h3>

    <div className="bg-[#f4f7fb] rounded-2xl p-5 mb-6">
      <p className="font-bold mb-2">
        已選擇時段
      </p>

      <p className="text-[#556070] leading-8">
        5 月 {selectedSlot.date} 日｜{selectedSlot.time}
        <br />
        值班館員：{selectedSlot.name}
        <br />
        諮詢內容：{selectedSlot.service}
      </p>
    </div>

    {!bookingDone ? (
      <div>
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <input
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            placeholder="請輸入姓名"
            className="border border-gray-300 rounded-xl p-3"
          />

          <input
            value={bookingEmail}
            onChange={(e) => setBookingEmail(e.target.value)}
            placeholder="請輸入 Email"
            className="border border-gray-300 rounded-xl p-3"
          />
        </div>

        <button
          onClick={() => {
            if (!bookingName.trim() || !bookingEmail.trim()) {
              alert("請填寫姓名與 Email");
              return;
            }

            setBookingDone(true);
          }}
          className="bg-[#7B61FF] text-white px-6 py-3 rounded-full font-bold"
        >
          確認預約
        </button>
      </div>
    ) : (
      <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl">
        預約成功！{bookingName} 已預約 5 月 {selectedSlot.date} 日 {selectedSlot.time}
        的 {selectedSlot.service} 諮詢。
      </div>
    )}
  </div>
)}
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            線上諮詢功能
          </h2>

          <p className="text-[#556070] leading-8 mb-8">
            本區規劃簡易聊天室機制，學生可輸入研究過程中遇到的問題，
            系統將模擬參考諮詢回覆，協助學生釐清下一步研究方向。
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#f4f7fb] rounded-2xl p-6">
              <p className="font-bold mb-4">請輸入你的問題</p>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="例如：我找不到短影音與注意力相關的文獻，該怎麼搜尋？"
                className="w-full h-40 border border-gray-300 rounded-2xl p-4 outline-none resize-none"
              />

              <button
                onClick={() => {
                  if (!message.trim()) {
                    alert("請先輸入問題");
                    return;
                  }
                  setSent(true);
                }}
                className="mt-5 bg-[#7B61FF] text-white px-6 py-3 rounded-full font-bold"
              >
                送出諮詢
              </button>
            </div>

            <div className="bg-[#1E2A4D] text-white rounded-2xl p-6">
              <p className="font-bold mb-4 text-[#00F5FF]">諮詢回覆</p>

              {sent ? (
                <div className="leading-8 text-white/85">
                  已收到你的問題。建議可先使用「關鍵詞實驗室」組合關鍵字，
                  例如 Short-form Video、Attention、Time Perception，
                  並前往 Airiti Library 或 Scopus 進行文獻查詢。
                </div>
              ) : (
                <p className="text-white/60 leading-8">
                  送出問題後，這裡會顯示模擬諮詢回覆。
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-md mb-14">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7B61FF] pl-4">
            使用者回饋區
          </h2>

          <p className="text-[#556070] leading-8 mb-8">
            歡迎學生填寫平台使用心得與建議，作為後續改善平台內容、
            功能設計與研究支援服務之依據。
          </p>

          <div className="bg-[#f4f7fb] rounded-2xl p-6">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="請輸入你對本平台的使用心得或改進建議..."
              className="w-full h-40 border border-gray-300 rounded-2xl p-4 outline-none resize-none"
            />

            <button
              onClick={() => {
                if (!feedback.trim()) {
                  alert("請先填寫回饋內容");
                  return;
                }
                setFeedbackSent(true);
              }}
              className="mt-5 bg-[#1E2A4D] text-white px-6 py-3 rounded-full font-bold"
            >
              送出回饋
            </button>

            {feedbackSent && (
              <div className="mt-5 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl">
                感謝你的回饋！你的建議將作為平台後續改善參考。
              </div>
            )}
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