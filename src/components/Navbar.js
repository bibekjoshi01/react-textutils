import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to='/textform' className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-link active" href="/">About Developer</Link>
            </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick= {props.toggleMode} role="switch" aria-checked="false" id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.modetext} Dark Mode</label>   
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}


Navbar.propTypes = {
    title: propTypes.string,
    aboutText: propTypes.string
}