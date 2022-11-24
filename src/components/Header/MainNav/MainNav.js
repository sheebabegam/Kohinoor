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

function MainNav() {
  return (
    // <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    //   <Container fluid>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={kohinoor_logo}
    //         width="200"
    //         height="60"
    //         className="d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //     </Navbar.Brand>
    //     <label htmlFor="copy-button">
    //       <button id="icon1">All Categories &nbsp; &nbsp; &nbsp;</button>
    //       <input
    //         name="copy-button"
    //         aria-label="copy-button"
    //         placeholder="Search for products, brands & more"
    //         className="search_input"
    //       />
    //       <img id="icon" src={search_ic} alt="icon" />
    //     </label>
    //     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //     <Nav.Link href="#">
    //       <b>Customer Care &nbsp; &nbsp;</b>
    //     </Nav.Link>
    //     <Nav.Link href="#">
    //       <b>My Cart</b>
    //     </Nav.Link>
    //   </Container>
    // </Navbar>

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
              {/* <button id="icon1">All Categories &nbsp; &nbsp; &nbsp;</button> */}
              <Dropdown id="icon1">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic_main_navbar"
                >
                  All Categories
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop_menu_items_main_nav">
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    REFRIGERATOR
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Accessories
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Air Conditioner
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Computers
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Game Zone
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Home Appliances
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Home Entertainment
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Smart Phone
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="drop_items_main_nav">
                    Tablets
                  </Dropdown.Item>
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
          </Col>

          <Col xs={2}>
            <Navbar.Collapse id="responsive-navbar-nav1">
              <Nav className="mr-auto">
                <Nav.Link href="/" className="customer_care_link">
                  Customer Care
                </Nav.Link>
                <Nav.Link href="/cart" className="my_cart_link">
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
