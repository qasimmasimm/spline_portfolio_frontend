import React, { useRef, useEffect, useContext, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectContext } from "../context/projectcontext";
import Delprojects from "../modals/delpeojects";
import EditProjects from "../modals/editprojects";
import Projinfo from "../modals/projectsinfo";

gsap.registerPlugin(ScrollTrigger);

const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  const cleanPath = imagePath.replace(/\\/g, "/");
  return `https://spline-portfolio-backend.vercel.app/${cleanPath}`;
};

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const [isDesktop, setIsDesktop] = useState(
  typeof window !== "undefined" ? window.innerWidth >= 992 : true
);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 992);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const { projects } = useContext(ProjectContext);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!projects.length || !isDesktop) return;

    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current.scrollWidth;

      gsap.to(trackRef.current, {
        x: -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1.2,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  if (!projects.length) {
    return (
      <section
        id="projects"
        style={{
          background: "#070A0D",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#66CCFF",
          fontSize: "15px",
          letterSpacing: "0.5px",
        }}
      >
        No projects...
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        background: "#070A0D",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* HEADER */}
      <div
        style={{
         padding: "70px 6vw 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{ textAlign: "center", color: "#fff", marginBottom: "0px" }}
          >
            Projects
          </h1>
        </div>
      </div>

      {/* TRACK — horizontal on desktop, stacked on mobile */}
      <div
  ref={trackRef}
  style={{
    display: isDesktop ? "flex" : "grid",

    gridTemplateColumns: isDesktop
      ? "none"
      : "repeat(auto-fit,minmax(320px,1fr))",

    gap: "28px",

    padding: "0 6vw",

    marginTop: "-20px",

    marginBottom: "70px",
  }}
>
        {projects.map((proj, index) => (
          <div
            key={proj._id || index}
            className="project-card"
            style={{
              width: isDesktop ? "460px" : "100%",
maxWidth: isDesktop ? "460px" : "100%",
              minHeight: "330px",
height: "100%",
              flexShrink: 0,
              marginBottom: isDesktop ? 0 : "28px",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#0B0E13",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              transition:
                "border-color .3s ease, transform .3s ease, box-shadow .3s ease",
            }}
          >
            {/* IMAGE */}
           <div
  style={{
    width: "100%",
    height: isDesktop ? "230px" : "220px",
    overflow: "hidden",
    flexShrink: 0,
    position: "relative",
  }}
>
  <img
    src={getImageUrl(proj.image)}
    alt={proj.name}
    className="project-img"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform .5s ease",
    }}
  />

  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "30%",
      backgroundImage: `url(${getImageUrl(proj.image)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(10px)",
      transform: "scale(1.08)",
      opacity: 0.7,
      WebkitMaskImage:
        "linear-gradient(to top, black 0%, rgba(0,0,0,.7) 55%, transparent 100%)",
      maskImage:
        "linear-gradient(to top, black 0%, rgba(0,0,0,.7) 55%, transparent 100%)",
      pointerEvents: "none",
    }}
  />
</div>
            {/* CONTENT */}
            <div
              style={{
                padding: "16px 24px 14px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minHeight: 0,
              }}
            >
              

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#fff",
                  margin: "0 0 0px",
                  letterSpacing: "-0.3px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {proj.name}
              </h3>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                <Projinfo proj={proj} />
                <span>
                  {" "}
                  {user?.role == "admin" ? <Delprojects proj={proj} /> : ""}
                  &nbsp;
                  {user?.role == "admin" ? <EditProjects proj={proj} /> : ""}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-card:hover {
          border-color: rgba(102,204,255,0.3);
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.35);
        }
        .project-card:hover .project-img {
          transform: scale(1.05); 
        }

        .case-study-btn {
          margin-top: 16px;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 11px 20px;
          border-radius: 8px;
          border: 1px solid rgba(102,204,255,0.3);
          background: transparent;
          color: #66CCFF;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: background .25s ease, border-color .25s ease;
        }
        .case-study-btn:hover {
          background: rgba(102,204,255,0.1);
          border-color: rgba(102,204,255,0.55);
        }
        .case-study-btn .arrow {
          display: inline-block;
          transition: transform .25s ease;
        }
        .case-study-btn:hover .arrow {
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
}
