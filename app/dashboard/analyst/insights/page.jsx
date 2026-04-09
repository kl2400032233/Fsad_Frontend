'use client'

export default function Insights() {
  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-3xl font-bold text-white">
          🤖 AI-Powered Insights
        </h1>
        <p className="text-slate-400 mt-2">
          Predictive analytics and intelligent waste optimization.
        </p>
      </div>

      {/* Prediction Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
          <h3 className="text-white font-semibold">
            📈 Growth Forecast
          </h3>
          <p className="text-slate-300 text-sm mt-3">
            Redistribution efficiency expected to increase by 
            <span className="text-emerald-400 font-semibold"> 18% </span>
            next quarter based on current trends.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/20">
          <h3 className="text-white font-semibold">
            🌍 Regional Optimization
          </h3>
          <p className="text-slate-300 text-sm mt-3">
            Urban zones show highest efficiency. Expanding rural logistics
            could increase impact by 12%.
          </p>
        </div>

      </div>

      {/* AI Recommendation Panel */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <h3 className="text-lg font-semibold text-white mb-4">
          🔎 Smart Recommendation Engine
        </h3>

        <ul className="space-y-3 text-slate-400 text-sm">
          <li>• Optimize pickup routes using AI clustering.</li>
          <li>• Prioritize high-expiry donations in urban centers.</li>
          <li>• Increase donor onboarding in high-density areas.</li>
          <li>• Improve NGO-donor matching using predictive modeling.</li>
        </ul>
      </div>

    </div>
  )
}