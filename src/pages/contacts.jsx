import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AddProject from "../modals/addprojects";

const errorStyle = {
  color: "#ff6b6b",
  fontSize: "12px",
  marginTop: "4px",
};

const buttonStyle = {
  padding: "14px 24px",
  borderRadius: "10px",
  border: "none",
  background: "#66ccff",
  color: "#05070d",
  fontWeight: 600,
  fontSize: "14px",
  cursor: "pointer",
  marginTop: "6px",
};

export default function ContactUI() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          idea: data.idea, 
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        console.log(result.message);
        toast.error(result.message || "Something went wrong");
        return;
      }

      console.log("Success:", result);
      toast.info("Message sent successfully!!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "80px 0 0",
        background: "#05070d",
        color: "#fff",
        overflow: "hidden",
      }}
    >

      <img
        src="YOUR_IMAGE_URL"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.35) saturate(0.8)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,0,0,0.4), #05070d 80%)",
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Let’s Build Something{" "}
            <span style={{ color: "#66ccff" }}>Impossible</span>
          </h1>
          <p style={{ color: "#9aa4b2", fontSize: "14px" }}>
            Got an idea? Let’s turn it into reality.
          </p>
        </div>

        <Row>
          <Col xs={12}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                maxWidth: "650px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Row className="g-3">
                <Col xs={12} sm={6}>
                  <div className="input-group">
                    <input
                      id="name"
                      placeholder=" "
                      {...register("name", { required: "Name is required" })}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  {errors.name && (
                    <p style={errorStyle}>{errors.name.message}</p>
                  )}
                </Col>

                <Col xs={12} sm={6}>
                  <div className="input-group">
                    <input
                      id="email"
                      placeholder=" "
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  {errors.email && (
                    <p style={errorStyle}>{errors.email.message}</p>
                  )}
                </Col>
              </Row>

              
              <div className="input-group">
                <input
                  id="subject"
                  placeholder=" "
                  {...register("subject", {
                    required: "Subject is required"
                  })}
                />
                <label htmlFor="subject">Subject</label>
              </div>
              {errors.subject && (
                <p style={errorStyle}>{errors.subject.message}</p>
              )}

              {/* Idea */}
              <div className="input-group">
                <textarea
                  id="idea"
                  placeholder=" "
                  style={{ minHeight: "140px" }}
                   {...register("idea", {
    required: "Idea is required",
  })}
                />
                <label htmlFor="idea">Your idea...</label>
              </div>
              {errors.idea && (
                <p style={errorStyle}>{errors.idea.message}</p>
              )}

              <button type="submit" style={buttonStyle}>
                Send Transmission
              </button>
            </form>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "80px",
          padding: "50px 0 20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container>
          <Row className="gy-5">
            <Col lg={4} md={6} xs={12}>
              <p
                style={{
                  color: "#9aa4b2",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                Email me for any queries
              </p>

              <a
              href="mailto:h.qasimasim@gmail.com"
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize:"1.8rem",
                  textDecoration:"none",
                  wordBreak: "break-word",
                  lineHeight: "1.4",
                }}
              >
                h.qasimasim@gmail.com
              </a>
            </Col>

            <Col lg={2} md={6} xs={12}>
              <h5 style={{ color: "#66ccff", marginBottom: "20px" }}>
                QUICK LINKS
              </h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <a href="#home" style={footerLink}>
                  Home
                </a>
                <a href="#about" style={footerLink}>
                  About me
                </a>
                <a href="#contact" style={footerLink}>
                  Contact 
                </a>
                <a href="#projects" style={footerLink}>
                  Projects
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <h5 style={{ color: "#66ccff", marginBottom: "20px" }}>
                FOLLOW
              </h5>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                
                <a  href="https://github.com/qasimmasimm"
                  target="_blank"
                  rel="noreferrer"
                  style={footerLink}
                >
                <FontAwesomeIcon icon={faGithub}/> GITHUB
                </a>

                
                <a  href="https://www.instagram.com/qasimm.asimm/"
                  target="_blank"
                  rel="noreferrer"
                  style={footerLink}
                >
                <FontAwesomeIcon icon={faInstagram}/>  INSTAGRAM
                </a>

                
                <a  href="https://www.linkedin.com/in/muhammad-qasim-asim-6638673b8/"
                  target="_blank"
                  rel="noreferrer"
                  style={footerLink}
                >
                <FontAwesomeIcon icon={faLinkedin} />  LINKEDIN
                </a>

                
                <a  href="https://wa.me/923295810323"
                  target="_blank"
                  rel="noreferrer"
                  style={footerLink}
                >
                <FontAwesomeIcon icon={faWhatsapp}/>  WHATSAPP
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <h5 style={{ color: "#66ccff", marginBottom: "20px" }}>
                GET IN TOUCH
              </h5>

              <p style={{ color: "#9aa4b2", marginBottom: "10px" }}>
                +92 329 5810323
              </p>

              <a href="mailto:h.qasimasim@gmail.com" style={{ textDecoration:"none",color: "#9aa4b2" }}>h.qasimasim@gmail.com</a>

              <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
                <Icon href="https://github.com/qasimmasimm" icon={faGithub} />
                <Icon href="https://www.linkedin.com/in/muhammad-qasim-asim-6638673b8/" icon={faLinkedin} />
                <Icon href="https://wa.me/923295810323" icon={faWhatsapp} />
<Icon
  href="mailto:h.qasimasim@gmail.com"
  icon={faEnvelope}
/>            </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <div
                style={{
                  marginTop: "40px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,.05)",
                  textAlign: "center",
                  color: "#666",
                  fontSize: "13px",
                }}
              >
                © {new Date().getFullYear()} Muhammad Qasim. All Rights Reserved.
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style>{`
        .input-group input:hover,
        .input-group textarea:hover {
          border: 1px solid rgba(102, 204, 255, 0.6);
          box-shadow: 0 0 10px rgba(102, 204, 255, 0.25);
        }

        .input-group input:focus,
        .input-group textarea:focus {
          box-shadow: 0 0 14px rgba(102, 204, 255, 0.7);
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(102, 204, 255, 0.4);
        }

        a:hover {
          color: #66ccff !important;
          transform: translateX(4px);
        }
      `}</style>
      <ToastContainer />
    </section>
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
