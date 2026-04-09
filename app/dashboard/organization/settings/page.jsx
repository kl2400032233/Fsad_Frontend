'use client'

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-3xl font-bold text-white">Settings</h1>

      <div className="glass p-6 rounded-2xl border border-white/10 space-y-4">
        <div>
          <label className="text-sm text-slate-400">Organization Name</label>
          <input
            type="text"
            placeholder="Enter organization name"
            className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>

        <div>
          <label className="text-sm text-slate-400">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>

        <div>
          <label className="text-sm text-slate-400">Contact Number</label>
          <input
            type="text"
            placeholder="Enter contact number"
            className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>

        <button className="btn-primary px-6 py-3 rounded-xl text-white font-medium">
          Save Changes
        </button>
      </div>
    </div>
  )
}