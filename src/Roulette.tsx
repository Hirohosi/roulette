// src/Roulette.tsx
import React, { useState, useEffect } from "react";
import "./Roulette.css";
import { foodList } from "./constant";

interface Segment {
  label: string;
  color: string;
}

const getRandomFoods = (num: number): string[] => {
  const shuffled = [...foodList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Roulette: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [segments, setSegments] = useState<Segment[]>([]);

  useEffect(() => {
    const newLabels = getRandomFoods(6);
    const colors = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
    ];
    const newSegments = newLabels.map((label, index) => ({
      label,
      color: colors[index],
    }));
    setSegments(newSegments);
  }, []);

  const spin = () => {
    const randomDegree = Math.floor(Math.random() * 3600) + 360; // 3600度までのランダムな角度
    setRotation(rotation + randomDegree);
  };

  return (
    <>
      <div className="roulette-container">
        <div className="pointer"></div>
        <div
          className="roulette"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 3s ease-out",
          }} // 回転を一定速度に
        >
          {segments.map((segment, index) => (
            <div
              key={index}
              className="segment"
              style={{
                backgroundColor: segment.color,
                transform: `rotate(${index * 60}deg)`,
              }}
            >
              {segment.label}
            </div>
          ))}
        </div>
      </div>
      <button onClick={spin}>Spin</button>
    </>
  );
};

export default Roulette;
