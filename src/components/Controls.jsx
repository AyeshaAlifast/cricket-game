export default function Controls({ setStyle, currentStyle }) {
  return (
    <div className="controls">
      <button
        className={currentStyle === "aggressive" ? "active-btn aggressive-btn" : "aggressive-btn"}
        onClick={() => setStyle("aggressive")}
      >
        Aggressive
      </button>

      <button
        className={currentStyle === "defensive" ? "active-btn defensive-btn" : "defensive-btn"}
        onClick={() => setStyle("defensive")}
      >
        Defensive
      </button>
    </div>
  );
}