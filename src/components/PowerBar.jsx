import { useEffect, useRef, useState } from "react";

const colors = {
  W: "#d62828",
  0: "#6c757d",
  1: "#3a86ff",
  2: "#8338ec",
  3: "#ff006e",
  4: "#ff9f1c",
  6: "#2a9d8f"
};

export default function PowerBar({ probabilities, onShot }) {
  const [position, setPosition] = useState(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let next = prev + 0.005 * directionRef.current;

        if (next >= 1) {
          next = 1;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "40px",
          width: "100%",
          border: "2px solid white",
          overflow: "hidden"
        }}
      >
        {probabilities.map((p, i) => (
          <div
            key={i}
            style={{
              width: `${p.prob * 100}%`,
              background: colors[p.label],
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold"
            }}
          >
            {p.label}
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            left: `calc(${position * 100}% - 2px)`,
            top: 0,
            width: "4px",
            height: "100%",
            background: "white"
          }}
        />
      </div>

      <h3 style={{ marginTop: "20px" }}>Slider: {position.toFixed(2)}</h3>

     <button className="play-shot-btn" onClick={() => onShot(position)}>
  Play Shot
</button>
    </div>
  );
}