import { Steps } from "./components/steps";
import { Counter } from "./components/counter";
import { Button } from "./components/button";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function Reset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div>
      <Steps step={step} setStep={setStep} />
      <Counter count={count} setCount={setCount} step={step} />
      {count !== 0 || step !== 0 ? (
        <Button label={"Reset"} onClick={Reset} />
      ) : null}
    </div>
  );
}
export default App;
