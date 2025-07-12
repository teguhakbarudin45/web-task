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
        <button className="btn">
          Filtered: <span>{currentFilter}</span>
        </button>
      </li>

      {/* Dropdown menu */}
      {open && (
        <div className="btn-dropdown">
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
