import React from 'react';
import PropTypes from 'prop-types'; // corrected from 'proTypes' to 'PropTypes'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark `}>
      <div className="container-fluid">
        {/* Setting a custom color for the navbar-brand (heading) */}
        <b><Link className="navbar-brand" style={{color:'white'}} to="/" >{props.title}</Link></b>
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
              <Link className="nav-link active" aria-current="page" style={{color:'white'}} to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link active" aria-current="page" style={{color:'white'}} to="/about">About</Link>
            </li>
          </ul>

          <div className="d-flex">
            <div className = "bg-primary rounded mx-2" onClick={()=>{props.ToggleMode('primary')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid #bb0084'}}></div>
            <div className = "bg-danger rounded mx-2" onClick={()=>{props.ToggleMode('danger')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid #bb0084'}}></div>
            <div className = "bg-warning rounded mx-2" onClick={()=>{props.ToggleMode('warning')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid #bb0084'}}></div>
            <div className = "bg-info rounded mx-2" onClick={()=>{props.ToggleMode('info')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid #bb0084'}}></div>
            <div className = "bg-secondary rounded mx-2" onClick={()=>{props.ToggleMode('secondary')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid #bb0084'}}></div>
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