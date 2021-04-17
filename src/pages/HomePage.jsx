import { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../routes/Routes";
import { searchTrandMouve } from "../service/movieApi";
import scss from "./Page.module.scss";
// import MovieList from "../components/movieList";

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
    // console.log(tranding);
    return (
      <>
        <h1>Trending today</h1>
        {/* <MovieList tranding={tranding} /> */}
        <ul className={scss.list}>
          {tranding.map((item) => (
            <li key={item.id}>
              <Link
                className={scss.listItem}
                to={{
                  pathname: `${routes.movies}/${item.id}`,
                  state: { from: this.props.location },
                }}
              >
                {item.title || item.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePages;
