import { Link, withRouter } from "react-router-dom";
import scss from "./MovieList.module.scss";

const MovieList = ({ movies, match, location }) => {
  return (
    <ul className={scss.list}>
      {movies.map((item) => (
        <li key={item.id}>
          <Link
            className={scss.listItem}
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
