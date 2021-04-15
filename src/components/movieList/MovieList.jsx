// import scss from "./MovieList.module.scss";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${this.props.match.url}/${item.id}`,
              state: { from: this.props.location },
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
