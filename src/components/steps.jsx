// import { useState } from "react";
import { Button } from "./button";
export function Steps({ step, setStep }) {
  //   const [step, setStep] = useState(1);
  //   function nextStep() {
  //     setStep((count) => count + 1);
  //   }
  //   function previousStep() {
  //     setStep((count) => count - 1);
  //   }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          label={"-"}
          onClick={() => {
            step < 2 ? "" : setStep((c) => c - 1);
          }}
        />
        {/* <input type="range" min={0} max={100} step={2} /> */}
        <p style={{ margin: "2px" }}>steps:{step}</p>
        <Button
          label={"+"}
          onClick={() => {
            setStep((c) => c + 1);
          }}
        />
      </div>
    </div>
  );
}
