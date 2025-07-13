import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { List } from "./components/list";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  function handleRemove(id) {
    setList((list) => list.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, complated: !item.complated } : item
      )
    );
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Form onAdd={(item) => setList((list) => [...list, item])} />
      <List list={list} onRemove={handleRemove} onToggle={handleToggle} />
      <Footer />
    </div>
  );
}

export default App;
