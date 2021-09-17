// import React from "react";
import { useState } from "react";
import Backdrop from './Backdrop';
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(false)
  }
  function setModalHandler(){
    setModalOpen(true)
  }

  return (
    <div className="card">
      <h1 className="text-center">{props.text}</h1>
      <div>
        <div className="row container-fluid">
          <div className="col col-xs-4"></div>
          <div className="col col-xs-5">
            <button className="btn btn-danger" onClick={setModalHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
      { modalIsOpen &&  <Backdrop onClick={deleteHandler}/>}
      { modalIsOpen &&  <Modal onCancel={deleteHandler} onConfirm={deleteHandler}/>}
     
    </div>
  );
}

export default Todo;
