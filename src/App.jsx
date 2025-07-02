import Header from "./components/header";
import Footer from "./components/footer";
import { List } from "./components/list";
import "./App.css";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
