import React from "react";
import { Row, Col } from "reactstrap";

class Home extends React.Component {
  componentDidMount() {
    document.getElementById("main_navbar").classList.add("navbar-light");
  }

  render() {
    return (
      <React.Fragment>
        <section className="section home-8-bg" id="home">
          <div className="container">
            <Row className="align-items-center">
              <Col lg="6" className="home-text">
                <div></div>
                <div className="title-heading mb-5">
                  <h2 className="text-dark mb-4 font-weight-bold text-capitalise">
                    Building fast, beautiful, scalable software
                  </h2>
                  <p>
                    Automate your workflow and get insights from the data
                    generated. Make your presence on internet secure. Get
                    yourself armed with latest technologies and data trends.
                  </p>
                </div>
              </Col>
              <Col lg="6" className=" home-img">
                <img
                  src="images/software.jpg"
                  alt=""
                  className="img-fluid home-img"
                />
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Home;
