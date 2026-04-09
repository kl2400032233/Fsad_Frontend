'use client'

const STATS = [
  { title: 'Meals Received', value: '5,480', change: '+9%', color: 'text-blue-400' },
  { title: 'Active Partners', value: '34', change: '+3', color: 'text-emerald-400' },
  { title: 'Open Requests', value: '7', change: '2 urgent', color: 'text-orange-400' },
  { title: 'Impact Score', value: '92%', change: 'Excellent', color: 'text-purple-400' },
]

const RECENT_ACTIVITY = [
  { action: 'Received 50kg Bread from Golden Bakery', time: '2 hours ago' },
  { action: 'Requested Vegetables from Green Farm', time: '5 hours ago' },
  { action: 'Pickup completed from Spice Garden', time: 'Yesterday' },
]

export default function OrganizationDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">Organization Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Monitor donations, partners, and impact in real-time.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between items-start">
              <p className="text-slate-400 text-sm">{stat.title}</p>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-slate-300">
                {stat.change}
              </span>
            </div>
            <h2 className={`text-3xl font-bold mt-3 ${stat.color}`}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="glass p-6 rounded-2xl border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {RECENT_ACTIVITY.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-slate-300">{item.action}</span>
              <span className="text-slate-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}