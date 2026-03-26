export default function Scoreboard({ runs, wickets, balls }) {
  return (
    <div className="scoreboard">
      <div className="score-box">
        <span>Runs</span>
        <strong>{runs}</strong>
      </div>

      <div className="score-box">
        <span>Wickets</span>
        <strong>{wickets}</strong>
      </div>

      <div className="score-box">
        <span>Overs</span>
        <strong>
          {Math.floor(balls / 6)}.{balls % 6}
        </strong>
      </div>

      <div className="score-box">
        <span>Balls Left</span>
        <strong>{12 - balls}</strong>
      </div>
    </div>
  );
}