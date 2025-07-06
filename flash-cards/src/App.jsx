import { FlashCard, questions } from "./components/card";
import "./App.css";

function App() {
  return (
    <>
      <FlashCard questions={questions} />
    </>
  );
}

export default App;
