import { useEffect, useState } from "react";
import './product.component.css'
export function ProductComponent() {
  const [product, setProduct] = useState([]);
  const [preview, setPreview] = useState({
    image_src: "m1.jpg",
  });
  // setting the data

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("items.json");
      const data = await res.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  const handleMouseOver = (e) => {
    setPreview({
      image_src: e.target.src,
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            {product.map((items) => {
              return (
                <img
                  className="mt-5 ms-5 "
                  key={items.image_src}
                  src={items.image_src}
                  width={100}
                  alt="product"
                  onMouseOver={handleMouseOver}
                />
              );
            })}
          </div>
          <div className="col-9">
            <img
              src={preview.image_src}
              width={"80%"}
              className="mt-5"
              alt="product"
            />
          </div>
        </div>
      </div>
    </>
  );
}
