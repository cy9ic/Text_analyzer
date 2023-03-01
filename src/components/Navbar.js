import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import About from "./About"/


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg  bg-${props.mode} `}>
    <div className="container-fluid">
      <a className="navbar-brand  " href="/" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href='/about'>About us</a> */}
            {/* <Link className="nav-link" to='/about'>About us</Link> */}

          </li>
        </ul>
      </div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired, 
    pricetag : PropTypes.string}

Navbar.defaultProps = {
    title: "Set title",
    pricetag : "Select currency"}