import { Steps } from "./components/steps";
import { Counter } from "./components/counter";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Steps step={step} setStep={setStep} />
      <Counter count={count} setCount={setCount} step={step} />
    </div>
  );
}
export default App;
