import React, { Component } from "react";
// import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
import "./Navbar.css"; 
export class NavBar extends Component {
  //   static propTypes = {

  //   }

  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/general" style={{color:'white'}}>
              Newshour
            </a>
            {/* <button
              className="navbar-hrefggler"
              type="button"
              data-bs-hrefggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="hrefggle navigation"
            >
              <span className="navbar-hrefggler-icon"></span>
            </button> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auhref mb-2 mb-lg-0" style={{color:'Black'}}>
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li> */}
                {/* <li className="nav-item"><a className="nav-link" href="/">About</a></li> */}
                  <li className="nav-item"><a className="nav-link" href="/business" style={{color:'white'}}>Business</a></li>
                  <li className="nav-item"><a className="nav-link" href="/entertainment" style={{color:'white'}}>Entertainment</a></li>
                  {/* <li className="nav-item"><a className="nav-link" href="/general">General</a></li> */}
                  <li className="nav-item"><a className="nav-link" href="/health" style={{color:'white'}}>Health</a></li>
                  <li className="nav-item"><a className="nav-link" href="/science" style={{color:'white'}}>Science</a></li>
                  <li className="nav-item"><a className="nav-link" href="/sports" style={{color:'white'}}>Sports</a></li>
                  <li className="nav-item"><a className="nav-link" href="/technology" style={{color:'white'}}>Technology</a></li>
                    
                
                {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-hrefggle" href="/" role="button" data-bs-hrefggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/">Action</Link></li>
                    <li><Link className="dropdown-item" href="/">Another action</Link></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><Link className="dropdown-item" href="/">Something else here</Link></li>
                </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link disabled" href ="/"aria-disabled="true">Disabled</Link>
                </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
