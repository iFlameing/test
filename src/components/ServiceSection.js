import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class ServiceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: [
        {
          image: "images/dataanalysis.jpg",
          title: "Data Analysis",
          content: [
            "Finding helpful and unbiased inferences which can then be used for further decision making.",
          ],
        },
        {
          image: "images/software.jpg",
          title: "Software Products",
          content: [
            "Building scalable software products to accelerate your work.",
          ],
        },
        {
          image: "images/dataanalysis.jpg",
          title: "Security Analysis",
          content: [
            "Finding security vulnerabilities in your existing software stack and fixing them.",
          ],
        },
        {
          image: "images/Training.jpg",
          title: "Training",
          content: [
            "Training students and professionals on various software and security technologies.",
          ],
        },
        {
          image: "images/consulting.jpg",
          title: "Consulting",
          content: [
            "Have a tech team already? Learn how to utilize that most to build best products.",
          ],
        },
        {
          image: "images/Events.jpg",
          title: "Events",
          content: ["Organizing tech meetups, conferences and events."],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    Our Services
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </Col>
            </Row>

            <Row className="service-row">
              {this.state.ServiceList.map((service, index) => {
                return (
                  <Col
                    lg="6"
                    key={index}
                    className="service-col1"
                    style={{ marginBottom: "5em" }}
                  >
                    <div className="service-box rounded align-center service-col justify-content-center ">
                      <div className="service-icon ">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            marginBottom: "10em",
                          }}
                          src={service.image}
                          alt={`${service.image}`}
                        />
                      </div>
                      <div className="services-desc">
                        <div
                          className="service-title mb-2 position-relative"
                          style={{ top: "0.5em" }}
                        >
                          <h5 className="font-weight-normal mb-3">
                            <Link to="#" className="text-dark">
                              {service.title}
                            </Link>
                          </h5>
                        </div>
                        <ul className="text-muted  f-14">
                          {service.content.map((list) => (
                            <li style={{ listStyleType: "none" }}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ServiceSection;
