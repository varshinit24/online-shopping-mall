import { Link, useNavigate } from "react-router-dom";

function Navbar({
  search,
  setSearch,
  darkMode,
  setDarkMode,
}) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  function handleLogout() {
    localStorage.removeItem("loggedInUser");

    alert("👋 Logged Out Successfully!");

    navigate("/login");

    window.location.reload();
  }

  return (
    <header className="navbar">
      <h2 className="logo">🛒 Online Shopping Mall</h2>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/">Categories</Link>

        <input
          type="text"
          placeholder="🔍 Search Products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/cart">🛒 Cart</Link>

        <Link to="/wishlist">❤️ Wishlist</Link>

        <Link to="/orders">📦 Orders</Link>

        <Link to="/profile">👤 Profile</Link>

        <Link to="/admin">👨‍💼 Admin</Link>

        {user ? (
          <>
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              👋 Welcome, {user.name}
            </span>

            <button
              onClick={handleLogout}
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginLeft: "10px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: "#333",
            color: "white",
          }}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;