import { useEffect, useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import TitleComponent from "../components/TitleComponent";
import getPriorityColor from "../utils/priotityColor";

const TrashPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // semua task yang dintandi trashed
  const trashedTasks = tasks.filter((task) => task.trashed);

  // restore task
  const handleRestore = (id) => {
    const update = tasks.map((task) =>
      task.id === id ? { ...task, trashed: false, archived: false } : task
    );
    setTasks(update);
    localStorage.setItem("tasks", JSON.stringify(update));
  };

  // Permanent Delete
  const handlePermanentDelete = (id) => {
    const update = tasks.filter((tasks) => tasks.id !== id);
    setTasks(update);
    localStorage.setItem("tasks", JSON.stringify(update));
  };

  return (
    <section className="container container-trash">
      <SidebarComponent />

      <header className="header-content">
        <TitleComponent title={"Trash"} />

        <main className="main-content">
          {trashedTasks.length === 0 ? (
            <h2>Trash masih kosong</h2>
          ) : (
            trashedTasks.map((item) => (
              <div className="card" key={item.id}>
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
                      onClick={() => handleRestore(item.id)}
                      style={{
                        background: "#4caf50",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        cursor: "pointer",
                      }}
                    >
                      Restore
                    </button>
                    <button
                      onClick={() => handlePermanentDelete(item.id)}
                      style={{
                        background: "#f44336",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
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
                    alt="calendar"
                  />
                  {item.date}
                </span>
              </div>
            ))
          )}
        </main>
      </header>
    </section>
  );
};

export default TrashPage;
