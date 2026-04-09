'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from "recharts"

const regionData = [
  { region: "Urban", value: 62 },
  { region: "Semi-Urban", value: 23 },
  { region: "Rural", value: 15 }
]

const performanceData = [
  { region: "North", efficiency: 78 },
  { region: "South", efficiency: 85 },
  { region: "East", efficiency: 69 },
  { region: "West", efficiency: 92 }
]

const COLORS = ["#22d3ee", "#a78bfa", "#34d399"]

export default function GeoAnalysis() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Geographic Performance Analysis
        </h1>
        <p className="text-slate-400 mt-2">
          Regional redistribution performance and impact insights.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-slate-400 text-sm">Top Performing Region</h3>
          <p className="text-2xl font-bold text-emerald-400 mt-2">
            West (92%)
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-slate-400 text-sm">Urban Contribution</h3>
          <p className="text-2xl font-bold text-cyan-400 mt-2">
            62%
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-slate-400 text-sm">Growth Opportunity</h3>
          <p className="text-2xl font-bold text-purple-400 mt-2">
            Rural Areas
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Bar Chart */}
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-white mb-6">
            Regional Efficiency Comparison
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="region" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar
                  dataKey="efficiency"
                  fill="#22d3ee"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-white mb-6">
            Redistribution Distribution
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  dataKey="value"
                  nameKey="region"
                  outerRadius={100}
                  label
                >
                  {regionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Insight Panel */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-white font-semibold mb-2">
          AI Insight
        </h3>
        <p className="text-slate-300 text-sm">
          Urban regions dominate redistribution efficiency, but rural regions show
          strong growth potential. Strategic logistics expansion in rural zones
          could improve total redistribution by 18–25% annually.
        </p>
      </div>

    </div>
  )
}