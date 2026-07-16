import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faFolderPlus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { ProjectContext } from "../context/projectcontext";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function EditProjects({proj}) {
  const {projects,setProject}=useContext(ProjectContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("duration", data.duration);
      formData.append("description", data.description);
      formData.append("challenges", data.challenges);
      formData.append("solution", data.solution);
      if (data.image?.[0]) {
        formData.append("img", data.image[0]);
      }

      const res = await fetch(
      `https://spline-portfolio-backend.vercel.app/projects/${proj._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

     const result = await res.json();

    console.log(result);

    if (!res.ok) {
      toast.error(result.message || "Failed to update");
      return;
    }

      setProject((prev) =>
      prev.map((item) =>
        item._id === result._id ? result : item
      )
    );

    toast.info("Project updated successfully");
    handleClose();
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};

  return (
    <>
      <FontAwesomeIcon
      icon={faPenToSquare}
      onClick={handleShow}
      style={{
          color: "#66CCFF ",
          cursor: "pointer",
          fontSize: "18px",
          transition: ".3s",
        }}
      />


      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        contentClassName="project-modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header
            closeButton
            closeVariant="white"
            className="border-0"
            style={{
              background: "#070A0D",
              borderTopLeftRadius: "22px",
              borderTopRightRadius: "22px",
              borderBottom: "1px solid rgba(102,204,255,.12)",
              padding: "24px 28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
         <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(102,204,255,0.1)",
                  border: "1px solid rgba(102,204,255,0.25)",
                }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: "#66CCFF", fontSize: "23px" }}
                />
              </div>

              <div>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    margin: 0,
                    fontSize: "1.3rem",
                    letterSpacing: "-.3px",
                  }}
                >
                  Edit <span style={{ color: "#66CCFF" }}>Project</span>
                </h3>

                <p
                  style={{
                    color: "#8B95A5",
                    fontSize: "13.5px",
                    margin: "3px 0 0",
                  }}
                >
                   Update your project information, replace the image if needed, and save your changes.
                </p>
              </div>
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className="container-fluid">
              <div className="row g-4">
                {/* Project Name */}
                <div className="col-12 col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder=" "
                      {...register("name", {
                        required: "Project name is required",
                      })}
                    />
                    <label>Project Name</label>
                  </div>

                  <small className="text-danger">{errors.name?.message}</small>
                </div>

                {/* Duration */}
                <div className="col-12 col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder=" "
                      {...register("duration", {
                        required: "Duration is required",
                      })}
                    />
                    <label>Duration</label>
                  </div>

                  <small className="text-danger">
                    {errors.duration?.message}
                  </small>
                </div>

                {/* Description */}
                <div className="col-12">
                  <div className="input-group">
                    <textarea
                      rows="4"
                      placeholder=" "
                      {...register("description", {
                        required: "Description is required",
                      })}
                    />
                    <label>Description</label>
                  </div>

                  <small className="text-danger">
                    {errors.description?.message}
                  </small>
                </div>

                {/* Challenges */}
                <div className="col-12 col-md-6">
                  <div className="input-group">
                    <textarea
                      rows="5"
                      placeholder=" "
                      {...register("challenges", {
                        required: "Challenges are required",
                      })}
                    />
                    <label>Challenges</label>
                  </div>

                  <small className="text-danger">
                    {errors.challenges?.message}
                  </small>
                </div>

                {/* Solutions */}
                <div className="col-12 col-md-6">
                  <div className="input-group">
                    <textarea
                      rows="5"
                      placeholder=" "
                      {...register("solution", {
                        required: "Solutions are required",
                      })}
                    />
                    <label>Solutions</label>
                  </div>

                  <small className="text-danger">
                    {errors.solution?.message}
                  </small>
                </div>

                {/* Upload Image */}
                <div className="col-12">
                  <label className="upload-box">
                    <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>

                    <h5>Replace Project Image</h5>

                    <p>PNG, JPG or JPEG</p>

                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      {...register("image", {
                        required: "Project image is required",
                      })}
                    />
                  </label>

                  <small className="text-danger">{errors.image?.message}</small>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer
            className="border-0"
            style={{
              background: "#070A0D",
              borderBottomLeftRadius: "22px",
              borderBottomRightRadius: "22px",
              borderTop: "1px solid rgba(102,204,255,.1)",
              padding: "18px 28px 24px",
              display: "block",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "10px",
              }}
            >
              <button type="submit" className="modal-submit-btn">
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="modal-cancel-btn"
              >
                Discard Changes
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>

      <style>{`
.modal-submit-btn {
  width: 100%;
  padding: 13px 24px;
  border-radius: 10px;
  border: none;
  background: #66CCFF;
  color: #070A0D;
  font-weight: 700;
  font-size: 14.5px;
  cursor: pointer;
  transition: 0.25s ease;
}
.modal-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 204, 255, 0.35);
}

.modal-cancel-btn {
  width: 100%;
  padding: 11px 24px;
  border-radius: 10px;
  border: 1px solid #66CCFF;
  background: transparent;
  color: #8B95A5;
  font-weight: 600;
  font-size: 13.5px;
  cursor: pointer;
  transition: 0.2s ease;
}
.modal-cancel-btn:hover {
  color: #fff;
}`}</style>
    </>
  );
}

export default EditProjects;
