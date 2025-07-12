import { useState, useEffect } from "react";
import SidebarComponent from "../components/SidebarComponent";
import TitleComponent from "../components/TitleComponent";
import getPriorityColor from "../utils/priotityColor";
import FilteredComponent from "../components/FilteredComponent";

import "../style/archive.css";

const ArchivePage = () => {
  const [filter, setFilter] = useState("All");
  // Ngambil data dari local storage
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  const archivedTasks = tasks.filter((task) => task.archived && !task.trashed);

  // handle unarchive task
  const handleUnarchive = (id) => {
    const update = tasks.map((task) =>
      task.id === id ? { ...task, archived: false } : task
    );
    setTasks(update);
    localStorage.setItem("tasks", JSON.stringify(update));
  };

  // handle trash task
  const handleDelete = (id) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { ...task, trashed: true } : task
    );

    setTasks(updateTask);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
  };

  return (
    <section className="container container-archived">
      <SidebarComponent />

      <header className="header-content">
        <TitleComponent title={"Archive"} />

        <div className="main-content">
          <FilteredComponent
            currentFilter={filter}
            onFilterChange={setFilter}
          />

          {archivedTasks.length === 0 ? (
            <h2 className="title__empty">
              Tidak ada tugas yang di archive kan
            </h2>
          ) : (
            archivedTasks
              .filter((task) => {
                if (filter === "All") return true;
                return task.priority === filter;
              })
              .map((item, index) => (
                <div className="card" key={index}>
                  <section>
                    <span
                      className="priority"
                      style={{
                        backgroundColor: getPriorityColor(item.priority),
                        fontSize: "0.76em",
                        fontWeight: 300,
                        color: "white",
                        padding: ".3em .9em",
                        borderRadius: "5px",
                      }}
                    >
                      {item.priority}
                    </span>
                    <div
                      style={{
                        display: "inline-flex",
                        gap: "0.5rem",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <button
                        onClick={() => handleUnarchive(item.id)}
                        style={{
                          background: "#4caf50",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          padding: "4px 8px",
                          cursor: "pointer",
                        }}
                      >
                        Unarchive
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        style={{
                          background: "#f44336",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          padding: "4px 8px",
                          cursor: "pointer",
                        }}
                      >
                        Trash
                      </button>
                    </div>
                  </section>
                  <h2 className="title-task">{item.title}</h2>
                  <p className="description-task">{item.description}</p>
                  <span className="date-task">
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                      alt="external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto"
                    />
                    {item.date}
                  </span>
                </div>
              ))
          )}
        </div>
      </header>
    </section>
  );
};

export default ArchivePage;
