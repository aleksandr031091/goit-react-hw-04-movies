import { Component } from "react";

import { searchMouves } from "../service/movieApi";

import SearchBar from "../components/searchBar";
import MovieList from "../components/movieList";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  hendleSubmit = (query) => {
    searchMouves(query)
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
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
