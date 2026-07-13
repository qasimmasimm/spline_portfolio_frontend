import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Container, Row, Col } from "react-bootstrap";
import { Icons } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faInstagram,faLinkedin,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFontAwesomeAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <ScrollProgressBar />
      <CursorGlow />

<section
  id="home"
  className="hero-section"
  style={{
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top right, rgba(102, 204, 255, 0.18), transparent 40%), linear-gradient(135deg, #0b0f14 0%, #000 60%)",
    color: "#fff",
    padding: "80px 0",
  }}
>
  {/* Grain overlay */}
  <NoiseOverlay />

  <Container style={{ position: "relative", zIndex: 2 }}>
    <Row
      className="align-items-center"
     style={{
  marginBottom: "30px",
}}
    >
      <Col xs={12} md={6}>
        <FadeIn delay={0}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#66CCFF",
            }}
          >
            MERN STACK DEVELOPER
          </div>
        </FadeIn>

        <FadeIn delay={100}>
  <h1
    className="title"
    style={{
      fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
      lineHeight: "1.1",
      marginTop: "15px",
      fontWeight: "700",
    }}
  >
    Muhammad Qasim
    <br />
    <span className="gradient-text">Full-Stack Developer</span>
  </h1>
</FadeIn>

        <FadeIn delay={200}>
          <p
            style={{
              color: "#aaa",
              marginTop: "15px",
              lineHeight: "1.7",
            }}
          >
            I'm a 17-year-old MERN Stack Developer from Lahore, Pakistan,
            passionate about building modern web applications.
          </p>
        </FadeIn>


        <FadeIn delay={450}>
  <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "25px", flexWrap: "wrap" }}>
    <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-secondary-glow" style={btnPrimary}>
      VIEW PROJECTS
    </button>
    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-secondary-glow" style={btnSecondary}>
      CONTACT ME
    </button>
    <div style={{ display: "flex", gap: "12px", marginLeft: "8px" }}>
      <Icon href="https://github.com/qasimmasimm" icon={faGithub} />
      <Icon href="https://www.linkedin.com/in/muhammad-qasim-asim-6638673b8/" icon={faLinkedin} />
      <Icon href="https://wa.me/923295810323" icon={faWhatsapp} />
      <Icon href="mailto:h.qasimasim@gmail.com" icon={faEnvelope} />
    </div>
  </div>
</FadeIn> 
      </Col>

      <Col xs={12} md={6}>
        <FadeIn delay={250}>
          <div className="spline-tilt" style={{ height: "500px" }}>
            <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </div>
        </FadeIn>
      </Col>
    </Row>
  </Container>
</section>

      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #ffffff 0%, #66CCFF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .btn-primary-glow {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-primary-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 204, 255, 0.45);
        }

        .btn-secondary-glow {
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .btn-secondary-glow:hover {
          transform: translateY(-2px);
          border-color: rgba(102, 204, 255, 0.8);
          background: rgba(102, 204, 255, 0.08);
        }

        .spline-tilt {
          transition: transform 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </>
  );
}

function Icon({ href, icon }) {
  const style = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(102, 204, 255, 0.2)",
    color: "#9aa4b2",
    cursor: "pointer",
    transition: "0.3s",
    backdropFilter: "blur(10px)",
    textDecoration: "none",
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
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    
    <a  href={href}
      target="_blank"
      rel="noreferrer"
      style={style}
      onMouseEnter={hover}
      onMouseLeave={leave}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

const footerLink = {
  color: "#9aa4b2",
  textDecoration: "none",
  fontSize: "13px",
  transition: "0.2s ease",
};

/* ---------------------------------------------------
   Cursor-follow glow
   A soft accent-colored blob that trails the pointer.
--------------------------------------------------- */
function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on touch devices — no pointer to follow
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);

    let frame;
    const animate = () => {
      // Lerp toward target for a smooth, slightly trailing motion
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 200}px, ${
          pos.current.y - 200
        }px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(102,204,255,0.16) 0%, rgba(102,204,255,0) 70%)",
        pointerEvents: "none",
        zIndex: 1,
        mixBlendMode: "screen",
      }}
    />
  );
}

/* ---------------------------------------------------
   Scroll progress bar
   Thin fixed bar showing how far down the page you are.
--------------------------------------------------- */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #66CCFF, #ffffff)",
        zIndex: 1000,
        transition: "width 0.1s linear",
        boxShadow: "0 0 8px rgba(102,204,255,0.6)",
      }}
    />
  );
}

/* ---------------------------------------------------
   Noise / grain overlay
   Subtle texture so the dark gradient doesn't feel flat.
--------------------------------------------------- */
function NoiseOverlay() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.05,
        pointerEvents: "none",
        zIndex: 1,
        mixBlendMode: "overlay",
      }}
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}

/* ---------------------------------------------------
   FadeIn
   Scroll/mount-triggered fade + slide up, staggered by delay.
--------------------------------------------------- */
function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

/* styles */
const tag = {
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  border: "1px solid rgba(77,163,255,0.25)",
  color: "#66CCFF",
};

const btnPrimary = {
  padding: "8px 20px",
  background: "#66CCFF",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  cursor: "pointer",
};

const btnSecondary = {
  padding: "8px 20px",
  background: "transparent",
  color: "#66CCFF",
  border: "1px solid rgba(77,163,255,0.4)",
  borderRadius: "10px",
  cursor: "pointer",
};
