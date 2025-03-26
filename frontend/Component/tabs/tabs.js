"use client";
import React, { useState } from "react";

import "./tabs.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Latest");
  return (
    <div>
      <ul className="custom-ul">
        <li
          className={activeTab === "Latest" ? "active" : ""}
          onClick={() => setActiveTab("Latest")}
        >
          <a>Latest</a>
        </li>
        <li
          className={activeTab === "My Squad" ? "active" : ""}
          onClick={() => setActiveTab("My Squad")}
        >
          <a>My Squad</a>
        </li>
        <li
          className={activeTab === "Top Tickets" ? "active" : ""}
          onClick={() => setActiveTab("Top Tickets")}
        >
          <a>Top Tickets</a>
        </li>
      </ul>
    </div>
  );
}
