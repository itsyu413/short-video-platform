import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen p-10 bg-slate-50">

      <div className="text-sm text-gray-500">
        <Link href="/">首頁</Link>
      </div>

      <h1 className="text-4xl font-bold mt-6">
        建置中
      </h1>

      <p className="mt-4 text-gray-600">
        此頁面正在製作中
      </p>

    </main>
  );
}