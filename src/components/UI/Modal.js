import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.overlay}>{props.children}</div>,
    document.getElementById("overlay")
  );
};

export default Modal;
