import Link from "next/link";

export default function Page(){
return(
<main className="min-h-screen bg-slate-950 text-white p-10">

<div className="mb-8 flex gap-2 text-sm">
<Link href="/">首頁</Link>
<span>/</span>
<span>頁面名稱</span>
</div>

<h1 className="text-4xl font-bold">
頁面名稱
</h1>

</main>
)
}