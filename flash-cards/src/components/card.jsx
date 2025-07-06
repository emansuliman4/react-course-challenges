import { useState } from "react";

export const questions = [
  {
    question:
      "What is the difference between let, const, and var in JavaScript?",
    answer:
      "var is function-scoped and can be redeclared; let is block-scoped and can be reassigned; const is block-scoped and cannot be reassigned.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is when an inner function has access to its outer function's variables even after the outer function has finished executing.",
  },
  {
    question: "What is the DOM in JavaScript?",
    answer:
      "The Document Object Model (DOM) represents the structure of a web page, allowing JavaScript to access and manipulate HTML and CSS.",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answer:
      "'this' refers to the object that is executing the current function. Its value depends on how the function is called.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== checks for equality with type coercion; === checks for strict equality without type coercion.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.",
  },
  {
    question: "What is an event listener in JavaScript?",
    answer:
      "An event listener is a function that waits for a specific event (like click or keypress) to occur and then executes code in response.",
  },
  {
    question: "What is the purpose of promises in JavaScript?",
    answer:
      "Promises handle asynchronous operations, allowing code to execute when the operation completes or fails without blocking execution.",
  },
  {
    question: "How do you create an object in JavaScript?",
    answer:
      "You can create an object using object literal syntax: const obj = { key: value }, or using constructors/classes.",
  },
  {
    question: "What is an array in JavaScript?",
    answer:
      "An array is a data structure that stores an ordered list of values, accessible by index, using square brackets [].",
  },
];

export function Card({ question, answer }) {
  const [flipped, setFlipped] = useState();

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <div>
      <div
        onClick={handleFlip}
        style={{
          width: "300px",
          height: "200px",
          margin: "10px auto",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "18px",
          textAlign: "center",
          transition: "transform 0.5s",
          transform: flipped ? "rotateY(360deg)" : "rotateY(0deg)",
        }}
      >
        {flipped ? answer : question}
      </div>
    </div>
  );
}

export function FlashCard({ questions }) {
  return (
    <div>
      {questions.map((e, index) => (
        <Card key={index} question={e.question} answer={e.answer} />
      ))}
    </div>
  );
}
