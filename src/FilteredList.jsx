import { useMemo } from "react";

export default function FilteredList() {
  const list = [
    {
      id: 1,
      name: "Flavius",
      age: 26,
    },
    {
      id: 2,
      name: "Mikolaj",
      age: 33,
    },
    {
      id: 3,
      name: "Mathias",
      age: 15,
    },
    {
      id: 4,
      name: "Karimi",
      age: 12,
    },
  ];
  function filteredList() {
    return list.filter((item) => item.age > 18);
  }
  const result = useMemo(() => filteredList(), [list]);

  return (
    <div>
      {result.map((item) => {
        return (
          <div>
            <h1>.{item.id}</h1>
            <h1>name: {item.name}</h1>
            <h1>age: {item.age}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
