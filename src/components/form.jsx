import { useState } from "react";
export default function Form() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
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
