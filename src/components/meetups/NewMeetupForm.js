import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";
//https://meetups-3cbbb-default-rtdb.firebaseio.com/

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const descrInputRef = useRef();
  const monthInputRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const enteredData = {
      title: titleInputRef.current.value,
      description: descrInputRef.current.value,
      month: monthInputRef.current.value
    };
    // console.log(enteredData);
    props.onAddMeetup(enteredData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <input type="text" required id="month" ref={monthInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" ref={descrInputRef} />
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
