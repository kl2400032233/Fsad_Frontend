'use client'

import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
  LineChart, Line,
  PieChart, Pie, Cell
} from "recharts"

const barData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 70 },
  { month: "May", value: 65 },
  { month: "Jun", value: 75 },
  { month: "Jul", value: 80 },
  { month: "Aug", value: 85 },
  { month: "Sep", value: 78 },
  { month: "Oct", value: 88 },
  { month: "Nov", value: 90 },
  { month: "Dec", value: 95 }
]

const pieData = [
  { name: "Urban", value: 62 },
  { name: "Rural", value: 38 }
]

const COLORS = ["#6366f1", "#22d3ee"]

export default function AnalystDashboard() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Data Analyst Dashboard
        </h1>
        <p className="text-slate-400 mt-2">
          Advanced analytics for food waste redistribution system.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-slate-400 text-sm">Waste Reduced</p>
          <h2 className="text-3xl font-bold text-emerald-400 mt-2">34%</h2>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-slate-400 text-sm">Avg Match Time</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">18 min</h2>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-slate-400 text-sm">Meals per Donation</p>
          <h2 className="text-3xl font-bold text-purple-400 mt-2">6.8</h2>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-slate-400 text-sm">CO₂ Offset</p>
          <h2 className="text-3xl font-bold text-orange-400 mt-2">89.4 ton</h2>
        </div>

      </div>

      {/* MAIN BAR CHART */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-6">
          Redistribution Rate Over Time
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SECOND ROW CHARTS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LINE CHART */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-white font-semibold mb-4">
            Growth Trend
          </h2>

          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={barData}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-white font-semibold mb-4">
            Regional Distribution
          </h2>

          <div className="h-60 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* AI INSIGHT PANEL */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
        <h3 className="text-white font-semibold">
          🤖 AI Recommendation
        </h3>
        <p className="text-slate-300 text-sm mt-2">
          System predicts 18% growth next quarter if rural logistics are optimized.
          Urban zones remain highest impact contributors.
        </p>
      </div>

    </div>
  )
}