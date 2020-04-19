import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { API } from "../config";

class ContactSection extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "", subject: "", message: "" };
  }

  changeHandler = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  submitHandler = (e) => {
    const { name, email, subject, message } = this.state;
    if (name && email && subject && message) {
      axios
        .post(`${API}/contact`, this.state, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          window.alert("Succefully send");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <React.Fragment>
        <section className="section bg-light" id="contact">
          <div className="container">
            <div className="row">
              <Col lg="12">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    Get in touch
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </Col>
            </div>

            <Row>
              <Col lg="12">
                <div className="contact-box p-5">
                  <Row>
                    <Col lg="8" md="6">
                      <div className="custom-form p-3">
                        <div id="message"></div>
                        <AvForm id="contact-form" onSubmit={this.submitHandler}>
                          <Row>
                            <Col lg="6">
                              <div className="form-group app-label">
                                <AvField
                                  name="name"
                                  type="text"
                                  validate={{ required: { value: true } }}
                                  placeholder="Name"
                                  value={name}
                                  onChange={(e) =>
                                    this.changeHandler(e, "name")
                                  }
                                />
                              </div>
                            </Col>
                            <Col lg="6">
                              <div className="form-group app-label">
                                <AvField
                                  name="email"
                                  type="text"
                                  errorMessage="Invalid Email"
                                  validate={{
                                    required: { value: true },
                                    email: { value: true },
                                  }}
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) =>
                                    this.changeHandler(e, "email")
                                  }
                                />
                              </div>
                            </Col>
                            <Col lg="12">
                              <div className="form-group app-label">
                                <AvField
                                  name="subject"
                                  type="text"
                                  validate={{ required: { value: true } }}
                                  placeholder="Subject"
                                  value={subject}
                                  onChange={(e) =>
                                    this.changeHandler(e, "subject")
                                  }
                                />
                              </div>
                            </Col>
                            <Col lg="12">
                              <div className="form-group app-label">
                                <AvField
                                  name="comments"
                                  type="textarea"
                                  validate={{ required: { value: true } }}
                                  rows="5"
                                  placeholder="Message"
                                  value={message}
                                  onChange={(e) =>
                                    this.changeHandler(e, "message")
                                  }
                                />
                              </div>
                            </Col>
                            <Row>
                              <Col sm="12">
                                &nbsp; &nbsp;{" "}
                                <input
                                  type="submit"
                                  className="submitBnt btn btn-custom"
                                  value="Send Message"
                                />
                                <div id="simple-msg"></div>
                              </Col>
                            </Row>
                          </Row>
                        </AvForm>
                      </div>
                    </Col>

                    <div className="col-lg-4 col-md-6">
                      <div className="contact-cantent p-3">
                        <div className="contact-details">
                          <div className="float-left contact-icon mr-3 mt-2">
                            <i className="mdi mdi-headphones text-muted h5"></i>
                          </div>
                          <div className="app-contact-desc text-muted pt-1">
                            <p className="mb-0 info-title f-13">Call :</p>
                            <div className="mb-0 f-13">
                              <p>+91-9466400301</p>
                            </div>
                          </div>
                        </div>

                        <div className="contact-details mt-2">
                          <div className="float-left contact-icon mr-3 mt-2">
                            <i className="mdi mdi-email-outline text-muted h5"></i>
                          </div>
                          <div className="app-contact-desc text-muted pt-1">
                            <p className="mb-0 info-title f-13">Email :</p>
                            <p className="mb-0 f-13">
                              <a
                                href="mailto:pulkit@pravegak.in"
                                target="_top"
                                className="text-muted"
                              >
                                pulkit@pravegak.in
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="contact-details mt-2">
                          <div className="float-left contact-icon mr-3 mt-2">
                            <i className="mdi mdi-map-marker text-muted h5"></i>
                          </div>
                          <div className="app-contact-desc text-muted pt-1">
                            <p className="mb-0 info-title f-13">Location :</p>
                            <div className="mb-0 f-13">
                              <p className="text-muted">Bhiwani, Haryana</p>
                            </div>
                          </div>
                        </div>

                        <div className="follow mt-4">
                          <h4 className="text-dark mb-3">Follow</h4>
                          <ul className="follow-icon list-inline mt-32 mb-0">
                            <li className="list-inline-item f-15">
                              <Link to="#" className="social-icon text-muted">
                                <i className="mdi mdi-facebook"></i>
                              </Link>
                            </li>
                            &nbsp;
                            <li className="list-inline-item f-15">
                              <Link to="#" className="social-icon text-muted">
                                <i className="mdi mdi-twitter"></i>
                              </Link>
                            </li>
                            &nbsp;
                            <li className="list-inline-item f-15">
                              <Link to="https://www.linkedin.com/company/pravegak" className="social-icon text-muted">
                                <i className="mdi mdi-linkedin"></i>
                              </Link>
                            </li>
                            &nbsp;
                            <li className="list-inline-item f-15">
                              <Link to="#" className="social-icon text-muted">
                                <i className="mdi mdi-whatsapp"></i>
                              </Link>
                            </li>
                            &nbsp;
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ContactSection;
