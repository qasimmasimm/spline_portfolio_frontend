import React, { useRef, useState } from "react";

export default function BackgroundSound() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.volume = 0.3;
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/sound/sound.mp3" type="audio/mpeg" />
      </audio>

      {/* BUTTON */}
      <button
        onClick={toggleSound}
        style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    gap: "5px",

    padding: "11px 8px",
    borderRadius: "10px",

    background: "#070A0D",
    color: "#66CCFF ",

    border: "1px solid #66CCFF",
    fontSize: "14px",
    fontWeight: "600",

    cursor: "pointer",
    transition: "0.3s ease",
    boxShadow: "0 4px 15px rgba(102, 204, 255, 0.25)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(102, 204, 255, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 4px 15px rgba(102, 204, 255, 0.25)";
  }}
>
        {playing ? "🔊 Sound ON" : "🔇 Sound OFF"}
      </button>
    </>
  );
}