import React from "react";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, loading } = useContext(ProductContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(data);
  }, [data]);

  if (loading) return <Loader></Loader>;

  return (
    <div className="container">
      {data.map((items) => (
        <Link to={`/products/${items._id}`} key={items._id}>
          <div className="card hover:bg-blue-100">
            <img src={items.image} alt={items.title} />
            <h2>
              {items.title.length > 30
                ? items.title.slice(0, 20) + "..."
                : items.title}
            </h2>
            <h2>${items.price}</h2>
            {/* <p>{items.description}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
