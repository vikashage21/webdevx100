import React from "react";
import LoginComponent from "./components/login/login.component";
import CardComponent from "./components/card/card.component";
import DemoComponent from "./components/demo/demo.component";
import { ProductComponent } from "./components/filpkart/product.component";
import { CursorComponent } from "./components/cursor/cursor.component";

const App = () => {
  return (
    <>
      {/* <LoginComponent /> */}
      {/* <DemoComponent /> */}
      {/* <CardComponent /> */}

      <ProductComponent />
      <CursorComponent />
    </>
  );
};

export default App;
