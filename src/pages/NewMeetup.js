import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();
  function AddMeetupHandler(meetupData) {
    // console.log(history)
    fetch("https://meetups-3cbbb-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
