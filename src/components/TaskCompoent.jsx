import "../style/taskList.css";
import FormTask from "../components/FormTask";
import getPriorityColor from "../utils/priotityColor";
import { useState, useEffect } from "react";
import TaskActionsMenu from "./TaskActionsMenu";
import FilteredComponent from "./FilteredComponent";

const TaskComponent = () => {
  const [tasks, setTasks] = useState(() => {
    // ambil data dari local storage
    const savedTask = localStorage.getItem("tasks");
    // kalau ad data, parse jadi array
    return savedTask ? JSON.parse(savedTask) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    archived: false,
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // menyimpan data terbaru ke local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle Input Berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveTask = (e) => {
    e.preventDefault();

    if (!formData.title) return;

    if (editingIndex !== null) {
      // mode edit
      const updatedTask = tasks.map((task) =>
        task.id === editingIndex ? formData : task
      );
      setTasks(updatedTask);
    } else {
      const newTask = { ...formData, id: Date.now() };
      setTasks([...tasks, newTask]);
    }

    setFormData({
      id: null,
      title: "",
      description: "",
      date: "",
      priority: "",
      archived: false,
    });
    setEditingIndex(null);
    setShowForm(false);
  };

  // handle delete task
  const handleDeleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);

    setTasks(updateTask);
  };

  // handle edit task
  const handleEditTask = (id) => {
    // Ngambil data yang mau di edit
    const editTask = tasks.find((task) => task.id === id);

    // isi form dengan data task
    setFormData(editTask);

    // tampilkan form
    setShowForm(true);

    // menyimpan data yang sudah di edit
    setEditingIndex(id);
  };

  // Handle Archive
  const handleArchiveTask = (id) => {
    const updateTasks = tasks.map((task) =>
      task.id === id ? { ...task, archived: true } : task
    );

    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  };

  return (
    <div>
      <nav className="navbar-content">
        <ul className="list-navbar">
          <li>
            <button className="btn btn-add" onClick={() => setShowForm(true)}>
              <span>+</span>
              Add Task
            </button>
          </li>
          {/* Filtered Component */}
          <FilteredComponent
            currentFilter={filter}
            onFilterChange={setFilter}
          />
        </ul>
      </nav>
      {/* Form Show */}
      {showForm && (
        <FormTask
          formData={formData}
          onChange={handleChange}
          onSave={handleSaveTask}
          onCancel={() => {
            setFormData({
              id: null,
              title: "",
              description: "",
              date: "",
              priority: "",
              archived: false,
            });
            setEditingIndex(null);
            setShowForm(false);
          }}
        />
      )}

      {/* Daftar List */}
      <section className="list-task-container">
        {tasks
          .filter((task) => {
            if (filter === "All") return true;
            return task.priority === filter;
          })
          .filter((task) => !task.archived)
          .map((item, index) => {
            return (
              <div className="task-item" key={index}>
                <main className="main-task">
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

                    <TaskActionsMenu
                      onEdit={() => handleEditTask(item.id)}
                      onArchive={() => handleArchiveTask(item.id)}
                      onDelete={() => handleDeleteTask(item.id)}
                    />
                  </section>
                  <h2 className="title-task">{item.title}</h2>
                  <p className="description-task">{item.description}</p>
                </main>
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
            );
          })}
      </section>
    </div>
  );
};

export default TaskComponent;
