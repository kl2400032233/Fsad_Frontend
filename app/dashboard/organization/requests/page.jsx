"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function RequestsPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/requests")
      .then((res) => {
        console.log("REQUESTS:", res.data);
        setRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">My Requests</h1>

      {requests.length === 0 ? (
        <p className="text-gray-400">No Requests Yet</p>
      ) : (
        requests.map((r, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded-xl flex justify-between"
          >
            <div>
              <p className="text-white">{r.foodName}</p>
              <p className="text-gray-400 text-sm">{r.quantity}</p>
            </div>

            <span className="text-yellow-400">{r.status}</span>
          </div>
        ))
      )}
    </div>
  );
}