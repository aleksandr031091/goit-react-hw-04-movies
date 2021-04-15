import { Switch, Route } from "react-router-dom";
import routes from "../../routes/Routes";

import HomePage from "../../pages/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import MoviesPage from "../../pages/MoviesPage";

const Main = () => {
  return (
    <>
      <main>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </main>
    </>
  );
};

export default Main;
