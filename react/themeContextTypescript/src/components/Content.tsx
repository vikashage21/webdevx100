import React, { useContext, type ReactNode } from "react";
import { themeContext } from "../App";

const Content = ({text} :{text:string}  ) => {
    const {theme , themeToggle} = useContext(themeContext)
  return (
    <>
      <div
        style={{
            height:"150px",
            textAlign:'center',
          backgroundColor: theme === "light" ? "#000" : "white",
        }}
      >
        <p
          style={{
            color: theme === "dark" ? "#000" : "#fff",
          }}
        >
          {
            text
          }
        </p>
      </div>

      <button onClick={themeToggle}>click</button>
    </>
  );
};

export default Content;
