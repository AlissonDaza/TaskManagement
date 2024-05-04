import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand m-0">
          <img src={logo} alt="" width="80" height="80" className="d-inline-block align-text-top" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/tasks" className="nav-link">Active Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to="/completed-tasks" className="nav-link">Completed Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to="/new" className="nav-link">Created Task</Link>
            </li>
            <li className="nav-item">
              <Link to="/consume-api" className="nav-link">Consume API</Link>
            </li>
            <li className="nav-item">
            <Link to="/statistics" className="nav-link">Statistics</Link>
            </li>
          </ul>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/" className="nav-link">
            <button className="btn btn btn-primary me-md-2" type="button"> Log Out</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
