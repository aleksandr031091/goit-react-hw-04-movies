import { Component } from "react";
import { searchMouvesCredits } from "../../service/movieApi";
import { profilepath } from "../../service/movieApi";

class MoviesCredits extends Component {
  state = { credits: [] };

  componentDidMount() {
    searchMouvesCredits(this.props.match.params.movieId)
      .then((data) => {
        this.setState({
          credits: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { credits } = this.state;

    return (
      <div>
        <ul>
          {credits &&
            credits.cast &&
            credits.cast.map((credit) => (
              <li key={credit.credit_id}>
                {credit.profile_path && (
                  <img
                    src={profilepath + credit.profile_path}
                    alt={credit.name}
                  />
                )}
                <p>{credit.name}</p>
                <p>Character: {credit.character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default MoviesCredits;
