import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar");

            bars.forEach((bar) => {
              const width = bar.getAttribute("data-width");
              bar.style.width = width + "%";
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

// Add this once in your <head> or top-level layout (index.html), not inside the component:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css" />

const cardStyle = {
  background: "linear-gradient(180deg, #12121a 0%, #0c0c12 100%)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "18px",
  padding: "28px 24px",

  width: "100%",
  minHeight: "280px",

  display: "flex",
  flexDirection: "column",

  position: "relative",
  overflow: "hidden",

  transition: "all .35s ease",
  cursor: "default",
};

const iconStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.8rem",
  marginBottom: "1.25rem",
  background: "rgba(0, 212, 255, 0.1)",
  flexShrink: 0,
};

return (
  <section
    id="skills"
    style={{
      padding: "100px 8%",
      background:
        "radial-gradient(circle at top right, rgba(102, 204, 255, 0.18), transparent 40%), linear-gradient(135deg, #0b0f14 0%, #000 60%)",
      color: "#fff",
    }}
  >
    <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "50px" }}>
      Technical Skills
    </h2>

    <Row className="g-4">
      {[
        {
          title: "MongoDB",
                    description:"Core backend/frontend development skills",
          iconClass: "devicon-mongodb-plain colored",
          percent: 79,
          color: "#47a248",
          tags: ["Mongoose", "Aggregation", "Atlas"],
        },
        {
          title: "Express.js",
                    description:"Core backend/frontend development skills",
          iconClass: "devicon-express-original",
          percent: 82,
          color: "#ffffff",
          tags: ["REST API", "JWT", "Middleware"],
        },
        {
          title: "React.js",
                    description:"Core backend/frontend development skills",
          iconClass: "devicon-react-original colored",
          percent: 95,
          color: "#61dafb",
          tags: ["Hooks", "Context", "Redux"],
        },
        {
          title: "Node.js",
          description:"Core backend/frontend development skills",
          iconClass: "devicon-nodejs-plain colored",
          percent: 92,
          color: "#339933",
          tags: ["Event Loop", "API", "Streams"],
        },
      ].map((skill, index) => (
        <Col xs={12} sm={6} lg={3} key={index} className="d-flex">
          <div
            style={cardStyle}
            className="skill-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-7px)";
              e.currentTarget.style.borderColor = `${skill.color}55`;
              e.currentTarget.style.boxShadow = `0 12px 30px -10px ${skill.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
              }}
            />

            <div style={iconStyle}>
              <i className={skill.iconClass} style={{ color: skill.color }}></i>
            </div>

            <h3
              style={{
                color: "#fff",
                fontSize: "1.15rem",
                marginBottom: "6px",
              }}
            >
              {skill.title}
            </h3>

            <p
              style={{
                color: "#8a8a95",
                fontSize: "13px",
                lineHeight: "1.5",
                marginBottom: 0,
              }}
            >
              {skill.description}
            </p>

            <div
              style={{
                background: "#050508",
                height: "7px",
                borderRadius: "50px",
                overflow: "hidden",
                marginTop: "18px",
              }}
            >
              <div
                className="skill-bar"
                data-width={skill.percent}
                style={{
                  width: "0%",
                  height: "100%",
                  background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                  borderRadius: "50px",
                  transition: "1.5s ease",
                }}
              ></div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: "#888",
                marginTop: "8px",
              }}
            >
              <span>Proficiency</span>
              <span style={{ color: skill.color, fontWeight: 600 }}>
                {skill.percent}%
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginTop: "auto",
                paddingTop: "18px",
              }}
            >
              {skill.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "11px",
                    padding: "4px 10px",
                    borderRadius: "50px",
                    border: "1px solid rgba(255,255,255,.1)",
                    background: "rgba(255,255,255,.03)",
                    color: "#aaa",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Col>
      ))}
    </Row>
      </section>
  );
}
