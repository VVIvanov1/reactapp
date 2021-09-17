import React from "react";

function Modal(props) {
  function cancelModal() {
    props.onCancel();
  }

  return (
    <div className="modale row align-items-center">
      <p className="text-center">Are you sure?</p>
      <div className="row">
        <div className="col col-xs-5">
          <button className="btn btn-secondary btn-block" onClick={cancelModal}>
            Confirm
          </button>
        </div>
        <div className="col col-xs-5">
          <button className="btn btn-primary btn-block" onClick={cancelModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
