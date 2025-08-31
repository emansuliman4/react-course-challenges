import React, { useState } from "react";

export function TextExpander({
  text,
  maxLength = 100,
  color,
  expandButtonText,
  collapseButtonText,
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {isExpanded ? text : ` ${text.slice(0, maxLength)}...`}
        <button onClick={() => setIsExpanded(!isExpanded)} style={{ color }}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}
