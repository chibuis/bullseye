import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" >
        <a className="navbar-brand" href="#">CarRental</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="carlisting">Car listing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cardescription">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="date">Date</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="carpost">Add Car</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="postcar">Post car</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="register">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>

  );
};

export default Navbar;