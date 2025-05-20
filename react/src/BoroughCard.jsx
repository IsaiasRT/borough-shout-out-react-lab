const boroughEmojis = {
  Brooklyn: "🌉",
  Manhattan: "🏙️",
  Queens: "🏡",
  Bronx: "🏆",
  "Staten Island": "🌊", // Ensure exact match for key
};

function BoroughCard({ borough = "Queens", bgColor }) {
  return (
    <div className="borough-card" style={{ backgroundColor: bgColor }}>
      <h2>Hello from {borough}! {boroughEmojis[borough] || "❓"}</h2>
    </div>
  );
}

export default BoroughCard