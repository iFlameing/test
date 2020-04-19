import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import ContactDetails from "./components/ContactDetails";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Layout} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/list`}
            component={ContactDetails}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

serviceWorker.register();

ReactDOM.render(<Root />, document.getElementById("root"));
