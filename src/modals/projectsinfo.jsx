
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Projinfo({ proj }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

          const apiurl=import.meta.env.VITE_API_URL;

// console.log(proj)
  const solutionText = proj?.solutions ?? proj?.solution;

  return (
    <>
      <button className="case-study-btn" onClick={handleShow}>
        View Case Study <span className="arrow">→</span>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size=""
        dialogClassName="pd-modal"
        contentClassName="pd-modal-content"
      >
        {/* Close Button */}
        <button className="pd-close" onClick={handleClose} aria-label="Close">
          &times;
        </button>

        {/* Hero */}
        <div className="pd-hero">
          
          {proj?.image && (
            <img
              className="pd-hero-img"
              src={`${apiurl}/${proj.image}`}
              alt={proj?.name}
            />
          )}

          <div className="pd-hero-overlay" />

          <div className="pd-hero-text">
            {proj?.duration && (
              <span className="pd-duration-badge">{proj.duration}</span>
            )}

            <h1 className="pd-title">{proj?.name}</h1>
          </div>
        </div>

        <Modal.Body className="pd-body">
          {proj?.description && (
            <section className="pd-section">
              <span className="pd-eyebrow">Overview</span>
              <p className="pd-text">{proj.description}</p>
            </section>
          )}

          {(proj?.challenges || solutionText) && (
            <div className="pd-track">
              {proj?.challenges && (
                <div className="pd-track-card pd-track-challenge">
                  <span className="pd-eyebrow">Challenge</span>
                  <p className="pd-text">{proj.challenges}</p>
                </div>
              )}

              {proj?.challenges && solutionText && (
                <div className="pd-track-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12h15M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {solutionText && (
                <div className="pd-track-card pd-track-solution">
                  <span className="pd-eyebrow">Solution</span>
                  <p className="pd-text">{solutionText}</p>
                </div>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Projinfo;
