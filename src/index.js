import React from "react";
import ReactDOM from "react-dom";
import Wizard from "./containers/Wizard";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import Menu from "./components/Menu";

import App from "./containers/App";
import App1 from "./containers/App1";
import App2 from "./containers/App2";

import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Switch,
  Redirect,
  Link
  // etc.
} from "react-router-dom";

const Hello = () => {
  return <div>Hello</div>;
};
const GoodBye = () => {
  return <div>GoodBye</div>;
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Menu />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
