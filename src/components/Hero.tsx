"use client";

import React, { useMemo, useState } from "react";

// Hero Component
function Hero({ onContinue }: { onContinue: () => void }) {
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
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
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

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="mt-10 px-8 py-3 bg-yellow-300 text-black font-bold rounded hover:bg-yellow-400 transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
}

// Landing Page with Name Prompt
export default function Landing() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [verified, setVerified] = useState(false);
  const correctName = "Maji";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim().toLowerCase() === correctName.toLowerCase()) {
      setVerified(true);
    } else {
      alert("Hmm… that doesn’t seem right. Try again!");
      setNameInput("");
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero onContinue={() => setShowPrompt(true)} />

      {/* Name Prompt Overlay */}
      {showPrompt && !verified && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-20">
          <div className="bg-gray-900/80 p-8 rounded-xl text-center text-white shadow-lg">
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold">
              Let us confirm you are who you are
            </h2>
            <p className="mb-6">What is your name?</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4"
            >
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="px-4 py-2 rounded text-black text-center w-64"
                placeholder="Type your name..."
              />
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-300 rounded font-bold hover:bg-yellow-400 transition"
              >
                Enter...
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Verified Next Page */}
      {verified && (
        <div className="relative z-10">
          <h2 className="text-3xl text-yellow-300 text-center mt-20">
            Welcome, {correctName}! 🌟
          </h2>
          <p className="text-center mt-4 text-gray-200">
            Let’s continue our story…
          </p>
        </div>
      )}
    </div>
  );
}
