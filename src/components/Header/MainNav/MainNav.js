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
        <Row>
          <Col>
            <Navbar.Brand href="#home">
              <img
                src={kohinoor_logo}
                width="200"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col>
            <label htmlFor="copy-button">
              <button id="icon1">All Categories &nbsp; &nbsp; &nbsp;</button>
              <input
                name="copy-button"
                aria-label="copy-button"
                placeholder="Search for products, brands & more"
                className="search_input"
              />
              <img id="icon" src={search_ic} alt="icon" />
            </label>
          </Col>

          <Col>
            <Navbar.Collapse id="responsive-navbar-nav1">
              <Nav className="mr-auto">
                <Nav.Link href="/">Customer Care</Nav.Link>
                <Nav.Link href="/profile">My Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default MainNav;
