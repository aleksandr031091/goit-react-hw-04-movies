import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes/Routes";

// import HomePage from "../../pages/HomePage";
// import MovieDetailsPage from "../../pages/MovieDetailsPage";
// import MoviesPage from "../../pages/MoviesPage";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));

const Main = () => {
  return (
    <>
      <main>
        <Suspense fallback={<p>...Loading</p>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route
              path={routes.movieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route path={routes.movies} component={MoviesPage} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default Main;
