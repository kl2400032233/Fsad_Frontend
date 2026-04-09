"use client";

const STATS = [
  { icon: "👥", label: "Total Users", value: "15,842", change: "+240 this week", color: "text-orange-400", bg: "from-orange-500/20 to-red-500/10" },
  { icon: "📦", label: "Total Donations", value: "48,320", change: "+1,200 today", color: "text-emerald-400", bg: "from-emerald-500/20 to-teal-500/10" },
  { icon: "🏢", label: "Organizations", value: "3,840", change: "+15 pending", color: "text-blue-400", bg: "from-blue-500/20 to-indigo-500/10" },
  { icon: "⚠️", label: "Compliance Flags", value: "12", change: "3 critical", color: "text-red-400", bg: "from-red-500/20 to-orange-500/10" },
];

const ACTIVITY = [
  { action: "New donor registered", actor: "GreenFresh Market", time: "2 min ago", type: "user" },
  { action: "Large donation flagged for review", actor: "Admin System", time: "8 min ago", type: "alert" },
  { action: "Organization approved", actor: "Hope Shelter HQ", time: "15 min ago", type: "success" },
  { action: "Compliance check passed", actor: "Sunrise Kitchen", time: "1h ago", type: "success" },
  { action: "Pickup confirmed", actor: "City Food Bank", time: "2h ago", type: "info" },
];

const typeIcons = {
  user: "👤",
  alert: "⚠️",
  success: "✅",
  info: "ℹ️",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-up">

      {/* HEADER */}
      <div>
        <h1 className="font-display font-800 text-3xl md:text-4xl text-white">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 mt-1">
          Platform-wide overview — manage users, donations, and compliance.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <div key={i} className={`stat-card bg-gradient-to-br ${s.bg}`}>
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
            </div>

            <div className={`font-display font-700 text-3xl ${s.color}`}>
              {s.value}
            </div>

            <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            <div className="text-xs text-slate-600 mt-0.5">{s.change}</div>
          </div>
        ))}
      </div>

      {/* ACTIVITY + HEALTH */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* ACTIVITY */}
        <div className="glass rounded-2xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="font-display font-700 text-lg text-white">
              Live Activity Feed
            </h2>
          </div>

          <div className="divide-y divide-white/5">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="px-6 py-3.5 flex items-center gap-3 hover:bg-white/5">
                <span className="text-lg">{typeIcons[a.type]}</span>

                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{a.action}</p>
                  <p className="text-xs text-slate-500">{a.actor}</p>
                </div>

                <span className="text-xs text-slate-600">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PLATFORM HEALTH */}
        <div className="glass rounded-2xl border border-white/10 p-6">
          <h2 className="font-display font-700 text-lg text-white mb-4">
            Platform Health
          </h2>

          {[
            { label: "Uptime", val: 99.9, color: "from-emerald-500 to-teal-500" },
            { label: "Redistribution Rate", val: 87, color: "from-blue-500 to-indigo-500" },
            { label: "Donor Retention", val: 74, color: "from-purple-500 to-pink-500" },
            { label: "Match Success Rate", val: 92, color: "from-orange-500 to-red-500" },
          ].map((m, i) => (
            <div key={i} className="mb-4">

              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-400">{m.label}</span>
                <span className="text-white font-semibold">{m.val}%</span>
              </div>

              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                  style={{ width: `${m.val}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}