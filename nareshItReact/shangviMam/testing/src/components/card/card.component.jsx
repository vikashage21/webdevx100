import { useEffect, useState } from "react";

function CardComponent() {
  const [color, setColor] = useState("red");

  const [product, setProduct] = useState([
    {
      title: "",
      rating: {
        rate: 0,
        review: 0,
      },
      price: 0,
      offers: [],
      image: "",
    },
  ]);

  function getData() {
    const http = new XMLHttpRequest();
    http.open("get", "product.json", true);
    http.send();

    http.onreadystatechange = function () {
      if (http.readyState == 4) {
        setProduct(JSON.parse(http.responseText));
      }
    };
  }

  useEffect(() => {
    getData();
  }, []);

  // function randomNumber() {
  //   let r = Math.floor(Math.random() * 255);
  //   let g = Math.floor(Math.random() * 255);
  //   let b = Math.floor(Math.random() * 255);
  //   return `rgb(${r},${g},${b})`;
  // }
  // const handelChangeColor = () => {
  //   setColor(randomNumber());
  // };
  return (
    <>
      {product.map((product) => {
        return (
          <div className="container mt-5 w-50 border p-5 shadow">
            <div className="row " >
              <div className="col-3">
                <img src={product.image} className="img-fluid " />
              </div>
              <div className="col-9">
                <h3 className="text-black p-2">{product?.title}</h3>
                <p className="">
                  <span className="bi bi-star-fill m-2 badge bg-success">
                    {" "}
                    {product?.rating?.rate}
                  </span>
                </p>

                <p className="bi bi-star-fill m-2 badge bg-success text-warning">
                  {" "}
                  {product?.rating?.review}
                </p>
                <p>
                  {product?.price.toLocaleString("en-in", {
                    style: "currency",
                    currency: "INR",
                  })}
                </p>

                {/* <button onClick={handelChangeColor}>change</button> */}

                {product?.offers.map((items, index) => (
                  <li
                    key={index}
                    className="list-unstyled bi bi-tag-fill text-success"
                  >
                    <span
                      className="text-black
             "
                    >
                      {items}
                    </span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardComponent;
