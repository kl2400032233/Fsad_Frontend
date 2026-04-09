"use client";
import { useState } from "react";

export default function DonorSchedulePage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [scheduledPickup, setScheduledPickup] = useState(null);

  const handleSchedule = () => {
    if (!date || !time) {
      alert("Please select both date and time");
      return;
    }

    setScheduledPickup({ date, time });
    setDate("");
    setTime("");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    const formattedTime = new Date();
    formattedTime.setHours(hour);
    formattedTime.setMinutes(minute);
    return formattedTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-8 space-y-8 text-white">
      <h1 className="text-3xl font-bold">Schedule Pickup</h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* New Pickup */}
        <div className="bg-gray-900/60 p-6 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-4">New Pickup</h2>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mb-4 p-3 rounded-xl bg-gray-800 border border-gray-700"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full mb-4 p-3 rounded-xl bg-gray-800 border border-gray-700"
          />

          <button
            onClick={handleSchedule}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Schedule Pickup
          </button>
        </div>

        {/* Upcoming Pickup */}
        <div className="bg-gray-900/60 p-6 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-4">Upcoming Pickup</h2>

          {scheduledPickup ? (
            <>
              <p className="text-gray-300 mb-2">
                Date:{" "}
                <span className="text-emerald-400 font-medium">
                  {formatDate(scheduledPickup.date)}
                </span>
              </p>

              <p className="text-gray-300">
                Time:{" "}
                <span className="text-cyan-400 font-medium">
                  {formatTime(scheduledPickup.time)}
                </span>
              </p>
            </>
          ) : (
            <p className="text-gray-500">
              No pickup scheduled yet.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}