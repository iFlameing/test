import React from "react";
import { Row, Col } from "reactstrap";

class AboutSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-about bg-light-about bg-light"
          id="about"
        >
          <div className="container">
            <Row>
              <Col lg="4">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    About Us
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-2 font-weight-light text-capitalise">
                    Who we are
                  </h3>
                  <p>
                    A team of motivated engineers and economist who are building
                    next generation software using artificial intelligence,
                    machine learning and large scale data analysis.
                  </p>
                </div>
              </Col>
              <Col lg="6" className=" about-img">
                <img src="images/3081629.jpg" alt="" className="img-fluid" />
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default AboutSection;
