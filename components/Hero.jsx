export default function Hero() {
  return (
    <section style={{
      padding: "80px 40px",
      backgroundColor: "#1DB954",
      color: "#000",
      minHeight: "60vh"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
        Listening is everything
      </h1>
      <p style={{ fontSize: "18px" }}>
        Millions of songs and podcasts. No credit card needed.
      </p>

      <button style={{
        marginTop: "24px",
        padding: "14px 28px",
        borderRadius: "30px",
        border: "none",
        backgroundColor: "#000",
        color: "#1DB954",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Get Spotify Free
      </button>
    </section>
  );
}
