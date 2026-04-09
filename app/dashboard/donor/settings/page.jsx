export default function DonorSettingsPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="bg-gray-900/60 p-6 rounded-2xl shadow-xl border border-gray-800 max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-xl bg-gray-800 border border-gray-700"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-gray-800 border border-gray-700"
        />

        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-xl shadow hover:scale-105 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}