import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { List } from "./components/list";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Form onAdd={(item) => setList((list) => [...list, item])} />
      <List list={list} />
      <Footer />
    </div>
  );
}

export default App;
