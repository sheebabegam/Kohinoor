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

function MainNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={kohinoor_logo}
            width="200"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
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
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Nav.Link href="#">
          <b>Customer Care &nbsp; &nbsp;</b>
        </Nav.Link>
        <Nav.Link href="#">
          <b>My Cart</b>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default MainNav;
