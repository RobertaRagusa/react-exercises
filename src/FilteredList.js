import { useMemo } from "react";

export function FilteredList() {
  const items = [
    { id: 1, name: "Tizio", age: 18 },
    { id: 2, name: "Caio", age: 30 },
    { id: 3, name: "Sempronio", age: 45 },
  ];

  const itemsMemo = useMemo(
    () => items.filter((item) => item.age > 18),
    [items]
  );

  return (
    <div>
      <h3>Filtered List</h3>
      <ul>
        {itemsMemo.map((item, index) => (
          <li key={index}>
            ID: {item.id} - NAME: {item.name} - AGE: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
