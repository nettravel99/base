import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Wizard from "./containers/Wizard";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import Menu from "./components/Menu";
import App from "./App";
import {userLoggedIn} from './actions/auth'

import {
  BrowserRouter,
  StaticRouter, // for server rendering
  Route,
  Switch,
  Redirect,
  Link
  // etc.
} from "react-router-dom";



if (localStorage.UserJWT)
{
  const user = {token: localStorage.UserJWT};
  store.dispatch(userLoggedIn(user));
}




const Hello = () => {
  return <div>Hello</div>;
};
const GoodBye = () => {
  return <div>GoodBye</div>;
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
