import React from "react";
export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = ["all", "active", "completed"];
  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          onClick={(e) => onFilterChange(f)}
          style={{
            fontWeight: currentFilter === f ? "bold" : "normal",
            backgroundColor: currentFilter === f ? "d4edda" : "white",
            margin: "0 5px",
          }}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
