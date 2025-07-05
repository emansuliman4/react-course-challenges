import { useState } from "react";
export function Form({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    const newTask = {
      text: task,
      hour: hour,
      id: Date.now(),
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setHour(1);
  }
  return (
    <div>
      <form
        style={{
          display: "flex",
          height: "30px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            border: "1px solid black",
            borderRadius: "20%",
            minHeight: "30px",
            background: "#CAE9FF",
          }}
          placeholder="Type your task..."
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          style={{
            margin: "0 20px",
            border: "1px solid black",
            borderRadius: "20%",
            background: "#CAE9FF",
          }}
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button
          type="submit"
          style={{
            border: "1px solid black",
            borderRadius: "20%",
            minWidth: "60px",
            background: "#CAE9FF",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
export function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.text} - {t.hour} hour(s)
        </li>
      ))}
    </ul>
  );
}
