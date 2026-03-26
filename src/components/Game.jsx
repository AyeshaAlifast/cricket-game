import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Controls from "./Controls";
import PowerBar from "./PowerBar";
import Pitch from "./Pitch";
import { aggressiveProbabilities, defensiveProbabilities } from "../utils/probabilities";
import { getOutcomeFromSlider } from "../utils/gameLogic";

export default function Game() {
const [ballKey, setBallKey] = useState(0);
const [showBall, setShowBall] = useState(false);
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [style, setStyle] = useState("aggressive");
  const [resultText, setResultText] = useState("Choose a style and play a shot.");
  const [isBatting, setIsBatting] = useState(false);

  const probabilities =
    style === "aggressive"
      ? aggressiveProbabilities
      : defensiveProbabilities;

  const handleShot = (position) => {
  if (balls >= 12 || wickets >= 2) return;

  setBallKey((prev) => prev + 1);
  setShowBall(true);
  setResultText("Ball is coming...");

  const result = getOutcomeFromSlider(position, probabilities);

  setTimeout(() => {
    setIsBatting(true);

    if (result === "W") {
      setWickets((prev) => prev + 1);
      setResultText("Wicket!");
    } else {
      setRuns((prev) => prev + Number(result));
      setResultText(`${result} run${result === "1" ? "" : "s"} scored!`);
    }

    setBalls((prev) => prev + 1);
  }, 900);

  setTimeout(() => {
    setIsBatting(false);
    setShowBall(false);
  }, 1250);
};

  const restartGame = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setStyle("aggressive");
    setResultText("Choose a style and play a shot.");
    setIsBatting(false);
  };

  const isGameOver = balls >= 12 || wickets >= 2;

  return (
    <div className="game-wrapper">
      <div className="game-card">
        <h1 className="game-title">🏏 Cricket Game</h1>

        <Scoreboard runs={runs} wickets={wickets} balls={balls} />
        <Controls setStyle={setStyle} currentStyle={style} />

        {/* <Pitch isBatting={isBatting} resultText={resultText} /> */}
        <Pitch
  isBatting={isBatting}
  resultText={resultText}
  showBall={showBall}
  ballKey={ballKey}
/>
        {!isGameOver ? (
          <PowerBar probabilities={probabilities} onShot={handleShot} />
        ) : (
          <div className="game-over-box">
            <h2>Game Over</h2>
            <p>
              Final Score: {runs}/{wickets}
            </p>
            <p>
              Overs: {Math.floor(balls / 6)}.{balls % 6}
            </p>
            <button onClick={restartGame}>Restart Game</button>
          </div>
        )}
      </div>
    </div>
  );
}