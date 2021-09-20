import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function AddMeetupHandler(meetupData) {
  const history = useHistory();
  fetch("https://meetups-3cbbb-default-rtdb.firebaseio.com/meetups.json", {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    history.replace("/");
  });
}
function NewMeetup() {
  return (
    <div>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
