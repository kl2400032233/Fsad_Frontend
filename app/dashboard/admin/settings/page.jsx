'use client'
import { useState } from 'react'

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)
  const [settings, setSettings] = useState({
    platformName: 'SmartSurplus',
    supportEmail: 'support@smartsurplus.io',
    autoApprove: false,
    emailNotifs: true,
    smsAlerts: false,
    complianceEmails: true,
    maxDonationKg: '1000',
    pickupWindowHrs: '24',
  })

  const toggle = (key) => setSettings(s => ({ ...s, [key]: !s[key] }))
  const change = (key, val) => setSettings(s => ({ ...s, [key]: val }))

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500) }

  const Toggle = ({ k }) => (
    <button onClick={() => toggle(k)} className={`w-12 h-6 rounded-full transition-all relative ${settings[k] ? 'bg-emerald-500' : 'bg-white/10'}`}>
      <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${settings[k] ? 'left-7' : 'left-1'}`} />
    </button>
  )

  return (
    <div className="space-y-6 animate-fade-up max-w-2xl">
      <div>
        <h1 className="font-display font-800 text-3xl text-white">Settings</h1>
        <p className="text-slate-500 mt-1">Configure platform-wide preferences and policies.</p>
      </div>

      {saved && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 text-emerald-400 text-sm">✅ Settings saved successfully.</div>
      )}

      <div className="glass rounded-2xl border border-white/10 p-6 space-y-6">
        <h2 className="font-display font-600 text-base text-white border-b border-white/5 pb-3">General</h2>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Platform Name</label>
            <input value={settings.platformName} onChange={e => change('platformName', e.target.value)} className="input-field" />
          </div>
          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Support Email</label>
            <input value={settings.supportEmail} onChange={e => change('supportEmail', e.target.value)} className="input-field" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block">Max Donation Size (kg)</label>
              <input value={settings.maxDonationKg} onChange={e => change('maxDonationKg', e.target.value)} className="input-field" type="number" />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block">Pickup Window (hrs)</label>
              <input value={settings.pickupWindowHrs} onChange={e => change('pickupWindowHrs', e.target.value)} className="input-field" type="number" />
            </div>
          </div>
        </div>

        <h2 className="font-display font-600 text-base text-white border-b border-white/5 pb-3">Notifications & Automation</h2>
        {[
          { key: 'autoApprove', label: 'Auto-approve new organizations', desc: 'Skip manual review for verified business emails' },
          { key: 'emailNotifs', label: 'Email notifications', desc: 'Send donation and pickup updates via email' },
          { key: 'smsAlerts', label: 'SMS alerts', desc: 'Send urgent alerts via SMS' },
          { key: 'complianceEmails', label: 'Compliance email alerts', desc: 'Notify admin team of compliance flags' },
        ].map(({ key, label, desc }) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white font-medium">{label}</p>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
            <Toggle k={key} />
          </div>
        ))}

        <button onClick={save} className="btn-primary w-full py-3 rounded-xl text-white font-semibold mt-4">Save Settings</button>
      </div>
    </div>
  )
}
