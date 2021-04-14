import { Component } from "react";
import { Link } from "react-router-dom";
import { searchTrandMouve } from "../service/movieApi";

class HomePages extends Component {
  state = {
    tranding: [],
  };

  componentDidMount = () => {
    searchTrandMouve().then(({ data }) =>
      this.setState({ tranding: data.results })
    );
  };

  render() {
    const { tranding } = this.state;
    console.log(tranding);
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {tranding.map((item) => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `/movieDetailsPage/${item.id}`,
                  state: { from: this.props.location },
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePages;
