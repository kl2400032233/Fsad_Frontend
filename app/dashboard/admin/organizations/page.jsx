"use client";

import { useState } from "react";

export default function OrganizationsPage() {
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [orgs, setOrgs] = useState([
    {
      name: "City Food Bank",
      type: "Food Bank",
      location: "New York, NY",
      capacity: "500 kg/day",
      pickups: 1240,
      status: "Verified",
    },
    {
      name: "Hope Shelter",
      type: "Homeless Shelter",
      location: "Brooklyn, NY",
      capacity: "200 kg/day",
      pickups: 820,
      status: "Verified",
    },
  ]);

  const [newOrg, setNewOrg] = useState({
    name: "",
    type: "",
    location: "",
    capacity: "",
  });

  const handleAdd = () => {
    if (!newOrg.name || !newOrg.type) {
      alert("Please fill all fields");
      return;
    }

    setOrgs([
      ...orgs,
      { ...newOrg, pickups: 0, status: "Pending" },
    ]);

    setSuccessMsg("✅ Organization added successfully!");

    setShowModal(false);

    setNewOrg({
      name: "",
      type: "",
      location: "",
      capacity: "",
    });

    // Auto hide message after 3 sec
    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  return (
    <div className="space-y-6">

      {/* SUCCESS MESSAGE */}
      {successMsg && (
        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
          {successMsg}
        </div>
      )}

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-white font-bold">Organizations</h1>
          <p className="text-slate-400 text-sm">
            Verify and manage all recipient organizations.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-2 rounded-xl text-white"
        >
          + Add Organization
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-gray-900 rounded-xl p-4 border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th>Organization</th>
              <th>Type</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Pickups</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-white">
            {orgs.map((o, i) => (
              <tr key={i} className="border-t border-white/10">
                <td className="py-3">{o.name}</td>
                <td>{o.type}</td>
                <td>{o.location}</td>
                <td>{o.capacity}</td>
                <td>{o.pickups}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      o.status === "Verified"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 p-6 rounded-xl w-96 border border-white/10">
            <h2 className="text-white text-lg mb-4">Add Organization</h2>

            <input
              placeholder="Organization Name"
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newOrg.name}
              onChange={(e) =>
                setNewOrg({ ...newOrg, name: e.target.value })
              }
            />

            <input
              placeholder="Type"
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newOrg.type}
              onChange={(e) =>
                setNewOrg({ ...newOrg, type: e.target.value })
              }
            />

            <input
              placeholder="Location"
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newOrg.location}
              onChange={(e) =>
                setNewOrg({ ...newOrg, location: e.target.value })
              }
            />

            <input
              placeholder="Capacity"
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newOrg.capacity}
              onChange={(e) =>
                setNewOrg({ ...newOrg, capacity: e.target.value })
              }
            />

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAdd}
                className="bg-emerald-500 px-4 py-2 rounded text-white w-full"
              >
                Add
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 px-4 py-2 rounded text-white w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}