import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/ALLMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
// import NavigationHeader from "./components/layout/mainNavigation";
import Layout from "../src/components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/newmeetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
