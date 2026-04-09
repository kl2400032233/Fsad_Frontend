"use client";
import { useState, useEffect } from "react";

export default function DonationsPage() {

  const [donations, setDonations] = useState([]);

  // fetch from backend
  const fetchDonations = async () => {
    const res = await fetch("http://localhost:8080/api/donations");
    const data = await res.json();
    setDonations(data);
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div style={{ padding: "20px", color: "white" }}>

      <h1>All Donations</h1>

      {donations.length === 0 ? (
        <p>No donations yet</p>
      ) : (
        donations.map((d, i) => (
          <div key={i}>
            {d.foodName} - {d.quantity} - {d.organizationName} - {d.status}
          </div>
        ))
      )}

    </div>
  );
}