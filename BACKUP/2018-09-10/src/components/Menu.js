import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { db } from "../db/db";
import App from "../containers/App";
import App1 from "../containers/App1";
import App2 from "../containers/App2";
import Wizard from "../containers/Wizard";

import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Switch,
  Redirect,
  Link
  // etc.
} from "react-router-dom";

function Home() {
  alert("Home");
}

const Hello = () => {
  return <div>Hello</div>;
};
const GoodBye = () => {
  return <div>GoodBye</div>;
};

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  callBack = data => {
    console.log("Call Back Called");
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log("name:", name);
    if (name === "getdata") {
      //  db(this.callBack);
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu secondary>
          <Menu.Item
            name="home"
            as={Link}
            to="/home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            as={Link}
            to="/message"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="getdata"
            as={Link}
            to="/getdata"
            active={activeItem === "getdata"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Route path="/home" component={App} />
        <Route path="/message" exact component={App1} />
        <Route path="/getdata" component={Wizard} />
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={GoodBye} />
      </div>
    );
  }
}
