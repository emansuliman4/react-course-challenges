import { TaskList, Form } from "./form.jsx";
export function List({ tasks }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100vh - 60px)",
        backgroundColor: "#62B6CB",
        display: "flex",
        flex: "1",
        padding: "10px",
        margin: "0",
        boxSizing: "border-box",
      }}
    >
      <TaskList tasks={tasks} />
    </div>
  );
}
