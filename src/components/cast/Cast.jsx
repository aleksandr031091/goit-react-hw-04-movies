import { Component } from "react";
import { searchMouvesCredits } from "../../service/movieApi";

class MoviesCredits extends Component {
  componentDidMount() {
    searchMouvesCredits(this.props.match.params.movieId)
      .then((credits) => {
        this.setState({
          credits: credits,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
  render() {
    return <></>;
  }
}
export default MoviesCredits;
