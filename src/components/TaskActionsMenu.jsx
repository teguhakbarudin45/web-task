import { useState } from "react";

const TaskActionsMenu = ({ onEdit, onArchive, onDelete }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleAction = (action) => {
    action();
    setOpen(false); // Tutup menu setelah klik
  };

  return (
    <div>
      {/* Tombol ⋮ */}
      <button
        onClick={toggleMenu}
        style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/fluency-systems-filled/48/more.png"
          alt="more"
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="dropwdown">
          <button onClick={() => handleAction(onEdit)} style={menuButtonStyle}>
            Edit
          </button>
          <button
            onClick={() => handleAction(onArchive)}
            style={menuButtonStyle}
          >
            Archive
          </button>
          <button
            onClick={() => handleAction(onDelete)}
            style={menuButtonStyle}
          >
            Delete
          </button>
        </div>
      )}
    </div>
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

export default TaskActionsMenu;
