import { useEffect, useState } from "react";
import { FreindComponent } from "../freinds/freinds.component";

export function BillComponent() {
  const [data, setData] = useState([]);

  // Fetching data from bills.json
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/bills.json"); // ✅ correct path
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []); // ✅ run only once

  const handelFreind = (newFriend) => {
    setData((prev) => [...prev, newFriend]);
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Bills List */}
        <div className="col-3">
          {data.map((user, index) => {
            const { name, amount } = user;

            return (
              <div className="card mb-4" key={index}>
                <div className="card-header">Pay</div>

                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <span className="bi bi-person me-2"></span>
                          {name}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>₹ {amount}</td>
                      </tr>
                    </tbody>
                  </table>

                  <button className="btn btn-primary">Split</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Friend Component */}
        <div className="col-3">
          <FreindComponent  handelFreind ={handelFreind} />
        </div>
      </div>
    </div>
  );
}
