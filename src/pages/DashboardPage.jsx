import SidebarComponent from "../components/SidebarComponent";
import TitleComponent from "../components/TitleComponent";
import { Link } from "react-router";
import "../style/dashboard.css";
import { useState } from "react";
import TaskComponent from "../components/TaskCompoent";
import CalenderComponent from "../components/CalenderComponent";

const DashboardPage = () => {
  const [activeTab, isActiveTab] = useState("task");

  return (
    <section className="container container-dashboard">
      <SidebarComponent />

      <header className="header-content">
        <TitleComponent title={"Dashboard"} />

        <nav className="navbar-content">
          <ul className="list-navbar">
            <li
              className={activeTab === "task" ? "active" : ""}
              onClick={() => isActiveTab("task")}
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/fluency-systems-regular/48/bulleted-list--v1.png"
                alt="bulleted-list--v1"
              />
              <button>Task</button>
            </li>
            <li
              className={activeTab === "calender" ? "active" : ""}
              onClick={() => isActiveTab("calender")}
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                alt="external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto"
              />
              <button>Calender</button>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          {activeTab === "task" && <TaskComponent />}
          {activeTab === "calender" && <CalenderComponent />}
        </main>
      </header>
    </section>
  );
};

export default DashboardPage;
