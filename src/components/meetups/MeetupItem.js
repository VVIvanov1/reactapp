import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.content}>
        <h3>{props.meetup.month}</h3>
        <h3>{props.meetup.id}</h3>
        <p>{props.meetup.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To favorites</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
