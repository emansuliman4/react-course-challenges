export function List({ list, onRemove }) {
  return (
    <div className="list">
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "auto",
          gap: "10px",
          listStyle: "none",
        }}
      >
        {list.map((item) => (
          <li key={item.id}>
            {"("}
            {item.quantity} hr{")  "}
            {item.description}
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => onRemove(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
