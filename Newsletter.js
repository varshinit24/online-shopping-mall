import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("❌ Please enter your email.");
      return;
    }

    alert("🎉 Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>

      <p>Get the latest offers and updates.</p>

      <input
        type="email"
        placeholder="Enter your email"
        className="newsletter-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubscribe}>
        Subscribe
      </button>
    </section>
  );
}

export default Newsletter;