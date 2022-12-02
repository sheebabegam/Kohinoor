import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./MainNav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import kohinoor_logo from "../../../assets/images/kohinoor_logo.png";
import search_ic from "../../../assets/images/search_ic.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Drop_Header from "../../../assets/json_data/Drop_Header.json";
import headset from "../../../assets/images/headset.png";
import cart from "../../../assets/images/cart.png";

function MainNav() {
  const [isHovering, setIsHovering] = useState(false);
  const [hover, setHover] = useState();

  const handleMouseOver = (e) => {
    setHover(e);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  console.log(hover);

  const onMouseMove = () => {
    setIsHovering(true);
  };

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav1" />
        <Row className="main_nav_row">
          <Col xs={2}>
            <Navbar.Brand href="/">
              <img
                src={kohinoor_logo}
                width="200"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xs={8}>
            <label htmlFor="copy-button">
              <Dropdown id="icon1">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic_main_navbar"
                >
                  All Categories
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop_menu_items_main_nav">
                  {Drop_Header.map((items, i) => (
                    <Dropdown.Item
                      href="#"
                      className="drop_items_main_nav"
                      onMouseOver={() => handleMouseOver(items.id)}
                      // onMouseOut={handleMouseOut}
                    >
                      {items.type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <span className="line_vr_main_nav"></span>
              <input
                name="search_main_nav"
                aria-label="search_main_nav"
                placeholder="Search for products, brands & more"
                className="search_input_main_nav"
              />
              <img id="icon" src={search_ic} alt="icon" />
            </label>

            <div
              className="side_dropdown_main_nav"
              style={isHovering ? { display: "block" } : { display: "none" }}
              onMouseOver={onMouseMove}
              onMouseOut={handleMouseOut}
            >
              <Row className="main_row">
                <Row
                  className="row col-9"
                  style={{ width: "82%", padding: "13px" }}
                >
                  {/* sushmitha.a@colanonline.com */}
                  {Drop_Header.map(
                    (prod, i) =>
                      hover === prod.id &&
                      prod.brands.map((list, j) => (
                        <Col xs={4} className="first_col_dropdown_sub_main_nav">
                          <h6 className="bluetooth_speakers_h6">
                            {list.brandName}
                          </h6>
                          <hr className="underline_yellow_mainNav_dropdown" />
                          {list.products.map((myprod, k) => (
                            <ul className="sub_dropdown_ul">
                              <li className="mainNav_li">{myprod.name}</li>
                            </ul>
                          ))}
                        </Col>
                      ))
                  )}
                </Row>
                <div className="col-3">
                  {Drop_Header.map(
                    (prod, i) =>
                      hover === prod.id && (
                        <Col
                          xs={3}
                          className="last_col_dropdown_sub_main_nav"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={prod.img}
                            alt="img"
                            className="image_dropdown_mainNav"
                          />
                          <button className="mainNav_viewAll">VIEW ALL</button>
                        </Col>
                      )
                  )}
                </div>
              </Row>
            </div>
          </Col>

          <Col xs={2} className="headset_navbar">
            <Navbar.Collapse id="responsive-navbar-nav1">
              <Nav className="mr-auto">
                <Nav.Link href="/" className="customer_care_link">
                  <img src={headset} alt="headset" className="headset_nav" />
                  Customer Care
                </Nav.Link>
                <Nav.Link href="/cart" className="my_cart_link">
                  <img src={cart} alt="headset" className="headset_nav" />
                  My Cart
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default MainNav;
