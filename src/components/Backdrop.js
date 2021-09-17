import React from "react";
import Modal from "./Modal";

class Backdrop extends React.Component {
    // constructor(props){
    //     super(props)
    // }



    render(){
        return(
            <div className="backdrop">
                <Modal />
            </div>
        )
    }
}







export default Backdrop