import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SiFlipkart } from "react-icons/si";


export default function Nav() {
  const navigate = useNavigate();
  let total = useSelector((state) => state.totalCart);

  return (
    <header className='sticky-top'>

      <nav
        className="navbar navbar-expand-lg p-4 align-items-center"
        style={style.nav}
      >
        <div className="container-fluid">
          <Link to="/" className="nav-link active text-light"> <a className="navbar-brand fs-3" href="#" style={style.navHead}>
          <SiFlipkart className="mx-2" />Filp-E-Kart
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-4" href="#" style={{fontSize:"1.2rem" , fontWeight:"bold", color:"#047BD5"}}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addproducts" className="nav-link active" style={{fontSize:"1.2rem" , fontWeight:"bold", color:"#047BD5"}}>
                  Add a product
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-4 position-relative">
              <img
                src="https://cdn-icons-png.flaticon.com/128/7835/7835535.png?ga=GA1.1.209717024.1687589294&semt=ais"
                alt="error"
                width={"40rem"}
                onClick={() => navigate("/cart")}
                style={{ cursor: "pointer" }}
              />
              {total ? (
                <p
                  className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    top: "21%",
                    left: "20%",
                  }}
                >
                  {total}
                </p>
              ) : (
                ""
              )}
              <img
                src="https://cdn-icons-png.flaticon.com/128/9479/9479047.png?ga=GA1.1.209717024.1687589294&semt=ais"
                alt="error"
                width={"40rem"}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
const style = {
  nav: {
    backgroundColor: "#F8E831",
  },
  navHead: {
    fontFamily: "var(--fontStyle)",
    color: " #047BD5",
    fontWeight: "bolder"
  },
};
// #9375b7