"use client";
import { useState, useEffect } from "react";

export default function DonorDashboard() {

  const [donations, setDonations] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newDonation, setNewDonation] = useState({
    foodName: "",
    quantity: "",
    organizationName: "",
    status: "Pending",
  });

  // 🔹 FETCH DATA
  const fetchDonations = async () => {
    const res = await fetch("http://localhost:8080/api/donations");
    const data = await res.json();
    setDonations(data);
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // 🔹 ADD DONATION
  const handleAdd = async () => {

    if (!newDonation.foodName || !newDonation.quantity || !newDonation.organizationName) {
      alert("Fill all fields");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    await fetch("http://localhost:8080/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: newDonation.foodName,
        quantity: parseInt(newDonation.quantity),
        donorName: user?.name || "Test",
        organizationName: newDonation.organizationName,
        status: newDonation.status,
      }),
    });

    alert("Donation Added Successfully ✅");

    setShowModal(false);
    setNewDonation({
      foodName: "",
      quantity: "",
      organizationName: "",
      status: "Pending",
    });

    fetchDonations();
  };

  return (
    <div className="p-8 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Donor Dashboard</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-xl"
        >
          + New Donation
        </button>
      </div>

      {/* TABLE UI (SAME AS YOUR DESIGN) */}
      <div className="bg-gray-900/60 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="p-4">Item</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Organization</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((d, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="p-4">{d.foodName}</td>
                <td className="p-4">{d.quantity} kg</td>
                <td className="p-4">{d.organizationName}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      d.status === "Delivered"
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {d.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

          <div className="bg-gray-900 p-6 rounded-xl w-80 space-y-3">

            <h2 className="text-xl mb-2">Add Donation</h2>

            <input
              placeholder="Food Name"
              value={newDonation.foodName}
              onChange={(e) =>
                setNewDonation({ ...newDonation, foodName: e.target.value })
              }
              className="w-full p-2 bg-gray-800 rounded"
            />

            <input
              placeholder="Quantity"
              value={newDonation.quantity}
              onChange={(e) =>
                setNewDonation({ ...newDonation, quantity: e.target.value })
              }
              className="w-full p-2 bg-gray-800 rounded"
            />

            <input
              placeholder="Organization"
              value={newDonation.organizationName}
              onChange={(e) =>
                setNewDonation({
                  ...newDonation,
                  organizationName: e.target.value,
                })
              }
              className="w-full p-2 bg-gray-800 rounded"
            />

            <button
              onClick={handleAdd}
              className="bg-emerald-600 w-full p-2 rounded"
            >
              Add Donation
            </button>

          </div>
        </div>
      )}

    </div>
  );
}