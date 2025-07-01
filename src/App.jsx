import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function StepPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function StepNext() {
    setStep((s) => s + 1);
    // setStep(step + 1);
  }

  function CountPrevious() {
    setCount((c) => c - step);
  }

  function CountNext() {
    setCount((c) => c + step);
  }

  const date = new Date();
  date.setDate(date.getاDate() + count);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button onClick={StepPrevious}>-</button>
        <span>step: {step}</span>
        <button onClick={StepNext}>+</button>
      </div>

      <p>
        n<button onClick={CountPrevious}>-</button>
        <span>count: {count}</span>
        <button onClick={CountNext}>+</button>
      </p>

      <p>
        {count < 0 ? (
          <span>
            {count} days ago was {date.toDateString()}
            {/* ## toLocalDateString =just 12/1/2025 */}
          </span>
        ) : count === 0 ? (
          <span>Today is {date.toDateString()}</span>
        ) : (
          <span>
            {count} days from today is {date.toDateString()}
          </span>
        )}
      </p>
    </div>
  );
}

export default App;
