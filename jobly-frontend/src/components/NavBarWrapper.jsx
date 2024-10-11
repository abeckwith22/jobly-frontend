import { Link, NavLink } from "react-router-dom";
import { TokenContext } from "../helpers/TokenContext";
import { useContext, useState } from "react";
import "../styles/NavBarWrapper.css";

const NavBarWrapper = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useContext(TokenContext);
  return (
    <>
        <nav className="NavBarWrapper">
          <Link className="title" to={"/"}>
            Jobly
          </Link>
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            {!token ? (
              <>
                <li>
                  <NavLink to={"/login"}>Log In</NavLink>
                </li>
                <li>
                  <NavLink to={"/signup"}>Sign Up</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/companies"}>Companies</NavLink>
                </li>
                <li>
                  <NavLink to={"/jobs"}>Jobs</NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
                {/* Add feature where if user is logged in, set state to true and show log out button */}
                <li>
                  <NavLink to={"/logout"}>Log out</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
    </>
  );
};

export default NavBarWrapper;
