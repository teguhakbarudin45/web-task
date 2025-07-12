// import { useState } from "react";

const TaskActionsMenu = ({ onEdit, onArchive, onDelete }) => {
  // const [open, setOpen] = useState(false);

  const handleAction = (action) => {
    action();
  };

  return (
    <div className="btn-action">
      {open && (
        <div>
          <button
            onClick={() => handleAction(onEdit)}
            style={{
              backgroundColor: "#0069ff",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => handleAction(onArchive)}
            style={{
              backgroundColor: "#22bb56",
            }}
          >
            Archive
          </button>
          <button
            onClick={() => handleAction(onDelete)}
            style={{
              backgroundColor: "red",
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskActionsMenu;
