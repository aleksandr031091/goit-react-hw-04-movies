import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={scss.header}>
        <nav className={scss.nav}>
          <ul className={scss.list}>
            <li>
              <NavLink
                className={scss.listItem}
                activeClassName={scss.activListItem}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scss.listItem}
                activeClassName={scss.activListItem}
                to="/movies"
              >
                Mouvies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
