import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function PayComponent() {
  const [friends, setFriends] = useState([]);
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const amount = searchParams.get("amount");

  const navigate = useNavigate()

  // Fetch data
  useEffect(() => {
    fetch("/contact.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.log(err));
  }, []);

  // Find selected friend
  const selectedFriend = friends.find((f) => f.id == id);

  // Loading state
  if (!selectedFriend) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }

  return (
    <div className="container w-50 mt-5">
      <div className="card p-3 shadow">
        {/* Friend Info */}
        <div className="d-flex align-items-center mb-3">
          <img
            src={`https://i.pravatar.cc/50?u=${selectedFriend.id}`}
            className="rounded-circle me-3"
            alt="avatar"
          />
          <h5 className="m-0">{selectedFriend.name}</h5>
        </div>

        {/* Amount */}
        <h4 className="fw-bold">Total Amount: ₹ {amount/2}</h4>

        {/* Split Info */}
        <p className="text-muted">
          You are splitting with <b>{selectedFriend.name}</b>
        </p>

        {/* Action Button */}
        <button className="btn btn-success mt-3" onClick={()=> navigate('/done')}>
          Confirm Split
        </button>
      </div>
    </div>
  );
}