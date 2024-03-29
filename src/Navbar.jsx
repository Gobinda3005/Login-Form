import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">B<span className='badge bg-danger text-light'>F</span>W</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subscription</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
