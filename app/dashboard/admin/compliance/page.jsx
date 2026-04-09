'use client'

const FLAGS = [
  { id: 'CF-091', type: 'Allergen Risk', donor: 'Nutty Treats Co.', severity: 'Critical', desc: 'Unlabeled nut content detected in donation batch.', date: 'Feb 24' },
  { id: 'CF-090', type: 'Storage Violation', donor: 'QuickServe Diner', severity: 'High', desc: 'Temperature logs missing for dairy donation.', date: 'Feb 23' },
  { id: 'CF-089', type: 'Expired Item', donor: 'SuperMart East', severity: 'Medium', desc: '3 items beyond best-before date included in delivery.', date: 'Feb 22' },
  { id: 'CF-088', type: 'Documentation', donor: 'Sunrise Catering', severity: 'Low', desc: 'Pickup receipt unsigned.', date: 'Feb 21' },
]

const severityColors = { Critical: 'text-red-400 bg-red-500/10 border-red-500/20', High: 'text-orange-400 bg-orange-500/10 border-orange-500/20', Medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20', Low: 'text-blue-400 bg-blue-500/10 border-blue-500/20' }

export default function AdminCompliancePage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-display font-800 text-3xl text-white">Compliance</h1>
        <p className="text-slate-500 mt-1">Safety checks, allergen tracking, and audit trails.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[['Critical', '3', 'text-red-400'], ['High', '5', 'text-orange-400'], ['Medium', '4', 'text-yellow-400'], ['Resolved', '284', 'text-emerald-400']].map(([l, v, c]) => (
          <div key={l} className="stat-card text-center">
            <div className={`font-display font-700 text-3xl ${c}`}>{v}</div>
            <div className="text-slate-500 text-sm mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {FLAGS.map((f) => (
          <div key={f.id} className={`glass rounded-2xl p-5 border ${severityColors[f.severity].split(' ')[2]}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-slate-500">{f.id}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${severityColors[f.severity]}`}>{f.severity}</span>
                    <span className="text-xs text-slate-500">{f.type}</span>
                  </div>
                  <p className="text-sm text-white font-medium">{f.desc}</p>
                  <p className="text-xs text-slate-500 mt-1">Reported by: {f.donor} · {f.date}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="btn-primary text-xs px-3 py-1.5 rounded-xl text-white font-medium">Resolve</button>
                <button className="btn-outline text-xs px-3 py-1.5 rounded-xl text-slate-300">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
