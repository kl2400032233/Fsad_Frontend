'use client'

const DONATIONS = [
  { id: 'D-4821', food: 'Mixed Vegetables', donor: 'GreenFresh Market', org: 'City Food Bank', qty: '120 kg', date: 'Feb 24', status: 'Completed' },
  { id: 'D-4820', food: 'Bakery Items', donor: 'Golden Bakery', org: 'Hope Shelter', qty: '40 kg', date: 'Feb 24', status: 'In Transit' },
  { id: 'D-4819', food: 'Canned Goods', donor: 'SuperMart West', org: 'Sunrise Kitchen', qty: '200 items', date: 'Feb 23', status: 'Pending' },
  { id: 'D-4818', food: 'Cooked Meals', donor: 'Hotel Grand', org: 'Street Aid Org', qty: '150 portions', date: 'Feb 23', status: 'Completed' },
  { id: 'D-4817', food: 'Dairy Products', donor: 'Dairy Direct', org: 'Community Center', qty: '60 L', date: 'Feb 22', status: 'Flagged' },
]

const statusColors = { Completed: 'text-emerald-400 bg-emerald-500/10', 'In Transit': 'text-blue-400 bg-blue-500/10', Pending: 'text-yellow-400 bg-yellow-500/10', Flagged: 'text-red-400 bg-red-500/10' }

export default function AdminDonationsPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-display font-800 text-3xl text-white">Donation Management</h1>
        <p className="text-slate-500 mt-1">Monitor and manage all platform donations.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[['Total', '48,320', 'text-white'], ['Completed', '41,800', 'text-emerald-400'], ['Pending', '2,100', 'text-yellow-400'], ['Flagged', '120', 'text-red-400']].map(([l, v, c]) => (
          <div key={l} className="stat-card text-center">
            <div className={`font-display font-700 text-2xl ${c}`}>{v}</div>
            <div className="text-slate-500 text-sm mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 border-b border-white/5">
                {['ID', 'Food Item', 'Donor', 'Organization', 'Qty', 'Date', 'Status', ''].map(h => (
                  <th key={h} className="text-left px-6 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DONATIONS.map((d) => (
                <tr key={d.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">{d.id}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{d.food}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{d.donor}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{d.org}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{d.qty}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{d.date}</td>
                  <td className="px-6 py-4"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[d.status]}`}>{d.status}</span></td>
                  <td className="px-6 py-4"><button className="text-xs btn-outline px-3 py-1 rounded-lg text-slate-300">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
