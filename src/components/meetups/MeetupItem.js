import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favsContext = useContext(FavoritesContext);
  const itemIsFavorite = favsContext.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favsContext.removeFavorite(props.id);
    } else {
      favsContext.addFavorite({
        id: props.id,
        month: props.month,
        description: props.description,
        title: props.title,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.meetup.month}</h3>
          <h3>{props.meetup.id}</h3>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favs" : "Add to favs"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
