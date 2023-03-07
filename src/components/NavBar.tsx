import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/main">Home</Link>
        <Link to="/reservations">Reservation</Link>
      </ul>
    </div>
  );
};

export default NavBar;
