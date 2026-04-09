"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );

      // ✅ STORE USER (VERY IMPORTANT)
      localStorage.setItem("user", JSON.stringify(res.data));

      // ✅ REDIRECT
      router.push("/select-role");

    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
      
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-emerald-500 opacity-20 blur-3xl top-10 left-10 rounded-full"></div>
      <div className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl bottom-10 right-10 rounded-full"></div>

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-[#0f172a] p-8 rounded-2xl shadow-2xl w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome back
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded-lg bg-[#1e293b] border border-gray-600 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-[#1e293b] border border-gray-600 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Sign In →
        </button>
      </form>
    </div>
  );
}