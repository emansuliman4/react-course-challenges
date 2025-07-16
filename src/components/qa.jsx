import React, { useState } from "react";
import faqs from "../faqs.json";
import "../styles/qa.css";

export function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className={`item${openIndex === idx ? " open" : ""}`}
          onClick={() => handleToggle(idx)}
        >
          <span className="number">{idx + 1}</span>
          <h1 className="title">{faq.title}</h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggle(idx);
            }}
            className="icon"
          >
            {openIndex === idx ? "-" : "+"}
          </button>
          {openIndex === idx && (
            <div className="content-box">
              <p>{faq.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
