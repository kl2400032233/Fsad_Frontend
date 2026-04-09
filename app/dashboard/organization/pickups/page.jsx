'use client'

const PICKUPS = [
  { food: 'Fresh Bread', donor: 'Golden Bakery', date: 'Feb 25', status: 'Scheduled' },
  { food: 'Rice & Curry', donor: 'Spice Garden', date: 'Feb 24', status: 'Completed' },
  { food: 'Vegetables', donor: 'Green Farm', date: 'Feb 26', status: 'Pending' },
]

export default function PickupsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Pickups</h1>

      <div className="glass rounded-2xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="p-4 text-left">Food Item</th>
              <th className="p-4 text-left">Donor</th>
              <th className="p-4 text-left">Pickup Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {PICKUPS.map((p, i) => (
              <tr key={i} className="border-t border-white/5">
                <td className="p-4 text-white">{p.food}</td>
                <td className="p-4 text-slate-300">{p.donor}</td>
                <td className="p-4 text-slate-400">{p.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    p.status === 'Completed'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : p.status === 'Scheduled'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}