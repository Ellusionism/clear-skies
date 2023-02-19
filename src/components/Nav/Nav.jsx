import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from './components/LogOutButton/LogOutButton';

function Nav() {
  const history = useHistory();

  const reflectionLink = () => {
    history.push('/home');
  }

  const reviewLink = () => {
    history.push('/review');
  }

  const aboutLink = () => {
    history.push('/about');
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                className="nav-link"
                onClick={reflectionLink}
                data-mdb-toggle="collapse"
                data-mdb-target=".navbar-collapse.show"
                >Reflections</a>
              </li>
              <li className="nav-item">
                <a
                className="nav-link"
                onClick={reviewLink}
                data-mdb-toggle="collapse"
                data-mdb-target=".navbar-collapse.show"
                >Review</a>
                </li>
                <li className="nav-item">
                <a
                className="nav-link"
                onClick={aboutLink}
                data-mdb-toggle="collapse"
                data-mdb-target=".navbar-collapse.show"
                >About</a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}

          {/* Right elements */}
          <div className="d-flex align-items-center">

            {/* Log Out Button */}
            <div className="dropdown">
              <LogOutButton />
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
}

export default Nav;
