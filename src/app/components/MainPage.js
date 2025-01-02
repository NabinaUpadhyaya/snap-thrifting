"use client"
import React, { useState } from "react";
import Itembox from "./Itembox"; // Correct import

const MainPage = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Pending"); // Default active tab is "Pending"

  return (
    <section className="mt-8 mb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              className={`${
                activeTab === "Pending" ? "bg-purple-700" : "bg-[#5F41E4]"
              } text-white px-4 py-2 rounded-lg`}
              onClick={() => setActiveTab("Pending")}
            >
              Pending
            </button>
            <button
              className={`${
                activeTab === "Approved" ? "bg-purple-700" : "bg-[#5F41E4]"
              } text-white px-4 py-2 rounded-lg`}
              onClick={() => setActiveTab("Approved")}
            >
              Approved
            </button>
            <button
              className={`${
                activeTab === "Rejected" ? "bg-purple-700" : "bg-[#5F41E4]"
              } text-white px-4 py-2 rounded-lg`}
              onClick={() => setActiveTab("Rejected")}
            >
              Rejected
            </button>
          </div>

          <button className="bg-[#5F41E4] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#4c39c7]">
            + Add Product
          </button>
        </div>

        {/* Render the content for the selected tab using Itembox */}
        <div className="mt-6">
          <Itembox status={activeTab} /> {/* Pass the activeTab as a prop */}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
