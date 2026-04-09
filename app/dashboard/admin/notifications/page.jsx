'use client'
import { useState } from 'react'

const NOTIFICATIONS = [
  { id: 1, type: 'alert', icon: '🚨', title: 'Critical compliance flag', body: 'Nutty Treats Co. has an unresolved allergen issue.', time: '5 min ago', read: false },
  { id: 2, type: 'success', icon: '✅', title: 'New organization approved', body: 'Hope Shelter HQ has been verified and activated.', time: '22 min ago', read: false },
  { id: 3, type: 'info', icon: '📦', title: 'Large donation submitted', body: 'GreenFresh Market donated 300 kg of produce.', time: '1h ago', read: false },
  { id: 4, type: 'info', icon: '👤', title: 'New donor registered', body: 'Sunrise Catering has created a donor account.', time: '3h ago', read: true },
  { id: 5, type: 'warning', icon: '⚠️', title: 'Pickup overdue', body: 'City Food Bank pickup for order D-4801 is 2h late.', time: '4h ago', read: true },
]

export default function AdminNotificationsPage() {
  const [notifs, setNotifs] = useState(NOTIFICATIONS)

  const markAllRead = () => setNotifs(notifs.map(n => ({ ...n, read: true })))

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-800 text-3xl text-white">Notifications</h1>
          <p className="text-slate-500 mt-1">{notifs.filter(n => !n.read).length} unread notifications.</p>
        </div>
        <button onClick={markAllRead} className="btn-outline px-4 py-2 rounded-xl text-sm text-slate-300 font-medium">Mark all read</button>
      </div>

      <div className="glass rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
        {notifs.map((n) => (
          <div key={n.id} className={`px-6 py-4 flex items-start gap-4 hover:bg-white/2 transition-colors ${!n.read ? 'border-l-2 border-emerald-500' : ''}`}>
            <span className="text-xl mt-0.5">{n.icon}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className={`text-sm font-semibold ${n.read ? 'text-slate-400' : 'text-white'}`}>{n.title}</p>
                <span className="text-xs text-slate-600 flex-shrink-0">{n.time}</span>
              </div>
              <p className="text-sm text-slate-500 mt-0.5">{n.body}</p>
            </div>
            {!n.read && <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  )
}
