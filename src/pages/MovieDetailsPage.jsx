import { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { searchMouvesDetails } from "../service/movieApi";
import MoviesCredits from "../components/cast";
import MouvesReviews from "../components/reviews";

class MouvieDetailsPage extends Component {
  state = {
    movie: {
      genres: [],
    },
  };

  componentDidMount() {
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
    console.log(title);
    return (
      <div>
        <button type="button" onClick={this.goBack}>
          go back
        </button>
        <div>{!!poster_path && <img src="#" alt={title} />}</div>
        <div>
          <h1>
            {title} ({releaseYear})
          </h1>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <p>genres</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Additional information</p>
          <Link to={{ pathname: `/movies/${id}/Cast` }}>Cast</Link>
          <Link to={{ pathname: `/movies/${id}/reviews` }}>Reviews</Link>
        </div>
        <Switch>
          <Route path="/movies/:movieId/credits" component={MoviesCredits} />
          <Route path="/movies/:movieId/reviews" component={MouvesReviews} />
        </Switch>
      </div>
    );
  }
}

export default MouvieDetailsPage;
