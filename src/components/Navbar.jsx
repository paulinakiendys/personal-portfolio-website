import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to={``}>
          John Doe
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <NavLink className="nav-link" to={``}>
              Home
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`about`}>
              About
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`portfolio`}>
              Portfolio
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`services`}>
              Services
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`contact`}>
              Contact
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`blog`}>
              Blog
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
