import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { data , cart , setCart } = useContext(ProductContext);
  useEffect(() => {
    setItems(data);
  }, [data]);
  const singleProduct = items.find((item) => id == item._id?.toString());
  if (!singleProduct) return <Loader />;

  // creating add to cart funcationatiy 

  const handelCart = () =>{
  setCart((pre)=> [...pre , singleProduct])
  }

  return (
    <div className="p-5 text-center flex flex-col justify-center items-center">
      <img
        className="w-50"
        src={singleProduct.image}
        alt={singleProduct.title}
      />
      <h1 className="font-bold text-orange-400 m-5 ">{singleProduct.title}</h1>
      <span className="flex">
        <p className="bg-orange-300 p-2 rounded m-2">
          Stock: {singleProduct.stock}
        </p>
        <p className="bg-gray-300 p-2 rounded m-2">
          Rating: {singleProduct.rating.count}⭐⭐
        </p>
        <p className="bg-blue-300 p-2 rounded m-2">
          Category: {singleProduct.category}
        </p>
      </span>
      <div className="w-[50%]">
        <p>{singleProduct.description}</p>

        <button className="p-2 bg-sky-400 rounded m-2 w-50 hover:bg-sky-600" onClick={handelCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
