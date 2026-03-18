import { useState } from "react";

export function FreindComponent({ handelFreind }) {
  const [data, setData] = useState("");

  const handelInput = (e) => {
    setData(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!data.trim()) return;

    // ✅ send data to parent
    handelFreind({
      name: data,
      amount: 0
    });

    setData(""); // clear input
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={data}
            onChange={handelInput}
            placeholder="Enter friend name"
          />
          <button className="btn btn-dark mt-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}