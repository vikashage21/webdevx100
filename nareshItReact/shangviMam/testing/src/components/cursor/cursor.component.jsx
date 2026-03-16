import { useState } from "react";

export function CursorComponent() {
  const [styleObj, setStyleObj] = useState({
    position: "",
    left: "",
    top: "",
  });

  const handleMouseMove = (e) => {
    setStyleObj({
      position: "fixed",
      left: `${e.clientX}` + "px",
      top: `${e.clientY}` + "px",
    });
  };
  return (
    <> 
      <div className="container-fluid"
        onMouseMove={handleMouseMove}
        style={{
          width: "100%",
          height: "100vh",
          padding:'10px',
        }}
      >
        <div className="w-5  " style={styleObj}>
          product
        </div>
      </div>
    </>
  );
}
