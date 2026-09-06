import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";

function Products({
  addToCart,
  addToWishlist,
  search,
  category,
  sortBy,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  let filteredProducts = [...products].filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">
        {filteredProducts.length === 0 ? (
          <h3>No products found.</h3>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <button
                onClick={() => addToWishlist(product)}
                style={{
                  fontSize: "24px",
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                  float: "right",
                }}
              >
                🤍
              </button>

              <Link
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>₹{product.price}</p>

                <p>⭐⭐⭐⭐⭐ {product.rating}</p>

                <p
                  style={{
                    color: product.stock ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {product.stock
                    ? "✅ In Stock"
                    : "❌ Out of Stock"}
                </p>
              </Link>

              <button
                onClick={() => addToCart(product)}
                disabled={!product.stock}
              >
                🛒 Add to Cart
              </button>

            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Products;