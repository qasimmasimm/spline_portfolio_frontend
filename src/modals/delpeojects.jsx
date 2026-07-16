import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { ProjectContext } from "../context/projectcontext";

import { ToastContainer,toast } from "react-toastify";

export default function Delprojects({proj}) {
  const [show, setShow] = useState(false);

  const {projects,setProject}=useContext(ProjectContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async() => {
    const res = await fetch(
    `http://localhost:8080/${proj._id}`,
    { method: "DELETE" }
  ); 

  const data=await res.json();

  if(!res.ok){
      toast.danger("somthing is wrong");
  }

  setProject((prev)=>prev.filter((p)=>p._id !== proj._id));

  toast.info("deleted successfully")



    handleClose();
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={handleShow}
        style={{
          color: "white",
          cursor: "pointer",
          fontSize: "18px",
          transition: ".3s",
        }}
       
      />

     <Modal
  show={show}
  onHide={handleClose}
  centered
  contentClassName="delete-modal"   
 
>
  <Modal.Header className="border-0 pb-0">

  </Modal.Header>

  <Modal.Body
    style={{
      textAlign: "center",
      padding: "20px 30px 10px",
    }}
  >
    <div className="delete-circle">
      <FontAwesomeIcon icon={faTrash} />
    </div>

    <h4
      style={{
        color: "#fff",
        marginTop: "20px",
        fontWeight: "600",
      }}
    >
      Remove this Project?
    </h4>

    <p
      style={{
        color: "#9AA4B2",
        marginTop: "10px",
        lineHeight: "1.7",
        fontSize: "15px",
      }}
    >
      This project will be permanently deleted from your portfolio.
      <br />
      This action cannot be undone.
    </p>
  </Modal.Body>

  <Modal.Footer
    className="border-0"
    style={{
      justifyContent: "center",
      gap: "15px",
      paddingBottom: "25px",
    }}
  >
    <Button
      onClick={handleClose}
      className="cancel-btn"
    >
      Cancel
    </Button>

    <Button
      onClick={handleDelete}
      className="delete-btn"
    >
      Delete
    </Button>
  </Modal.Footer>
</Modal>
    </>
  );
}
