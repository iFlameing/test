import React from "react";
import { Row, Col } from "reactstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

// const styles = { height: 400, width: "50%" };

class TeamsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
    };
  }
  onSelect = (active, direction) => { };
  visiableOnSelect = (active) => { };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-clients" id="clients">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-heading mb-5">
                  <h3 className="text-white mb-1 font-weight-light text-uppercase">
                    Our Teams
                  </h3>
                  <div className="title-border-color position-relative"></div>
                </div>
              </div>
            </div>

            <Row>
              <Col span={12} style={{ marginTop: 20 }}>
                <RBCarousel
                  version={4}
                  autoplay={this.state.autoplay}
                  pauseOnVisibility={true}
                  onSelect={this.visiableOnSelect}
                  slideshowSpeed={2000}
                >
                  <div className="item">
                    <Row>
                      <TeamInfo
                        department="POST"
                        img="photo"
                        name="John Doe"
                      />
                    </Row>
                    <Row>
                      <TeamInfo
                      />
                    </Row>
                  </div>
                </RBCarousel>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const TeamInfo = (props) => (
  <Col lg="4">
    <div className="testi-content">
      <div className="mt-2">
        <div className="float-right ml-3">
          <div className="client-img">
            <img src={props.img} alt="" className="img-fluid rounded-circle" />
          </div>
        </div>
        <div className="clients-name text-right pt-3">
          <h6 className="text-white font-weight-normal position-relative f-17 mb-0">
            <span className="after-border"></span> {props.name}
          </h6>
          <p className="text-white-70 f-13 mb-0">{props.department}</p>
        </div>
      </div>
    </div>
  </Col>
);
export default TeamsSection;
