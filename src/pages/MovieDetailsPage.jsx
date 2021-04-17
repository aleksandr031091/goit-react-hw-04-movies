import { Component, lazy, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { searchMouvesDetails } from "../service/movieApi";
import { posterimgpath } from "../service/movieApi";
// import MoviesCredits from "../components/cast";
// import MouvesReviews from "../components/reviews";
import scss from "./Page.module.scss";

const MoviesCredits = lazy(() => import("../components/cast"));
const MouvesReviews = lazy(() => import("../components/reviews"));

class MouvieDetailsPage extends Component {
  state = {
    movie: {
      genres: [],
    },
  };

  componentDidMount() {
    // console.log(this.props.match.params.movieId);
    searchMouvesDetails(this.props.match.params.movieId)
      .then((movie) => {
        this.setState({ movie: movie });
      })
      .catch((error) => console.log(error));
  }

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const {
      id,
      title,
      poster_path,
      vote_average,
      overview,
      release_date,
      genres,
    } = this.state.movie;
    let releaseYear = "";
    if (!!release_date) {
      releaseYear = release_date.substring(0, 4);
    }

    return (
      <div>
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
        <div className={scss.movieDescriptionList}>
          <div className={scss.imgBox}>
            {!!poster_path && (
              <img
                className={scss.image}
                src={posterimgpath + poster_path}
                alt={title}
              />
            )}
          </div>
          <div>
            <h1>
              {title} ({releaseYear})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>genres</h4>
            <ul className={scss.listGanres}>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>Additional information</p>
        <ul className={scss.information}>
          <Link className={scss.item} to={{ pathname: `/movies/${id}/Cast` }}>
            Cast
          </Link>
          <Link
            className={scss.item}
            to={{ pathname: `/movies/${id}/reviews` }}
          >
            Reviews
          </Link>
        </ul>
        <Suspense fallback={<p>...Loading</p>}>
          <Switch>
            <Route path="/movies/:movieId/cast" component={MoviesCredits} />
            <Route path="/movies/:movieId/reviews" component={MouvesReviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MouvieDetailsPage;
