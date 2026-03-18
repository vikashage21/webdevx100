import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSearchParams } from "react-router";
export function FriendsComponent() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  console.log(amount);

  useEffect(() => {
    fetch("/contact.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // 🔍 Filter logic
  const filterFriends = data.filter((frd) =>
    frd.name.toLowerCase().includes(search.toLowerCase()),
  );

  // ✅ Select logic
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="container-fluid p-3">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <span className="bi bi-arrow-bar-left fs-5 me-2"></span>
        <p className="text-dark fw-bold m-0">Who's splitting with you?</p>
      </div>

      {/* Search */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="border rounded d-flex align-items-center px-2 py-1 w-50">
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="bi bi-search text-muted ms-2"></span>
        </div>
      </form>

      {/* Friends List */}
      {filterFriends.length === 0 ? (
        <p className="text-danger mt-3">No friends found ❌</p>
      ) : (
        filterFriends.map((friend) => (
          <div
            key={friend.id}
            className={`d-flex align-items-center justify-content-between border rounded p-2 mb-2 mt-2 ${
              selectedId === friend.id ? "bg-light" : ""
            }`}
          >
            {/* Left */}
            <div className="d-flex align-items-center">
              <img
                src={`https://i.pravatar.cc/40?u=${friend.id}`}
                alt="avatar"
                className="rounded-circle me-2"
              />
              <span className="fw-semibold">{friend.name}</span>
            </div>

            {/* Right */}
            <button
              className={`btn btn-sm ${
                selectedId === friend.id ? "btn-success" : "btn-outline-primary"
              }`}
              onClick={() => handleSelect(friend.id)}
            >
              {selectedId === friend.id ? "Selected" : "Select"}
            </button>
          </div>
        ))
      )}
      {selectedId && (
        <Link to={`/pay/${selectedId}?amount=${amount}`}>
          <button className="btn btn-success">split</button>
        </Link>
      )}
    </div>
  );
}
