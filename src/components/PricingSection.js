import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class PricingSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PlaneList: [
        {
          name: "Carbadex",
          price: "3999",
          image: "images/pricing/about_img.JPG"
        },
        {
          name: "Separator Box ",
          price: "1899",
          image: "images/pricing/separator_box.jpg"
        },
        {
          name: "Throttling Device",
          price: "1099",
          image: "images/pricing/throttling_device.jpg"
        },
        {
          name: "Intake Manifold",
          price: "699",
          image: "images/pricing/manifolds.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="pricing">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    Our Pricing
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </Col>
            </Row>
            <div className="row">
              {this.state.PlaneList.map((plan, index) => {
                return (
                  <Col lg="3" md="6" key={index} className="height-100-per">
                    <div
                      className={
                        plan.is_active
                          ? "pricing-box active mt-4"
                          : "pricing-box mt-4"
                      }
                    >
                      <div className="price bg-light position-relative p-4">
                        <div className="">
                          <h5 className="text-dark title mt-2 font-weight-normal f-18 mb-0">
                            {plan.name}
                          </h5>
                        </div>
                        <div className="">
                          <h2 className="text-dark font-weight-normal text-right mb-0">
                            <sup>Rs</sup>
                            {plan.price}
                          </h2>
                        </div>
                      </div>
                      <div className="p-4 pricing-list">
                        <ul className="list-unstyled mb-0">
                          <img
                            className="img-thumbnail"
                            src={plan.image}
                            alt={plan.image}
                          />
                        </ul>
                      </div>
                      <div className="pl-4 mb-4 mt-2">
                        <Link
                          to="#"
                          className={
                            plan.is_active
                              ? "btn btn-outline btn-sm active"
                              : "btn btn-outline btn-sm"
                          }
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PricingSection;
