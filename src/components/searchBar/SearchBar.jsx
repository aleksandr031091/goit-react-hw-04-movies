// import routes from "../../routes/Routes";
import { Component } from "react";

import scss from "./SearchBar.module.scss";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={scss.form} onSubmit={this.handleSubmit}>
        <input
          className={scss.input}
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="add movie"
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
