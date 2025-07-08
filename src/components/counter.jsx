// import { useState } from "react";
import { Button } from "./button";
export function Counter({ count, setCount, step }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          label={"-"}
          onClick={() => {
            setCount((c) => c - step);
          }}
        />
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <Button
          label={"+"}
          onClick={() => {
            setCount((c) => c + step);
          }}
        />
      </div>
      <p>
        {count === 0 ? (
          <span>Today is {date.toDateString()}</span>
        ) : count > 0 ? (
          <span>
            {count} days ago was {date.toDateString()}
          </span>
        ) : (
          <span>
            {count} days from today is {date.toDateString()}
          </span>
        )}
      </p>
    </div>
  );
}
