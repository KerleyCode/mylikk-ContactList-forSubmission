import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
  <div className="d-flex justify-content-between align-items-center w-100">
    <div></div>
    <div>
      <Link to="/demo">
        <button className="btn btn-success">Add new contact</button>
      </Link>
    </div>
  </div>
</nav>
	);
};
