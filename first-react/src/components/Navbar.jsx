  import React from 'react'
  import PropTypes from 'prop-types'
  // import { Link } from 'react-router-dom'
  export default function NavBar(props) {
    return (

      <nav className={`navbar navbar-expand navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          {/* <Link className={`navbar-brand text-${props.mode === 'dark' ? 'white' : 'dark'}`} to="/">{props.title}</Link> */}
           <a className={`navbar-brand text-${props.mode === 'dark' ? 'white' : 'dark'}`} href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className={`nav-link text-${props.mode === 'dark' ? 'white' : 'dark'}`} to="/about" >{props.aboutText}</Link> */}

                 <a className={`nav-link text-${props.mode === 'dark' ? 'white' : 'dark'}`} href="#" >{props.aboutText}</a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'dark' ? 'white' : 'dark'}`} htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>

        </div>
      </nav>

    )
  }

  NavBar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
  }