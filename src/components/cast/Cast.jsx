import { Component } from "react";
import { searchMouvesCredits } from "../../service/movieApi";

class MoviesCredits extends Component {
  state = { credits: {} };
  componentDidMount() {
    searchMouvesCredits(this.props.match.params.movieId)
      .then(({ data }) => {
        this.setState({
          credits: data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { credits } = this.state;
    console.log(credits);
    return <></>;
  }
}
export default MoviesCredits;
