'use client'

const REPORTS = [
  {
    title: "Monthly Impact Summary",
    description: "Comprehensive waste reduction and redistribution performance report.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Carbon Offset Analysis",
    description: "CO₂ savings and sustainability metrics breakdown.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Operational Efficiency Report",
    description: "Matching time, logistics efficiency and optimization insights.",
    color: "from-orange-500 to-pink-500"
  }
]

export default function AnalystReports() {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Platform Reports
        </h1>
        <p className="text-slate-400 mt-2">
          Generate advanced analytical reports and downloadable summaries.
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {REPORTS.map((report, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition duration-300 overflow-hidden"
          >
            <h3 className="text-white font-semibold text-lg">
              {report.title}
            </h3>

            <p className="text-slate-400 text-sm mt-3">
              {report.description}
            </p>

            <button
              className={`mt-6 px-4 py-2 rounded-xl bg-gradient-to-r ${report.color} text-white text-sm font-medium hover:opacity-90 transition`}
            >
              Generate Report
            </button>

            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${report.color} opacity-5`}
            />
          </div>
        ))}
      </div>

      {/* Export Section */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20">
        <h3 className="text-white font-semibold">
          📥 Export Data
        </h3>

        <p className="text-slate-300 text-sm mt-2">
          Download full analytics dataset in PDF or Excel format.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:opacity-90 transition">
            Download PDF
          </button>

          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm hover:opacity-90 transition">
            Download Excel
          </button>
        </div>
      </div>

    </div>
  )
}