'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="orb w-80 h-80 bg-sunset top-0 right-0" />
      <div className="orb w-64 h-64 bg-purple-600 bottom-0 left-0" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center text-lg">🌱</div>
            <span className="font-display font-700 text-xl text-white">SmartSurplus</span>
          </Link>
          <h1 className="font-display font-700 text-3xl text-white">Reset password</h1>
          <p className="text-slate-500 mt-2 text-sm">We'll send a reset link to your email</p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/10">
          {sent ? (
            <div className="text-center space-y-4">
              <div className="text-5xl">📬</div>
              <p className="text-white font-semibold text-lg">Check your inbox</p>
              <p className="text-slate-400 text-sm">If an account exists for <span className="text-emerald-400">{email}</span>, you'll receive a reset link shortly.</p>
              <Link href="/login" className="btn-primary inline-block mt-4 px-6 py-3 rounded-xl text-white font-medium text-sm">Back to Login</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 font-medium mb-1.5 block">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-base disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
              <Link href="/login" className="block text-center text-sm text-slate-500 hover:text-slate-400 transition-colors mt-2">← Back to Login</Link>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
