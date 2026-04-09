'use client'

export default function WasteTrends() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Waste Reduction Trends
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/20">
          <h3 className="text-white font-semibold">Food Waste Reduced</h3>
          <p className="text-3xl text-emerald-400 mt-2">+12%</p>
          <p className="text-slate-400 text-sm mt-1">Compared to last month</p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20">
          <h3 className="text-white font-semibold">Redistribution Growth</h3>
          <p className="text-3xl text-blue-400 mt-2">+18%</p>
          <p className="text-slate-400 text-sm mt-1">Increased donation matching</p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20">
          <h3 className="text-white font-semibold">Matching Efficiency</h3>
          <p className="text-3xl text-purple-400 mt-2">+9%</p>
          <p className="text-slate-400 text-sm mt-1">AI optimization impact</p>
        </div>

      </div>

    </div>
  )
}