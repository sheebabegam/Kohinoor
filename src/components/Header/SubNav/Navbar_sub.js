import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar_sub.css";
import map_png from "../../../assets/images/map_png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

function Navbar_sub() {
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);
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
                <Nav.Link href="#" onClick={showSidebar}>
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

      <Offcanvas placement="end" show={show} onHide={closeSidebar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="welcome_sidebar_div"></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Title className="welcome_sidebar_div">
          Welcome Back!
        </Offcanvas.Title>
        <p className="login_manage">Login to manage your account.</p>
        <br />

        <Offcanvas.Body>
          <div>
            <div class="input-group">
              <span class="input-group-append">
                <button className="user_icon" type="button">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </span>
              <input
                className="input_user_icon"
                type="text"
                placeholder="Enter Email/Mobile number"
                id="example-search-input"
              />
            </div>
            <br />

            <div class="input-group">
              <span class="input-group-append">
                <button className="user_icon" type="button">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </button>
              </span>
              <input
                className="input_user_icon"
                type="text"
                placeholder="Password"
                id="example-search-input"
              />
            </div>

            <br />
            <div>
              <a href="#" className="forget_password">
                Forgot Password?
              </a>
            </div>

            <div>
              <Button className="login_btn">Login</Button>
            </div>
            <div className="or_div" style={{ textAlign: "center" }}>
              <hr className="solid" /> <span className="or_tag">OR</span>{" "}
              <hr className="solid" style={{ marginLeft: "5px" }} />
            </div>

            <div>
              <Button className="request_btn">Request OTP</Button>
            </div>

            <div className="do_not_have_account_div">
              <small>Do not have an account?</small>
              &nbsp;
              <a href="#" className="signup_link">
                Signup
              </a>
            </div>

            <div class="d-flex mb-3">
              <Button className="facebook_btn">
                <i class="fa fa-facebook-square" aria-hidden="true"></i> &nbsp;
                Facebook
              </Button>

              <Button className="google_btn">
                <i class="fa fa-google" aria-hidden="true"></i>
                &nbsp;Google
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar_sub;
