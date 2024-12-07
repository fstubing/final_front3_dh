import { Link } from "react-router-dom";
import { useUserStates } from "../Context/Context";

const Navbar = () => {
  const { dispatch, state } = useUserStates();

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME", payload: state.theme });
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={state.theme}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dent DH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favs">
                Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={`btn btn-outline-${
            state.theme == "light" ? "dark" : "light"
          }`}
          id="btn-d"
          onClick={changeTheme}
        >
          {state.theme == "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
