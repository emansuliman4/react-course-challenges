import { Header } from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Footer />
    </div>
  );
}

export default App;
