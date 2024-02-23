import React from 'react'
import {Link, NavLink } from "react-router-dom";
import logo from '../../Assets/Images/profile-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink className='logo' to="/">
            <img src={logo} className="rounded-circle mx-2" width="30" height="30"/>
            <span className='logo-name'>Chandrakanth Avula</span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul class="menu">
            <li class="nav-item active">
                <NavLink class="nav-link" to="/">Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/">About</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/">Education</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/">Skill</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/">Projects</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/">Certificates</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/">Contact</NavLink>
            </li>
        </ul>





 {/* <NavLink to={link} tag={Link} className="logo">
        <span style={{ color: theme.text }}> &lt;</span>
        <span className="logo-name" style={{ color: theme.text }}>
          {greeting.logo_name}
        </span>
        <span style={{ color: theme.text }}>/&gt;</span>
      </NavLink> 
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu" style={{ backgroundColor: theme.body }}>
        <li>
          <NavLink
            to="/home"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ color: theme.text }}
            onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ color: theme.text }}
            onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ color: theme.text }}
            onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ color: theme.text }}
            onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Contact Me
          </NavLink>
        </li>
      </ul> 
      */}

    </header>
  );
/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-flex justify-content-between" href="/">
        <img src={logo} alt="Profile Picture" class="rounded-circle mx-2" width="30" height="30" />
        Chandrakanth Avula
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Education</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Skill</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Certificates</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Contact</a>
            </li>
        </ul>
    </div>
  </div>
</nav>   */
}

export default Navbar;