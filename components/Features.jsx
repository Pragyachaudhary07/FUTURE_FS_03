export default function Features() {
  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "32px" }}>
        Why Spotify?
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "24px"
      }}>
        <div>
          <h3>🎧 Play your favorites</h3>
          <p>Listen to the songs you love and discover new music.</p>
        </div>

        <div>
          <h3>📶 Offline listening</h3>
          <p>Save your data by listening offline.</p>
        </div>

        <div>
          <h3>🔍 Discover new music</h3>
          <p>Get playlists made just for you.</p>
        </div>

        <div>
          <h3>📱 Any device</h3>
          <p>Mobile, tablet, desktop — Spotify works everywhere.</p>
        </div>
      </div>
    </section>
  );
}
