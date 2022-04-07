import React from "react";
import "./layout.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="/">
          React Uploader
        </a>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="d-flex justify-content-center bg-light">
      <h4 className="text-primary">
        &copy; {new Date().getFullYear()} aungkhant
      </h4>
    </footer>
  );
};
