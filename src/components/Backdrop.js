import React from "react";
import Modal from "./Modal";

function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.onClick}>
      <Modal onCancel={props.onClick}/>
    </div>
  );
}

export default Backdrop;
