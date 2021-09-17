import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/ALLMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div className="row">
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/newmeetup'>
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
