// src/Roulette.tsx
import React, { useState } from "react";
import "./Roulette.css";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
];

const Roulette: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [angle, setAngle] = useState(0);

  const spin = () => {
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * options.length);
    const newAngle = angle + 360 * 3 + (360 / options.length) * randomIndex;
    setAngle(newAngle);
    setTimeout(() => {
      setSpinning(false);
      setSelectedOption(options[randomIndex]);
    }, 3000); // Spin duration
  };

  return (
    <div className="roulette">
      <div className="wheel-container">
        <div
          className={`wheel ${spinning ? "spinning" : ""}`}
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="segment"
              style={{
                transform: `rotate(${index * (360 / options.length)}deg)`,
              }}
            >
              <div className="segment-label">{option}</div>
            </div>
          ))}
        </div>
        <div className="pointer"></div>
      </div>
      <button onClick={spin} disabled={spinning}>
        Spin
      </button>
      {selectedOption && (
        <div className="result">You got: {selectedOption}</div>
      )}
    </div>
  );
};

export default Roulette;
