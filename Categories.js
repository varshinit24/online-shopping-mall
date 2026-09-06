function Categories({ setCategory }) {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-container">

        <div
          className="category-card"
          onClick={() => setCategory("All")}
        >
          🛍️
          <h3>All</h3>
        </div>

        <div
          className="category-card"
          onClick={() => setCategory("Electronics")}
        >
          📱
          <h3>Electronics</h3>
        </div>

        <div
          className="category-card"
          onClick={() => setCategory("Fashion")}
        >
          👟
          <h3>Fashion</h3>
        </div>

        <div
          className="category-card"
          onClick={() => setCategory("Accessories")}
        >
          ⌚
          <h3>Accessories</h3>
        </div>

        <div
          className="category-card"
          onClick={() => setCategory("Bags")}
        >
          🎒
          <h3>Bags</h3>
        </div>

      </div>
    </section>
  );
}

export default Categories;