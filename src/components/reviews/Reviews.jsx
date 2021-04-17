import { Component } from "react";
import { searchMouvesReviews } from "../../service/movieApi";

class MouvesReviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    searchMouvesReviews(this.props.match.params.movieId)
      .then((data) => {
        this.setState({
          reviews: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </div>
    );
  }
}

export default MouvesReviews;
