import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          {/* switch button */}
          {/*yhn jo  me n text light jo clas rkhi thi usko chnge kr ke ternitary operation se ke wo abh depend kregi mode pr take text nazr asake so making this className staring by ` ` and using js in it and dollar sign so call any variables */}
          {/* just changing text color on white to black and from black to wh */}
          {/* this explains when props.modes which light is === to light then ot becomes dark otherwise it becomes lights when black on text */}
          <div className={`form-check form-switch text-${props.modes==='light'?'dark':'light'} `}>
            <input
              className="form-check-input"
              //this toggle function will run when anyon click omn the swithc button so using onclik event
              // calling props of fucntion in onclick event 
              onClick={props.toggleModes}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
                Enable Dark Mode    </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
