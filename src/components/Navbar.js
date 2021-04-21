import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
          <Link
            to="/"
            title="Star Wars"
            className="nav-text"
            onClick={closeMobileMenu}
          >
            <p> Star Wars</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/people"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/planets"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/starships"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Starships
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
}

export default Navbar
