'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DashboardLayout({ children, role, navItems }) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn')
    if (!loggedIn) { router.replace('/login'); return }
    const stored = localStorage.getItem('smartSurplusUser')
    if (stored) setUser(JSON.parse(stored))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.replace('/login')
  }

  const roleColors = {
    donor: { accent: '#10b981', gradient: 'from-emerald-500 to-teal-500', orb: 'bg-emerald-500' },
    organization: { accent: '#3b82f6', gradient: 'from-blue-500 to-indigo-500', orb: 'bg-blue-600' },
    admin: { accent: '#f97316', gradient: 'from-orange-500 to-red-500', orb: 'bg-orange-500' },
    analyst: { accent: '#8b5cf6', gradient: 'from-purple-500 to-pink-500', orb: 'bg-purple-600' },
  }

  const colors = roleColors[role] || roleColors.donor

  const Sidebar = () => (
    <aside className="w-64 h-screen sticky top-0 flex flex-col glass border-r border-white/5 p-5">
      <Link href="/" className="flex items-center gap-3 mb-8">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-lg shadow-lg`}>🌱</div>
        <span className="font-display font-700 text-lg text-white">SmartSurplus</span>
      </Link>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`sidebar-item ${pathname === item.href ? 'active' : ''}`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
        {user && (
          <div className="flex items-center gap-3 px-2">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
              {user.name?.charAt(0)?.toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full sidebar-item text-red-400 hover:bg-red-500/10 hover:text-red-400 border-transparent"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )

  return (
    <div className="flex min-h-screen">
      {/* Orbs */}
      <div className={`orb w-64 h-64 ${colors.orb} -top-10 left-10`} style={{ opacity: 0.08 }} />

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="glass border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-400 hover:text-white">☰</button>
            <div>
              <p className="text-xs text-slate-500">SmartSurplus Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-outline px-3 py-1.5 rounded-xl text-xs text-slate-300 font-medium">🔔</button>
            <Link href="/select-role" className="btn-outline px-4 py-1.5 rounded-xl text-xs text-slate-300 font-medium">Switch Role</Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
