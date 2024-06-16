import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const NavbarAdmin = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" >
        <a className="navbar-brand" href="#">CarRental</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            
          <li className="nav-item">
              <Link className="nav-link" to="postcar">Post car</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="carpost">Add Car</Link>
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

export default NavbarAdmin;