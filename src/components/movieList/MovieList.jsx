// import scss from "./MovieList.module.scss";
import { Link, withRouter } from "react-router-dom";

const MovieList = ({ movies, match, location }) => {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${match.url}/${item.id}`,
              state: { from: location },
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MovieList);
