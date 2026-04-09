"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function BrowsePage() {
  const [donations, setDonations] = useState([]);

  // ✅ Fetch donations from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/donations")
      .then((res) => {
        console.log("DONATIONS:", res.data);
        setDonations(res.data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, []);

  // ✅ Send request to backend
  const handleRequest = async (item) => {
    try {
      console.log("Sending request:", item);

      await axios.post("http://localhost:8080/api/requests", {
        foodName: item.foodName,
        quantity: item.quantity,
      });

      alert("Request Sent Successfully!");
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">
        Browse Available Donations
      </h1>

      {/* ✅ No data */}
      {donations.length === 0 ? (
        <p className="text-gray-400">No Donations Available</p>
      ) : (
        donations.map((d, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-xl"
          >
            <div>
              <p className="text-white text-lg">{d.foodName}</p>
              <p className="text-gray-400 text-sm">{d.quantity}</p>
            </div>

            <button
              onClick={() => handleRequest(d)}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Request
            </button>
          </div>
        ))
      )}
    </div>
  );
}