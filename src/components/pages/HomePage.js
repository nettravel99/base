import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page className="ui container"</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
