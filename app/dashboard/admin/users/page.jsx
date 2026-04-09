"use client";

import { useState } from "react";

export default function UsersPage() {
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [users, setUsers] = useState([
    {
      name: "Sarah Ahmed",
      email: "sarah@greenfresh.com",
      role: "Donor",
      status: "Active",
      joined: "Jan 12, 2025",
      donations: 84,
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Donor",
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Please fill all fields");
      return;
    }

    setUsers([
      ...users,
      {
        ...newUser,
        status: "Pending",
        joined: new Date().toLocaleDateString(),
        donations: 0,
      },
    ]);

    setSuccessMsg("✅ User invited successfully!");

    setShowModal(false);

    setNewUser({
      name: "",
      email: "",
      role: "Donor",
    });

    setTimeout(() => setSuccessMsg(""), 3000);
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
          <h1 className="text-3xl text-white font-bold">User Management</h1>
          <p className="text-slate-400 text-sm">
            Manage all registered users on the platform.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-2 rounded-xl text-white"
        >
          + Invite User
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-gray-900 rounded-xl p-4 border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Donations</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="text-white">
            {users.map((u, i) => (
              <tr key={i} className="border-t border-white/10">
                <td className="py-3">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                    {u.status}
                  </span>
                </td>
                <td>{u.joined}</td>
                <td>{u.donations}</td>
                <td className="space-x-2">
                  <button className="px-3 py-1 bg-gray-700 rounded">Edit</button>
                  <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded">
                    Ban
                  </button>
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
            <h2 className="text-white text-lg mb-4">Invite User</h2>

            <input
              placeholder="Full Name"
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />

            <input
              placeholder="Email"
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />

            <select
              className="w-full mb-2 p-2 rounded bg-gray-800 text-white"
              value={newUser.role}
              onChange={(e) =>
                setNewUser({ ...newUser, role: e.target.value })
              }
            >
              <option>Donor</option>
              <option>Organization</option>
              <option>Analyst</option>
              <option>Admin</option>
            </select>

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddUser}
                className="bg-emerald-500 px-4 py-2 rounded text-white w-full"
              >
                Invite
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