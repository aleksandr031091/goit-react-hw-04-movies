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
        this.setState({ ...movie });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { id, title, genres } = this.state.movie;

    console.log(genres);
    return (
      <>
        <div>
          <h2>MovieDetalis</h2>
          <p>User Score</p>
          <h3>Overview</h3>
          <p>Ganres</p>
          {title}
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
      </>
    );
  }
}

export default MouvieDetailsPage;
