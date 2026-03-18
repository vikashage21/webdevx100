import { useState } from "react";
import { Link } from "react-router-dom";

export function PaymentInputComponent() {
  const [payments] = useState([
    {
      id: 1,
      title: "Food Restaurant",
      amount: 1000,
      date: new Date(),
      logo: "https://www.designmantic.com/logo-images/15581.png",
    },
    {
      id: 2,
      title: "Cafe Coffee",
      amount: 500,
      date: new Date(),
      logo: "https://www.designmantic.com/logo-images/15581.png",
    },
    {
      id: 3,
      title: "Dominos Pizza",
      amount: 750,
      date: new Date(),
      logo: "https://www.designmantic.com/logo-images/15581.png",
    },
  ]);

  return (
    <div className="container w-50 mt-5">
      {payments.map((payment) => {
        const formattedDate = new Date(payment.date).toLocaleDateString(
          "en-IN",
          {
            day: "numeric",
            month: "short",
            year: "numeric",
          }
        );

        return (
          <div key={payment.id} className="card p-3 shadow-sm mb-3">
            {/* Logo */}
            <img
              className="mb-2 rounded-circle"
              width="50"
              src={payment.logo}
              alt="logo"
            />

            {/* Title */}
            <p className="text-info fw-bold mb-1">{payment.title}</p>

            {/* Amount */}
            <h4 className="fw-bold">₹ {payment.amount}</h4>

            {/* Status + Date */}
            <p className="mb-2">
              <span className="bi bi-check-circle-fill text-success me-2">
                Completed
              </span>
              <span className="text-muted">{formattedDate}</span>
            </p>

            {/* Link */}
            <Link
              to={`/add-friend?amount=${payment.amount}`}
              className="text-primary text-decoration-none border rounded text-center p-2 d-block"
            >
              Split with your friends
            </Link>
          </div>
        );
      })}
    </div>
  );
}