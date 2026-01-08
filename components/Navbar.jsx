export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      backgroundColor: "#000",
      color: "#fff"
    }}>
      <h1 style={{ color: "#1DB954" }}>Spotify</h1>

      <ul style={{
        display: "flex",
        listStyle: "none",
        gap: "20px"
      }}>
        <li>Premium</li>
        <li>Support</li>
        <li>Download</li>
      </ul>
    </nav>
  );
}
