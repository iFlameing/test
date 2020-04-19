import React from "react";
import { Link } from "react-router-dom";

import ScrollspyNav from "./scrollSpy";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tab: "" };
  }

  /**
   * Sets active tab
   */
  setActiveTab = (tab, e) => {
    this.setState({ Tab: tab });
  };

  render() {
    const pStyle = {
      height: "60px",
    };
    return (
      <React.Fragment>
        <nav
          id="main_navbar"
          className="navbar navbar-expand-lg  fixed-top navbar-custom sticky sticky-light navbar-light bg-light"
        >
          <div className="container">
            <Link className="navbar-brand logo" to="/">
              <img src="images/logo.png" alt="logo.png" style={pStyle} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ScrollspyNav
                scrollTargetIds={[
                  "home",
                  "services",
                  "about",
                  // "features",
                  // "pricing",
                  // "clients",
                  // "blog",
                  "contact",
                ]}
                activeNavClass="active"
                scrollDuration="800"
                className="ml-auto"
              >
                <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                  <li className="nav-item active">
                    <a href="#home" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a href="#features" className="nav-link">
                      Features
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="#blog" className="nav-link">
                      Blog
                    </a>
                  </li> */}

                  <li className="nav-item">
                    <a href="#contact" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a href="/signin" className="nav-link">
                      Sign-In
                    </a>{" "}
                  </li> */}
                </ul>
              </ScrollspyNav>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
