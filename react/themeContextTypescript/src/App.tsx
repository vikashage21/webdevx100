import React, { useContext } from "react";
import { createContext, useState } from "react";
import "./App.css";
import Content from "./components/Content";

type colorTheme = "light" | "dark";

interface themeType {
  theme: colorTheme;
  themeToggle: () => void;
}

// creating a context

export const themeContext = createContext<themeType>({
  theme: "light",
  themeToggle: () => {},
});

function App() {
  const [themes, setTheme] = useState<colorTheme>("light");

  const themeToggle = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider
      value={{
        theme: themes,
        themeToggle,
      }}
    >
      
      <Content text={"this is props"}/>
    </themeContext.Provider>
  );
}

export default App;
