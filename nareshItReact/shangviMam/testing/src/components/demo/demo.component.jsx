import { useState } from "react";

function DemoComponent() {
  //  defining the state

  const [styleObj, setStyleObj] = useState({
    color: "black",
  });

  const handleMouseOver = (e) => {
    setStyleObj({
      color: e.target.id,
    });
  };

  const handelMouseOut = () => {
    setStyleObj({
      color: "black",
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div
          onMouseOver={handleMouseOver}
          id="red"
          style={{ backgroundColor: "red" }}
        >
          red
        </div>
        <div
          onMouseOver={handleMouseOver}
          style={{ backgroundColor: "blue" }}
          id="blue"
        >
          blue
        </div>
        <div
          onMouseOver={handleMouseOver}
          id="green"
          style={{ backgroundColor: "green" }}
        >
          green
        </div>

        <h1 style={styleObj} onMouseOut={handelMouseOut}>
          sample text
        </h1>
      </div>
    </>
  );
}

export default DemoComponent;
