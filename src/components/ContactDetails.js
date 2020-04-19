import React from "react";
import axios from "axios";
import { API } from "../config";
import { Table } from "reactstrap";

class ContactDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      details: []
    };
  }

  componentDidMount() {
    axios
      .get(`${API}/list`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        this.setState({ details: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-about bg-light-about bg-light"
          id="about"
        >
          <div className="container">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {this.state.details.length &&
                  this.state.details.map((elem, i) => (
                    <tr key={i}>
                      <th>{elem.name}</th>
                      <td>{elem.email}</td>
                      <td>{elem.subject}</td>
                      <td>{elem.message}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ContactDetails;
