export function List({ list, onRemove, onToggle, onClear, sortBy, setSortBy }) {
  let sortedItems = list;

  if (sortBy === "input") {
    sortedItems = list;
  } else if (sortBy === "completed") {
    sortedItems = [...list].sort((a, b) => a.completed - b.completed);
  } else if (sortBy === "hours") {
    sortedItems = [...list].sort((a, b) => a.quantity - b.quantity);
  }
  return (
    <div className="list">
      <ul className="ul">
        {sortedItems.map((item) => (
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
      <div className="sort">
        <form action="" className="sortrr">
          <select
            name=""
            id=""
            className="selectSort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort By Input Item</option>
            <option value="completed">Sort By completed</option>
            <option value="hours">Sort By hours</option>
          </select>
        </form>
        <button className="selectSort" onClick={onClear}>
          Clear List
        </button>
      </div>
    </div>
  );
}
