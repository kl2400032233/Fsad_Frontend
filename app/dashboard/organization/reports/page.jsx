'use client'

const MONTHLY_DATA = [
  { month: 'Jan', meals: 1200 },
  { month: 'Feb', meals: 1500 },
  { month: 'Mar', meals: 1800 },
  { month: 'Apr', meals: 2100 },
  { month: 'May', meals: 2400 },
]

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">Impact Reports</h1>
        <p className="text-slate-400 mt-1">
          Visual overview of donations received and community impact.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-2xl border border-white/10">
          <p className="text-slate-400 text-sm">Total Meals</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">12,480</h2>
        </div>

        <div className="glass p-6 rounded-2xl border border-white/10">
          <p className="text-slate-400 text-sm">CO₂ Reduced</p>
          <h2 className="text-3xl font-bold text-emerald-400 mt-2">3,420 kg</h2>
        </div>

        <div className="glass p-6 rounded-2xl border border-white/10">
          <p className="text-slate-400 text-sm">People Served</p>
          <h2 className="text-3xl font-bold text-purple-400 mt-2">4,950</h2>
        </div>
      </div>

      {/* Monthly Chart */}
      <div className="glass p-6 rounded-2xl border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-6">
          Monthly Donations Received
        </h2>

        <div className="space-y-4">
          {MONTHLY_DATA.map((data, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm text-slate-400 mb-1">
                <span>{data.month}</span>
                <span>{data.meals} meals</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${data.meals / 25}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}