import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // const [click, setClick] = useState(false)

  // const handleclick =()=>{
  //   setClick(!click)
  // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Lenskart
          </Link>
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
                <Link className="navs nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navs nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navs nav-link active" aria-current="page" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navs nav-link active" aria-current="page" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
              <i className="smallicon fa fa-filter"></i>
              <i className="smallicon fa fa-plus-circle"></i>
              <i className="smallicon fa fa-search"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar