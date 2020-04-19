import React from "react";
import { Row, Col } from "reactstrap";

class ProductSection extends React.Component {
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
                    Our Products
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </Col>
            </Row>
            <Row
              className="align-items-center product"
              style={{ marginLeft: "5em" }}
            >
              <Col lg="6" className=" product-img">
                <div className="card" style={{ width: "85%" }}>
                  {/* <img
                    src="images/3.jpg"
                    alt=""
                    classNameName="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>{" "}
              </Col>
              <Col lg="6" className=" product-img">
                <div className="card" style={{ width: "85%" }}>
                  {/* <img
                    src="images/3.jpg"
                    alt=""
                    classNameName="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>{" "}
              </Col>
            </Row>
            <Row className="align-items-center" style={{ marginLeft: "5em" }}>
              <Col lg="6" className=" product-img">
                <div className="card" style={{ width: "85%" }}>
                  {/* <img src="images/3.jpg" alt="" classNameName="img-fluid" /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>{" "}
              </Col>
              <Col lg="6" sm="12" className="product-img">
                <div className="card" style={{ width: "100%" }}>
                  {/* <img
                    src="images/3.jpg"
                    alt=""
                    classNameName="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ProductSection;
