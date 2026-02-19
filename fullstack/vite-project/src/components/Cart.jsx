import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Lottie from "react-lottie-player";
import EmptyCart from "../assets/Empty Order.json";
import axios from 'axios'

const Cart = () => {
  const { cart } = useContext(ProductContext);
  const totalCost = cart.reduce((acc, curr) => Number(acc + curr.price), 0);
  if (cart.length == 0)
    return (
      <div className="font-bold flex flex-col justify-center mt-5 p-2">
        <h1 className="flex justify-center items-center  text-2xl font-bold">
          Your cart Empty 🥲 !{" "}
        </h1>
        <Lottie
          loop
          animationData={EmptyCart}
          play
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
    );

  // handel razorpay

  const handlePayment = async () => {
    const { data } = await axios.post(
      "http://localhost:8800/api/create-order",
      { amount: totalCost },
    );

    const options = {
      key: "rzp_test_SHZPwy7LEIegtd",
      amount: data.order.amount,
      currency: "INR",
      name: "Your Store",
      description: "Test Transaction",
      order_id: data.order.id,

      handler: async function (response) {
        console.log(response);
        alert("Payment Successful ✅");
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex  overflow-hidden flex-wrap justify-center items-center">
      {cart.map((items) => {
        return (
          <div
            key={`${Math.random() * 50000}`}
            className="p-5 text-center flex flex-col justify-center items-center border m-2 w-50 "
          >
            <img className="w-20" src={items.image} alt={items.title} />
            <h1 className="font-bold text-orange-400 m-5 ">{items.title}</h1>
            <span>$ {items.price}</span>
          </div>
        );
      })}
      <div className="flex flex-col justify-center items-center">
        <span>Total Price $ {Math.round(totalCost)}</span>
        <button
          onClick={handlePayment}
          className="w-50 bg-green-500 p-2 m-5 rounded text-white  hover:bg-green-700 "
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
