export default function Navbarr() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const hoverIn = (e) => {
    e.target.style.background = "#66ccff";
    e.target.style.color = "#081018";
  };

  const hoverOut = (e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "#b8c0cc";
  };

  const btnStyle = {
    border: "none",
    background: "transparent",
    color: "#b8c0cc",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "4px",
        padding: "6px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        zIndex: "1000",
      }}
    >
      <button
        style={btnStyle}
        onClick={() => scrollTo("home")}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        HOME
      </button>

      <button
        style={btnStyle}
        onClick={() => scrollTo("about")}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        ABOUT
      </button>
<button
        style={btnStyle}
        onClick={() => scrollTo("skills")}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        SKILLS
      </button>
      <button
        style={btnStyle}
        onClick={() => scrollTo("projects")}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        PROJECTS
      </button>

      <button
        style={btnStyle}
        onClick={() => scrollTo("contact")}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        CONTACT
      </button>

    </div>
  );
}