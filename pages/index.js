
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">MRT LUXURY INVESTMENTS</h1>
        <p className="mt-4 text-lg">Welcome to your real estate investment hub.</p>
        <Link href="/projects/high-best-residence">
          <p className="mt-6 text-blue-600 underline cursor-pointer">View Dubai Project</p>
        </Link>
      </div>
    </div>
  )
}
