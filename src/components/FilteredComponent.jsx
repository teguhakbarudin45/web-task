import { useState } from "react";
import "../style/filtered.css";
const FilteredComponent = ({ currentFilter, onFilterChange }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open); // == true
  };

  const handleSelect = (filterValue) => {
    onFilterChange(filterValue);
    setOpen(false);
  };

  return (
    <>
      <li className="btn-filtered" onClick={toggleMenu}>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/filter--v1.png"
          alt="filter--v1"
        />
        <button className="btn btn-filtered">Filtered</button>
      </li>

      {/* Dropdown menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            transform: "translate(230px, 60px)",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 10,
          }}
        >
          <button
            className="btn-high"
            style={menuButtonStyle}
            onClick={() => handleSelect("High")}
          >
            High
          </button>
          <button
            className="btn-medium"
            style={menuButtonStyle}
            onClick={() => handleSelect("Medium")}
          >
            Medium
          </button>
          <button
            className="btn-low"
            style={menuButtonStyle}
            onClick={() => handleSelect("Low")}
          >
            Low
          </button>
          <button style={menuButtonStyle} onClick={() => handleSelect("All")}>
            All
          </button>
        </div>
      )}
    </>
  );
};

// Style tombol dalam menu
const menuButtonStyle = {
  display: "block",
  padding: "8px 12px",
  width: "100%",
  background: "none",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
};

export default FilteredComponent;
