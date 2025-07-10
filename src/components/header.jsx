// import { List } from "./list";
// import { Form, TaskList } from "./form";
// import { useState } from "react";
// export function Header() {
//   const [tasks, setTasks] = useState([]);
//   return (
//     <div>
//       <h1
//         style={{
//           minHeight: "100px",
//           width: "100%",
//           backgroundColor: "#1B4965",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontFamily: "cursive",
//           padding: "0",
//           margin: "0",
//         }}
//       >
//         ✒️ TO DO LIST 📝
//       </h1>
//       <div
//         style={{
//           minHeight: "70px",
//           width: "100%",
//           backgroundColor: "#5FA8D3",
//           display: "flex",
//           alignItems: "center",
//           padding: "0",
//           margin: "0",
//           fontFamily: "Monoton",
//         }}
//       >
//         <h3 style={{ margin: "0 10px " }}>
//           What do you need for your new🤩 day?
//         </h3>
//         <Form tasks={tasks} setTasks={setTasks} />
//       </div>
//       <List tasks={tasks} />
//     </div>
//   );
// }
import "../styles/header.css";

export function Header() {
  return (
    <div className="header">
      <h1>📜 To Do List 🖋️ </h1>
    </div>
  );
}
