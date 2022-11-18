import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar_sub.css";
import map_png from "../../../assets/images/map_png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import close from "../../../assets/images/close.png";

function Navbar_sub() {
  const [login, setLogin] = useState("login");

  const setModalChange = () => {
    setLogin("login");
  };

  const setSignupModalChange = () => {
    setLogin("register");
  };
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      {/* <Navbar variant="dark" sticky="top" className="nav_sub">
        <Container className="nav_right_align">
          <Nav className="navigation_main">
            <ul className="sub_nav_ul">
              <li className="sub_nav_li">
                <Nav.Link href="/store-locator">
                  <img src={map_png} alt="marker" className="store_locator" />{" "}
                  <b className="line">Store Locator &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li className="sub_nav_li">
                <Nav.Link href="#" onClick={showSidebar}>
                  <b className="line">Track Your Order &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li className="sub_nav_li">
                <Nav.Link href="#">
                  <b className="line">My Location &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li className="sub_nav_li">
                <Nav.Link href="contact-us">
                  <b className="line">Contact Us &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li className="sub_nav_li">
                <Nav.Link href="#" onClick={setShowModal}>
                  <b className="line">Register/Sign in &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
              <li className="sub_nav_li">
                <Nav.Link href="#">
                  <b className="line">Wishlist &nbsp; &nbsp;</b>
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav_flex">
              <Nav.Link href="/store-locator" className="border_right">
                <img src={map_png} alt="marker" className="store_locator" />
                Store Locator
              </Nav.Link>
              <Nav.Link href="#" className="border_right" onClick={showSidebar}>
                Track Your Order
              </Nav.Link>
              <Nav.Link href="#" className="border_right">
                <img src={map_png} alt="marker" className="store_locator" />
                My Location
              </Nav.Link>
              <Nav.Link href="contact-us" className="border_right">
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#"
                className="border_right"
                onClick={setShowModal}
              >
                Register / Sign in
              </Nav.Link>
              <Nav.Link href="#" className="border_right">
                Wishlist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {login === "login" && (
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
              {login === "login" && (
                <div>
                  <div>
                    <div className="input-icons">
                      <i class="fa fa-user icon"></i>
                      <span className="line_vr1"></span>
                      <input
                        className="input_with_icon"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <br />

                  <div>
                    <div className="input-icons">
                      <i class="fa fa-lock icon" aria-hidden="true"></i>

                      <span className="line_vr1"></span>
                      <input
                        className="input_with_icon"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
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
                    <a
                      href="#"
                      className="signup_link"
                      onClick={setSignupModalChange}
                    >
                      Signup
                    </a>
                  </div>

                  <div class="d-flex mb-3">
                    <Button className="facebook_btn">
                      <i class="fa fa-facebook-square" aria-hidden="true"></i>{" "}
                      &nbsp; Facebook
                    </Button>

                    <Button className="google_btn">
                      <i class="fa fa-google" aria-hidden="true"></i>
                      &nbsp;Google
                    </Button>
                  </div>
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </div>

      <div>
        {login === "register" && (
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
                <div className="modal_div">
                  <div>
                    <div>
                      <div className="input-icons">
                        <i class="fa fa-user icon"></i>
                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="input-icons">
                        <i class="fa fa-mobile icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Mobile"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="input-icons">
                        <i class="fa fa-envelope icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="input-icons">
                        <i class="fa fa-lock icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="input-icons">
                        <i class="fa fa-briefcase icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Occupation"
                        />
                      </div>
                    </div>

                    <div>
                      <Button className="login_btn">Get Started</Button>
                    </div>

                    <div className="do_not_have_account_div">
                      <small>Already have an account?</small>
                      &nbsp;
                      <a
                        href="#"
                        className="signup_link"
                        onClick={setModalChange}
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </div>

      <div>
        {login === "login" && (
          <div className="modal_div">
            <div>
              <Modal show={showModal} onHide={handleClose}>
                <Modal.Body>
                  <Row style={{ width: "800px !important" }}>
                    <Col xs={4} className="blue_column">
                      <div className="welcome_modal_div">
                        <h2 className="welcome_modal">Welcome Back!</h2>
                        <h4 className="back_blue">
                          Login to manage your account.
                        </h4>
                      </div>

                      <div className="img_modal"></div>
                    </Col>
                    <Col xs={8} className="form_column_modal">
                      <div>
                        <p className="close_btn_modal" onClick={handleClose}>
                          <i class="fa fa-close"></i>
                        </p>
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
                        <div className="forget_password_div">
                          <a href="#" className="forget_password">
                            Forgot Password?
                          </a>
                        </div>

                        <div>
                          <Button className="login_btn">Login</Button>
                        </div>
                        <div className="or_div" style={{ textAlign: "center" }}>
                          <hr className="solid" />{" "}
                          <span className="or_tag">OR</span>{" "}
                          <hr className="solid" style={{ marginLeft: "5px" }} />
                        </div>

                        <div>
                          <Button className="request_btn_modal">
                            Request OTP
                          </Button>
                        </div>

                        <div className="do_not_have_account_div">
                          <small>Do not have an account?</small>
                          &nbsp;
                          <a
                            href="#"
                            className="signup_link"
                            onClick={setSignupModalChange}
                          >
                            Signup
                          </a>
                        </div>

                        <div class="d-flex mb-3" id="social_link_modal">
                          <Button className="facebook_btn">
                            <i
                              class="fa fa-facebook-square"
                              aria-hidden="true"
                            ></i>{" "}
                            &nbsp; Facebook
                          </Button>

                          <Button className="google_btn">
                            <i class="fa fa-google" aria-hidden="true"></i>
                            &nbsp;Google
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        )}

        <div>
          {login === "register" && (
            <div className="modal_div">
              <div>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Body>
                    <Row style={{ width: "800px !important" }}>
                      <Col xs={4} className="blue_column">
                        <div className="welcome_modal_div">
                          <h2 className="welcome_modal">Welcome</h2>
                          <h4 className="back_blue">
                            Fill out the form to get started.
                          </h4>
                        </div>

                        <div className="img_modal"></div>
                      </Col>
                      <Col xs={8} className="form_column_modal">
                        <div>
                          <p className="close_btn_modal" onClick={handleClose}>
                            <i class="fa fa-close"></i>
                          </p>
                          <div>
                            <div className="input-icons">
                              <i class="fa fa-user icon"></i>
                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <br />

                          <div>
                            <div className="input-icons">
                              <i
                                class="fa fa-mobile icon"
                                aria-hidden="true"
                              ></i>
                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Mobile"
                              />
                            </div>
                          </div>
                          <br />

                          <div>
                            <div className="input-icons">
                              <i
                                class="fa fa-envelope icon"
                                aria-hidden="true"
                              ></i>
                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <br />

                          <div>
                            <div className="input-icons">
                              <i class="fa fa-lock icon" aria-hidden="true"></i>

                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <br />

                          <div>
                            <div className="input-icons">
                              <i
                                class="fa fa-briefcase icon"
                                aria-hidden="true"
                              ></i>
                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Occupation"
                              />
                            </div>
                          </div>

                          <div>
                            <Button className="login_btn">Get Started</Button>
                          </div>

                          <div className="do_not_have_account_div">
                            <small>Do not have an account?</small>
                            &nbsp;
                            <a
                              href="#"
                              className="signup_link"
                              onClick={setModalChange}
                            >
                              Login
                            </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar_sub;
