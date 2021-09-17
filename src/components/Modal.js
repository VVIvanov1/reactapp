import React from "react";

class Modal extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="modale row align-items-center">
        <p className="text-center">Are you sure?</p>
        <div className="row">
          <div className="col col-xs-5">
            <button className="btn btn-secondary btn-block">Confirm</button>
          </div>
          <div className="col col-xs-5">
            <button className="btn btn-primary btn-block">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
