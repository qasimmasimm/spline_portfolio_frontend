import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const iconStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(102, 204, 255, 0.2)",
    color: "#9aa4b2",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const hover = (e) => {
    e.currentTarget.style.boxShadow = "0 0 18px #66ccff";
    e.currentTarget.style.border = "1px solid #66ccff";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.transform = "translateY(-3px)";
  };

  const leave = (e) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.border = "1px solid rgba(102, 204, 255, 0.2)";
    e.currentTarget.style.color = "#9aa4b2";
    e.currentTarget.style.transform = "translateY(0px)";
  };

  return (
    <footer
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #0b0f14 0%, #000 60%)",
        color: "#aaa",
        marginTop: "80px",
      }}
    >
      {/* TEXT */}
      <h3 style={{ color: "#66ccff", marginBottom: "10px" }}>
        Let’s Build Something Amazing
      </h3>

      <p style={{ fontSize: "13px", marginBottom: "30px" }}>
        Open for internships • Freelance • Collaboration
      </p>

      {/* ICONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        {/* EMAIL */}
        <a
          href="mailto:your@email.com"
          style={iconStyle}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com"
          target="_blank"
          style={iconStyle}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com"
          target="_blank"
          style={iconStyle}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/923000000000"
          target="_blank"
          style={iconStyle}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

      {/* SMALL FOOTER LINE */}
      <div
        style={{
          marginTop: "40px",
          fontSize: "12px",
          color: "#555",
        }}
      >
        © {new Date().getFullYear()} Your Name • Built with React + GSAP
      </div>
    </footer>
  );
}