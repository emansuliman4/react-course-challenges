export function List({ list, onRemove, onToggle }) {
  return (
    <div className="list">
      <ul className="ul">
        {list.map((item) => (
          <li key={item.id} className="tasks">
            <input
              type="checkbox"
              className="checkbox"
              checked={item.completed}
              onChange={() => onToggle(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {"("}
              {item.quantity} hr{")  "}
              {item.description}{" "}
            </span>
            <button className="remove" onClick={() => onRemove(item.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
