import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { path } from "../../../../assets/json_data/Hitachi";
import "./Mycart.css";
import Footer from "../../../Footer/Footer";

function Mycart() {
  const location = useLocation();
  return (
    <div className="mycart_whole_div">
      <div>
        <Container>
          <Navbar bg="white" variant="dark" expand="lg">
            {path.map((paths, i) => (
              <div key={i}>
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "breadcrumb-active"
                      : "breadcrumb-not-active"
                  }
                >
                  Home
                </Link>
                <span className="breadcrumb-arrow"> &gt; </span>
                <Link to="/cart" className="cart_breadcrumb">
                  {paths.cart}
                </Link>
              </div>
            ))}
          </Navbar>
        </Container>
      </div>

      <div>
        <Container className="cart_page_main_div">
          <div className="empty_cart">
            <h3 className="empty_cart_text">Your Cart is empty</h3>
            <p className="empty_cart_para">
              Looks like you haven’t made your choice yet
            </p>
          </div>

          <div className="emptycart_logo_div">
            <img
              src="https://www.kohinoorelectronics.com/static/assets/image/empty-cart.png"
              alt="cart"
              className="emptycart_logo"
            />
          </div>

          <div className="continue_shopping_div">
            <button className="continue_shopping_btn">Continue shopping</button>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Mycart;
