import React from "react";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState("");
  const [list, setList] = useState([]);

  const handleAddElement = () => {
    setList([...list, items]);
    setItems("");
  };

  return (
    <div>
      <input
        placeholder="add elements"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />

      <button onClick={handleAddElement}>add</button>

      {list.map((e, index) => {
        return (
          <>
            <div>
              <p>
                {e}
                <button
                  onClick={() => setList(list.filter((_, i) => i !== index))}
                >
                  delete
                </button>
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
