import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-center">Arihant 2025</h1>
      <p className="mt-2 text-lg text-center">Annual College Fest 🎉</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Image src="/images/stage.jpeg" alt="Stage" width={400} height={300} className="rounded-xl" />
        <Image src="/images/crowd.jpeg" alt="Crowd" width={400} height={300} className="rounded-xl" />
        <Image src="/images/fun.jpeg" alt="Fun" width={400} height={300} className="rounded-xl" />
      </div>
    </main>
  );
}
