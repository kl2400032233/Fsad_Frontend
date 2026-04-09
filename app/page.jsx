'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
          alt="Food donation volunteers"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-lg">
            🌱
          </div>
          <span className="font-bold text-xl">
            SmartSurplus
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="border border-white/30 px-5 py-2 rounded-xl hover:bg-white/10 transition">
            Login
          </Link>
          <Link href="/register" className="bg-emerald-600 px-5 py-2 rounded-xl hover:bg-emerald-500 transition">
            Start for Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-32">

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          <span className="text-emerald-400">Smart</span>
          <span className="text-white">Surplus</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10">
          Connecting surplus food from restaurants, retailers, and farms
          to NGOs and communities — reducing waste and fighting hunger.
        </p>

        <div className="flex gap-6">
          <Link
            href="/register"
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl font-semibold hover:scale-105 transition"
          >
            🌾 Join the Movement
          </Link>

          <Link
            href="/select-role"
            className="px-8 py-4 border border-white/30 rounded-2xl hover:bg-white/10 transition"
          >
            View Dashboard →
          </Link>
        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-slate-400 border-t border-white/10">
        © 2025 SmartSurplus — Reducing Food Waste 🌱
      </footer>

    </div>
  )
}