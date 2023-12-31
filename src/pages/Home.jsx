import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/macbookairone">MacBookAirOne</Link>
        </li>
        <li>
          <Link to="/userdashboard">UserDashboard</Link>
        </li>
        <li>
          <Link to="/um6moodtrackerjournal">UM6MOODTRACKERJOURNAL</Link>
        </li>
        <li>
          <Link to="/myjournal">Myjournal</Link>
        </li>
        <li>
          <Link to="/moodtracker">Moodtracker</Link>
        </li>
        <li>
          <Link to="/um5tacklingdepression">UM5TACKLINGDEPRESSION</Link>
        </li>
        <li>
          <Link to="/um3audiovideoinputs">UM3AUDIOVIDEOINPUTS</Link>
        </li>
        <li>
          <Link to="/audioinput">Audioinput</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
