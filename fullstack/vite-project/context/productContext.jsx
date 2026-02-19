import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // getting data from backend and sharing the data to all the components using context api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart , setCart] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8800/products");

      setData(res.data.products);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ data, setData, loading , cart , setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
