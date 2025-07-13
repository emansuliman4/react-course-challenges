import { useState } from "react";
import "../styles/body.css";

export function Form({ onAdd }) {
  // Add onAdd prop
  const [hour, setHour] = useState(1);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;

    const newItem = {
      quantity: hour,
      description: task,
      completed: false,
      id: Date.now(),
    };

    onAdd(newItem);
    setHour(1);
    setTask("");
  }

  return (
    <div className="form">
      <span className="span">What is your future plan🤩? </span>
      <form onSubmit={handleSubmit} className="form">
        <select
          style={{ textAlign: "center" }}
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          className="select"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Type your new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
}
