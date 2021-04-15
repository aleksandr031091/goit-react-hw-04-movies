import { Component } from "react";
import { searchMouvesReviews } from "../../service/movieApi";

class MouvesReviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    searchMouvesReviews(this.props.match.params.movieId)
      .then((reviews) => {
        this.setState({
          reviews: reviews,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
  render() {
    const { review } = this.state;
    console.log(review);
    return <></>;
  }
}
export default MouvesReviews;
