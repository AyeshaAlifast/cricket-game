export default function Pitch({ isBatting, resultText, showBall, ballKey }) {
  return (
    <div className="pitch">
      <div className="sky"></div>
      <div className="stands"></div>
      <div className="field"></div>
      <div className="pitch-strip"></div>

      <div className="stumps left-stumps">|||</div>
      <div className="stumps right-stumps">|||</div>

      <div className={`batsman ${isBatting ? "batting" : ""}`}>🏏</div>

      {showBall && <div key={ballKey} className="ball-animation"></div>}

      <div className="result-banner">{resultText}</div>
    </div>
  );
}