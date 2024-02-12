// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["Bengaluru", "Mandya", "Mysore", "Bidadi", "Ramanagara"];

  // handling event
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Conditional Rendering */}
        {items.length == 0 && <p>No items found</p>}

        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
