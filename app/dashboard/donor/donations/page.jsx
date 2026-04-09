"use client";

import { useState, useEffect } from "react";

export default function DonationsPage() {
 
  const [donations, setDonations] = useState([]);

  // ✅ Fetch from backend
  const fetchDonations = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/donations");
      const data = await res.json();
      setDonations(data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">All Donations</h1>

      {donations.length === 0 ? (
        <p className="text-gray-400">No donations yet</p>
        
      ) : (

        <div className="space-y-4">
          {donations.map((d, i) => (
            <div
              key={i}
              className="bg-[#0f172a] border border-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Food Name */}
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                {d.foodName}
              </h3>

              {/* Details */}
              <p className="text-gray-300">
                Quantity: <span className="text-white">{d.quantity}</span>
              </p>

              <p className="text-gray-300">
                Organization:{" "}
                <span className="text-white">{d.organizationName}</span>
              </p>
              <p>No donations yet</p>

              {/* Status Badge */}
              <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-yellow-500/20 text-yellow-400">
                {d.status}
              </span>
            </div>
          ))}
        </div>

      )}
    </div>
  );
}