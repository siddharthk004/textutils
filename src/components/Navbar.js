import React from 'react';
import PropTypes from 'prop-types'; // corrected from 'proTypes' to 'PropTypes'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        {/* Setting a custom color for the navbar-brand (heading) */}
        <b><Link className="navbar-brand" to="/" >{props.title}</Link></b>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            {/* <li>
              <Link className="nav-link active" aria-current="page" to="/">{props.abouttext}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li> */}
          </ul>

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          
          {/* <button type="button" class="btn btn-outline-primary">Blue</button>
          <button type="button" class="btn btn-outline-secondary">Grey</button>
          <button type="button" class="btn btn-outline-success">Green</button>
          <button type="button" class="btn btn-outline-danger">Red</button>
          <button type="button" class="btn btn-outline-warning">Yellow</button>
          <button type="button" class="btn btn-outline-info">SkyBlue</button>
          <button type="button" class="btn btn-outline-dark">Black</button>
           */}
          <div mx-2 className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Siddhu',
  abouttext: 'I am here'
}