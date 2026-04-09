export default function DonorImpactPage() {
  const stats = [
    { title: "Total Meals Provided", value: "8,920", color: "from-emerald-500 to-green-600" },
    { title: "CO₂ Saved (kg)", value: "3,410", color: "from-orange-500 to-red-500" },
    { title: "Total Donations", value: "1,284", color: "from-blue-500 to-indigo-600" },
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Impact Report</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${s.color} p-6 rounded-2xl shadow-lg`}
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}