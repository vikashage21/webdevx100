import { Link } from "react-router-dom";

export function DoneComponent() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center p-4 shadow-lg" style={{ width: "350px" }}>
        
        {/* Success Icon */}
        <div className="mb-3">
          <span className="bi bi-check-circle-fill text-success" style={{ fontSize: "60px" }}></span>
        </div>

        {/* Title */}
        <h4 className="fw-bold text-success">Payment Successful</h4>

        {/* Message */}
        <p className="text-muted">
          Your bill has been successfully split with your friend 🎉
        </p>

        {/* Divider */}
        <hr />

        {/* Button */}
        <Link to="/" className="btn btn-success w-100">
          Go to Home
        </Link>
      </div>
    </div>
  );
}