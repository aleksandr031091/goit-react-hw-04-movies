import { Component } from "react";

import { searchMouves } from "../service/movieApi";
import queryString from "query-string";
import SearchBar from "../components/searchBar";
import MovieList from "../components/movieList";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  componentDidMount = () => {
    const queryParams = queryString.parse(this.props.location.search);
    const { query } = queryParams;
    if (query) {
      searchMouves(query).then(({ data }) => {
        this.setState({ movies: data.results });
      });
    }
  };

  hendleSubmit = (query) => {
    searchMouves(query)
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .then(
        this.props.history.push({
          pathname: this.props.location.pathname,
          search: `query=${query}`,
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.hendleSubmit} />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
