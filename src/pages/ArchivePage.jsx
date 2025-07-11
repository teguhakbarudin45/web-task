import { useState, useEffect } from "react";
import SidebarComponent from "../components/SidebarComponent";
import TitleComponent from "../components/TitleComponent";
import getPriorityColor from "../utils/priotityColor";
import TaskActionsMenu from "../components/TaskActionsMenu";

import "../style/archive.css";

const ArchivePage = () => {
  // Ngambil data dari local storage
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  const archivedTasks = tasks.filter((task) => task.archived);

  return (
    <section className="container container-dashboard">
      <SidebarComponent />

      <header className="header-content">
        <TitleComponent title={"Archive"} />

        <div className="main-content">
          {archivedTasks.length === 0 ? (
            <h2>Tidak ada tugas yang di archive kan</h2>
          ) : (
            archivedTasks.map((item, index) => (
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
                  <TaskActionsMenu />
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
