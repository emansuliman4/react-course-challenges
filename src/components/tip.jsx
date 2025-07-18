import { useState } from "react";

export function Tip() {
  const [input, setInput] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleReset() {
    setInput("");
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <form>
        <div>
          <span>How much was the bill?</span>
          <input
            type="text"
            placeholder="Bill Value "
            value={input}
            onChange={handleChange}
          />
        </div>
      </form>
      <Service select={yourTip} setSelect={setYourTip}>
        How did you like the service?
      </Service>
      <Service select={friendTip} setSelect={setFriendTip}>
        How did your friend like the service?
      </Service>
      <h2>
        You pay {Number(input) + Number((+yourTip + +friendTip) / 2)}$ ({input}$
        + {Number((+yourTip + +friendTip) / 2)} tip)
      </h2>
      <button onClick={handleReset}>Rest</button>
    </div>
  );
}

function Service({ children, select, setSelect }) {
  return (
    <div>
      <div>
        <span>{children}</span>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
}
