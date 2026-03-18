import React from "react";
import LoginComponent from "./components/login/login.component";
import CardComponent from "./components/card/card.component";
import DemoComponent from "./components/demo/demo.component";
import { ProductComponent } from "./components/filpkart/product.component";
import { CursorComponent } from "./components/cursor/cursor.component";
import { SpitComponent } from "./components/split/split.component";
import { Routes, Route } from "react-router";
import { PaymentComponnent } from "./components/payment/payment.component";
import { FreindComponent } from "./components/freinds/freinds.component";
import { FriendsComponent } from "./components/screen/freindSplitScreen/freinds.component";
import { PayComponent } from "./components/screen/pay/pay.component";
import { DoneComponent } from "./components/screen/done/done.component";

const App = () => {
  return (
    <>
      {/* <LoginComponent /> */}
      {/* <DemoComponent /> */}
      {/* <CardComponent /> */}

      {/* <ProductComponent /> */}
      {/* <CursorComponent /> */}
      {/* <SpitComponent /> */}

      <Routes>
        <Route path="/" element={<PaymentComponnent />}></Route>
        <Route path="/Add-Friend" element={<FriendsComponent />}></Route>
        <Route path="/pay/:id" element={<PayComponent />}></Route>
        <Route path="done" element={<DoneComponent/>}></Route>
      </Routes>
    </>
  );
};

export default App;
