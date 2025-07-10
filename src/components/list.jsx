export function List({ list }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.quantity} hr{" => "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
