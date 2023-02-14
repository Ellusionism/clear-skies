import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './components/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
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
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
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
    // <div classNameName="nav">
    //   <Link to="/home">
    //     <h2 classNameName="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     {/* If no user is logged in, show these links */}
    //     {!user.id && (
    //       // If there's no user, show login/registration links
    //       <Link classNameName="navLink" to="/login">
    //         Login / Register
    //       </Link>
    //     )}

    //     {/* If a user is logged in, show these links */}
    //     {user.id && (
    //       <>
    //         <Link classNameName="navLink" to="/user">
    //           Home
    //         </Link>

    //         <Link classNameName="navLink" to="/info">
    //           Info Page
    //         </Link>

    //         <LogOutButton classNameName="navLink" />
    //       </>
    //     )}

    //     <Link classNameName="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
//   );
// }

{/* <a
  className="dropdown-toggle d-flex align-items-center hidden-arrow"
  href="#"
  id="navbarDropdownMenuAvatar"
  role="button"
  data-mdb-toggle="dropdown"
  aria-expanded="false"
>
  <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
    className="rounded-circle"
    height="25"
    alt="Black and White Portrait of a Man"
    loading="lazy"
  />
</a> */}

export default Nav;
