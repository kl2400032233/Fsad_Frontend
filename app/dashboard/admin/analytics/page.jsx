'use client'

const MONTHLY = [
  { month: 'Sep', donations: 3200, meals: 18000 },
  { month: 'Oct', donations: 3800, meals: 21200 },
  { month: 'Nov', donations: 4200, meals: 24100 },
  { month: 'Dec', donations: 5100, meals: 29800 },
  { month: 'Jan', donations: 4600, meals: 26500 },
  { month: 'Feb', donations: 4900, meals: 28200 },
]

const max = 5100

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-display font-800 text-3xl text-white">Analytics</h1>
        <p className="text-slate-500 mt-1">Platform-wide impact metrics and trends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { label: 'Waste Diverted (tons)', value: '1,240', icon: '♻️', sub: 'This year' },
          { label: 'Total Meals Served', value: '147,800', icon: '🍽️', sub: 'All time' },
          { label: 'Carbon Offset (kg)', value: '89,400', icon: '🌳', sub: 'CO₂ equivalent' },
        ].map((m, i) => (
          <div key={i} className="stat-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-2xl">{m.icon}</div>
            <div>
              <div className="font-display font-700 text-2xl text-emerald-400">{m.value}</div>
              <div className="text-sm text-white font-medium">{m.label}</div>
              <div className="text-xs text-slate-500">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <h2 className="font-display font-700 text-lg text-white mb-6">Monthly Donation Volume</h2>
        <div className="flex items-end gap-3 h-48">
          {MONTHLY.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-slate-500">{m.donations.toLocaleString()}</span>
              <div
                className="w-full rounded-t-xl bg-gradient-to-t from-emerald-500 to-teal-400 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ height: `${(m.donations / max) * 100}%` }}
                title={`${m.donations} donations`}
              />
              <span className="text-xs text-slate-500">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="glass rounded-2xl border border-white/10 p-6">
          <h3 className="font-display font-700 text-lg text-white mb-4">Top Donor Categories</h3>
          {[
            { cat: 'Restaurants & Cafes', pct: 38, color: 'from-emerald-500 to-teal-500' },
            { cat: 'Supermarkets', pct: 28, color: 'from-blue-500 to-indigo-500' },
            { cat: 'Bakeries', pct: 18, color: 'from-orange-500 to-red-500' },
            { cat: 'Farms & Agriculture', pct: 16, color: 'from-purple-500 to-pink-500' },
          ].map((c, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">{c.cat}</span>
                <span className="text-white font-semibold">{c.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${c.color}`} style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl border border-white/10 p-6">
          <h3 className="font-display font-700 text-lg text-white mb-4">Geographic Distribution</h3>
          {[
            { city: 'New York City', donors: 4200, color: 'text-emerald-400' },
            { city: 'Los Angeles', donors: 2800, color: 'text-blue-400' },
            { city: 'Chicago', donors: 1900, color: 'text-orange-400' },
            { city: 'Houston', donors: 1400, color: 'text-purple-400' },
            { city: 'Phoenix', donors: 900, color: 'text-pink-400' },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
              <span className="text-sm text-slate-400">{c.city}</span>
              <span className={`text-sm font-semibold ${c.color}`}>{c.donors.toLocaleString()} donors</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
