'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ROLES = [
  {
    icon: '🤝',
    title: 'Food Donor',
    desc: 'Restaurants, retailers, farms & food businesses donating surplus food.',
    href: '/dashboard/donor',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    glow: 'hover:shadow-emerald-500/20',
    badge: 'bg-emerald-500/20 text-emerald-400',
    badgeText: 'Donor',
  },
  {
    icon: '🏢',
    title: 'Recipient Organization',
    desc: 'NGOs, food banks, shelters & community kitchens receiving donations.',
    href: '/dashboard/organization',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/30',
    glow: 'hover:shadow-blue-500/20',
    badge: 'bg-blue-500/20 text-blue-400',
    badgeText: 'Organization',
  },
  {
    icon: '⚙️',
    title: 'Admin',
    desc: 'Platform administrators managing users, operations & compliance.',
    href: '/dashboard/admin',
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
    glow: 'hover:shadow-orange-500/20',
    badge: 'bg-orange-500/20 text-orange-400',
    badgeText: 'Admin',
  },
  {
    icon: '📈',
    title: 'Data Analyst',
    desc: 'Analysts tracking waste reduction metrics, trends & impact reports.',
    href: '/dashboard/analyst',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
    glow: 'hover:shadow-purple-500/20',
    badge: 'bg-purple-500/20 text-purple-400',
    badgeText: 'Analyst',
  },
]

export default function SelectRolePage() {
  const router = useRouter()

  useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    router.replace("/login");
  }
}, [router]);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="orb w-96 h-96 bg-emerald-500 -top-20 -left-20" />
      <div className="orb w-80 h-80 bg-purple-600 bottom-0 right-0" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-16">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center text-lg">🌱</div>
            <span className="font-display font-700 text-xl text-white">SmartSurplus</span>
          </Link>
          <h1 className="font-display font-700 text-4xl md:text-5xl text-white mb-3">
            Select your <span className="grad-emerald">role</span>
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto">Choose your dashboard to continue. Each role provides a tailored experience for your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
          {ROLES.map((role) => (
            <Link
              key={role.href}
              href={role.href}
              className={`glass glass-hover rounded-2xl p-7 border ${role.border} ${role.glow} hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center text-3xl`}>
                  {role.icon}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${role.badge}`}>{role.badgeText}</span>
              </div>
              <h3 className="font-display font-700 text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">{role.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-slate-500 group-hover:text-emerald-400 transition-colors">
                <span>Open dashboard</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
