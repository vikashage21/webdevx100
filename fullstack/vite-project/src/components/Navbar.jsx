import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Navbar = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div className="flex bg-blue-600 font-bold justify-between">
      <div className="font-bold text-xl text-white m-2 ">shopHart 🛒</div>
      <ul className="flex m-2 gap-2">
        <Link to="/cart">
          <span className="  text-white ">
            👜
            <span className={cart.length == 0  ? "border rounded-full w-[50%]" : "border bg-red-600 rounded-full w-[50%]"}>
              {" "}
              {cart.length}
            </span>
          </span>
        </Link>
        <Link to={"/login"} className="bg-blue-800 text-white p-2 rounded-sm">
          login
        </Link>
        <Link
          to={"/signup"}
          className="bg-orange-400 text-black p-2 rounded-sm"
        >
          signup
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
