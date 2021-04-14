import { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { searchMouves } from "../service/movieApi";

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

  HandleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  HandleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    searchMouves(query).then(({ data }) => {
      this.setState({ movies: data.results });
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <input type="text" onChange={this.onHandleChange} />
          <button>Search</button>
        </form>
        <ul>
          {movies.map((item) => (
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

export default MoviesPage;
