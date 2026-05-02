"use client";

import { useEffect, useState } from "react";

type Cell = {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  rotate: number;
};

const COUNT = 18;

export default function HeroCells() {
  const [cells, setCells] = useState<Cell[]>([]);

  useEffect(() => {
    const next: Cell[] = Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      size: 30 + Math.random() * 80,
      left: Math.random() * 100,
      top: 10 + Math.random() * 80,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      rotate: Math.random() * 30 - 15,
    }));
    setCells(next);
  }, []);

  return (
    <div className="hero-cells" id="heroCells">
      {cells.map((c) => {
        const gradId = `floatCellGrad-${c.id}`;
        return (
          <div
            key={c.id}
            className="rbc-float"
            style={{
              left: `${c.left}%`,
              top: `${c.top}%`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              transform: `rotate(${c.rotate}deg)`,
            }}
          >
            <svg
              width={c.size}
              height={c.size * 0.65}
              viewBox="0 0 80 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="40" cy="26" rx="38" ry="24" fill={`url(#${gradId})`} />
              <ellipse cx="40" cy="26" rx="16" ry="9" fill="rgba(20,3,10,0.35)" />
              <defs>
                <radialGradient id={gradId} cx="40%" cy="38%" r="60%" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C46F84" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3D0D1E" stopOpacity="0.4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        );
      })}
    </div>
  );
}
