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
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar_sub() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("login");

  const setModalChange = () => {
    setLogin("login");
  };

  const setSignupModalChange = () => {
    setLogin("register");
  };

  const [myotp, setMyOtp] = useState(false);

  const setOTPChange = () => {
    setLogin("myotp");
  };
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uname", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("occupation", occupation);

    await axios
      .post("http://192.168.1.195:5000/signup/", formData) // daniel@yopmail.com // Daniel@123
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setMyOtp(true);
    setLogin("myotp");

    console.log("FORM data", formData);
  };

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const onLogSubmit = async (e) => {
    e.preventDefault();
    const formDataLog = new FormData();
    formDataLog.append("email", logEmail);
    formDataLog.append("password", logPassword);

    await axios
      .post("http://192.168.1.195:5000/login/", formDataLog)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Log-Form data", formDataLog);
  };

  const [otp, setOtp] = useState("");

  const onOtpSubmit = async (e) => {
    e.preventDefault();
    const formDataOtp = new FormData();
    formDataOtp.append("email", email);
    formDataOtp.append("otp", otp);

    await axios
      .post("http://192.168.1.195:5000/otp-login/", formDataOtp)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // setMyOtp(true);
    // setLogin("myotp");
    console.log("Otp-Form data", formDataOtp);
  };

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
                <i
                  class="fa fa-phone"
                  aria-hidden="true"
                  style={{ marginRight: "5px" }}
                ></i>
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#"
                className="border_right"
                onClick={setShowModal}
              >
                <i
                  class="fa fa-user"
                  aria-hidden="true"
                  style={{ marginRight: "5px" }}
                ></i>
                Register / Sign in
              </Nav.Link>
              <Nav.Link href="#" className="border_right">
                <i class="fa fa-heart-o" style={{ marginRight: "5px" }}></i>
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
                  <form onSubmit={onLogSubmit}>
                    <div className="input-icons">
                      <i class="fa fa-user icon"></i>
                      <span className="line_vr1"></span>
                      <input
                        className="input_with_icon"
                        type="text"
                        placeholder="Email"
                        value={logEmail}
                        onChange={(e) => setLogEmail(e.target.value)}
                      />
                    </div>
                    <br />

                    <div className="input-icons">
                      <i class="fa fa-lock icon" aria-hidden="true"></i>

                      <span className="line_vr1"></span>
                      <input
                        className="input_with_icon"
                        type="password"
                        placeholder="Password"
                        value={logPassword}
                        onChange={(e) => setLogPassword(e.target.value)}
                      />
                    </div>

                    <br />
                    <div>
                      <a href="#" className="forget_password">
                        Forgot Password?
                      </a>
                    </div>

                    <Button className="login_btn" type="submit">
                      Login
                    </Button>
                  </form>

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
                    <form onSubmit={onSubmit}>
                      <div className="input-icons">
                        <i class="fa fa-user icon"></i>
                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="input-icons">
                        <i class="fa fa-mobile icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>

                      <div className="input-icons">
                        <i class="fa fa-envelope icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="input-icons">
                        <i class="fa fa-lock icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="input-icons">
                        <i class="fa fa-briefcase icon" aria-hidden="true"></i>

                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Occupation"
                          value={occupation}
                          onChange={(e) => setOccupation(e.target.value)}
                        />
                      </div>

                      <Button
                        className="login_btn"
                        type="submit"
                        // onClick={setOTPChange}
                      >
                        Get Started
                      </Button>
                    </form>

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
        {login === "myotp" && (
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
                    <form onSubmit={onOtpSubmit}>
                      <div className="input-icons">
                        <i class="fa fa-user icon"></i>
                        <span className="line_vr1"></span>
                        <input
                          className="input_with_icon"
                          type="text"
                          placeholder="Name"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>

                      <Button className="login_btn" type="submit">
                        Submit
                      </Button>
                    </form>
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
                        <form onSubmit={onLogSubmit}>
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
                              value={logEmail}
                              onChange={(e) => setLogEmail(e.target.value)}
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
                              value={logPassword}
                              onChange={(e) => setLogPassword(e.target.value)}
                            />
                          </div>

                          <br />
                          <div className="forget_password_div">
                            <a href="#" className="forget_password">
                              Forgot Password?
                            </a>
                          </div>

                          <Button className="login_btn" type="submit">
                            Login
                          </Button>
                        </form>
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
                          <form onSubmit={onSubmit}>
                            <div className="input-icons">
                              <i class="fa fa-user icon"></i>
                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <br />

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
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                              />
                            </div>
                            <br />

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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <br />

                            <div className="input-icons">
                              <i class="fa fa-lock icon" aria-hidden="true"></i>

                              <span className="line_vr"></span>
                              <input
                                className="input_with_icon"
                                type="text"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            <br />

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
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                              />
                            </div>

                            <Button
                              className="login_btn"
                              type="submit"
                              // onClick={setOTPChange}
                            >
                              Get Started
                            </Button>
                          </form>

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

        <div>
          {login === "myotp" && (
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
                          <form onSubmit={onOtpSubmit}>
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
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                            </div>
                            <br />

                            <Button className="login_btn" type="submit">
                              Submit
                            </Button>
                          </form>
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

// johny@ypomail.com
// Johny@123
