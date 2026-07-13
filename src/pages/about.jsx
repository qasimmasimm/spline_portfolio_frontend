import { Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "80px 8%",
        background:
          "radial-gradient(circle at top right, rgba(102, 204, 255, 0.18), transparent 40%), linear-gradient(135deg, #0b0f14 0%, #000 60%)",
        color: "#fff",
      }}
    >
      <Row className="align-items-center g-5">
        
        {/* LEFT SIDE */}
        <Col xs={12} md={6}>
          <h2 style={{ fontSize: "40px", marginBottom: "15px" }}>
            About Me
          </h2>

 <p style={{ color: "#aaa", lineHeight: "1.9", fontSize: "15px" }}>
  I am <b style={{ color: "#66CCFF" }}>Muhammad Qasim</b>, a passionate and
  self-driven <b>MERN Stack Developer</b> from Pakistan. I am currently 17
  years old and studying in <b>Intermediate Part-II at Punjab College</b>.
</p>

<p style={{ color: "#aaa", lineHeight: "1.9", marginTop: "10px" }}>
  My journey in web development started with curiosity about how websites work,
  and it quickly turned into a deep passion for building real-world applications.
  I focus on creating fast, scalable, and user-friendly web apps using
  <b> React, Node.js, Express, and MongoDB</b>.
</p>

<p style={{ color: "#aaa", lineHeight: "1.9", marginTop: "10px" }}>
  I have hands-on experience building multiple full-stack projects where I
  implemented authentication systems, REST APIs, and responsive UI designs.
</p>

<p style={{ color: "#aaa", lineHeight: "1.9", marginTop: "10px" }}>
  I enjoy solving real-world problems through code and continuously improving
  my skills by learning new technologies, building projects, and experimenting
  with modern development practices.
</p>


        </Col>

        {/* RIGHT SIDE */}
<Col xs={12} md={6}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* PORTRAIT CARD */}
    <div
      style={{
        width: "320px",
        height: "420px",
        borderRadius: "25px ",
        padding: "8px",
        background:
          "linear-gradient(135deg, #66ccff, rgba(102,204,255,0.2), transparent)",
        boxShadow: "0 10px 40px rgba(102, 204, 255, 0.25)",
        position: "relative",
      }}
    >
      {/* INNER GLASS LAYER */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <img
          src="images/portrait1.jfif"
          alt="My Portrait"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.05)",
            filter: "contrast(1.1) brightness(0.95)",
          }}
        />
      </div>

      {/* GLOW EFFECT RING */}
      <div
        style={{
          position: "absolute",
          inset: "-10px",
          borderRadius: "30px",
          background:
            "radial-gradient(circle at top left, #66ccff55, transparent 60%)",
          zIndex: -1,
          filter: "blur(20px)",
        }}
      />
    </div>
  </div>
</Col>    </Row>
    </section>
  );
};