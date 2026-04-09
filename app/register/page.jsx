'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    role: 'donor'
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.password) {
      return setError('All fields are required.')
    }

    if (form.password !== form.confirm) {
      return setError('Passwords do not match.')
    }

    if (form.password.length < 6) {
      return setError('Password must be at least 6 characters.')
    }

    setLoading(true)

    try {
      const res = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        }),
      })

      const data = await res.json()

      alert("Registration Successful ✅")
      console.log(data)

      router.push('/login')

    } catch (err) {
      console.error(err)
      setError("Server error. Check backend.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="orb w-80 h-80 bg-emerald-500 -top-20 -left-20" />
      <div className="orb w-64 h-64 bg-purple-600 bottom-0 right-0" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center text-lg">🌱</div>
            <span className="font-display font-700 text-xl text-white">SmartSurplus</span>
          </Link>
          <h1 className="font-display font-700 text-3xl text-white">Create your account</h1>
          <p className="text-slate-500 mt-2 text-sm">Join thousands fighting food waste</p>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/10 space-y-4">

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="input-field"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="input-field"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="input-field"
            >
              <option value="donor">Food Donor</option>
              <option value="organization">Recipient Organization</option>
              <option value="admin">Admin</option>
              <option value="analyst">Data Analyst</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Min. 6 characters"
              className="input-field"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 font-medium mb-1.5 block">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Repeat password"
              className="input-field"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-base mt-2 disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Create Account →'}
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-5">
          Already have an account?{' '}
          <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}