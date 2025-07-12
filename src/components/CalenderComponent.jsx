import { useState, useEffect } from "react";
import "../style/calender.css";

const CalenderComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Hitung hari dalam bulan
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Hari petama bulan
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday/ minggu

  // Navigasi bulan
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Buat array tanggal
  const dates = [];
  for (let i = 0; i < firstDay; i++) {
    dates.push(null); // kosong sebelum tanggal 1
  }

  for (let d = 1; d <= daysInMonth; d++) {
    dates.push(d);
  }

  return (
    <section className="calender container-calender">
      <div className="calendar-header">
        <button onClick={prevMonth}>Prev</button>
        <span>
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button onClick={nextMonth}>Next</button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div className="calendar-day-name" key={day}>
            {day}
          </div>
        ))}

        {dates.map((date, index) => (
          <div
            key={index}
            className={`calendar-cell ${
              date === selectedDate ? "selected" : ""
            }`}
            onClick={() => date && setSelectedDate(date)}
          >
            {date || ""}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div>
          <p className="calendar-selected">
            Selected date: {selectedDate} {monthNames[currentMonth]}{" "}
            {currentYear}
          </p>
          <span className="calender-activity">Activity:</span>
          <ul className="activity-list">
            {tasks
              .filter((task) => {
                if (!task.date) return false;
                const taskDate = new Date(task.date);
                return (
                  taskDate.getDate() === selectedDate &&
                  taskDate.getMonth() === currentMonth &&
                  taskDate.getFullYear() === currentYear
                );
              })
              .map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CalenderComponent;
