export function Steps({ step, setStep }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="range"
          min={0}
          max={40}
          step={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p style={{ margin: "2px" }}>steps:{step}</p>
      </div>
    </div>
  );
}
