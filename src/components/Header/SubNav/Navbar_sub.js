import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar_sub.css";
import map_png from "../../../assets/images/map_png.png";

function Navbar_sub() {
  return (
    <>
      <Navbar variant="dark" sticky="top" className="nav_sub">
        <Container className="nav_right_align">
          <Nav className="ml-auto">
            <ul>
              <li>
                <Nav.Link href="/store-locator">
                  <img src={map_png} alt="marker" className="store_locator" />{" "}
                  <b className="line">Store Locator &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#">
                  <img
                    class="icon"
                    src="https://i.imgur.com/TkPm63y.png"
                    alt="order"
                    className="store_locator"
                  />
                  <b className="line">Track Your Order &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#">
                  <b className="line">My Location &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="contact-us">
                  <b className="line">Contact Us &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#">
                  <b className="line">Register/Sign in &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#">
                  <b className="line">Wishlist &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar_sub;
