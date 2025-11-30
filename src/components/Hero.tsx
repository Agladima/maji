"use client";

import React, { useMemo } from "react";

export default function Hero() {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
      });
    }
    return arr;
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, #123B7A 0%, #0D2F5A 40%, #0A1B3A 100%)",
        }}
      />

      {/* Clouds */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/8 blur-[90px] rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/6 blur-[80px] rounded-full"></div>
      </div>

      {/* Stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
          }}
        ></span>
      ))}

      {/* Content */}
      <div className="z-10 px-6 py-20 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider text-yellow-300 drop-shadow-lg">
          Our Story
        </h1>

        <div className="mx-auto mt-4 w-[220px] h-[28px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 220 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M2 16 C30 4, 60 28, 92 16 C124 4, 156 28, 188 16 C210 8, 218 12, 218 12"
              stroke="#F9D24E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mt-6 max-w-xl mx-auto text-sm sm:text-lg text-gray-200 leading-relaxed">
          “Look around, look around at how lucky we are to be alive right now.”
          <span className="block mt-3 text-yellow-200">— Hamilton</span>
        </p>
      </div>
    </section>
  );
}
