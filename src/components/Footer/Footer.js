import React from "react";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./footer.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import subscribe from "../../assets/images/subscribe.png";
import kohinoor_logo from "../../assets/images/kohinoor_logo.png";
import headset from "../../assets/images/headset.png";
import Social_Media from "../../assets/json_data/Social_Media.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="news_letter">
        <Container className="subscribe_bar ">
          <Navbar.Brand
            href="#home"
            className="subscribe "
            style={{ display: "flex" }}
          >
            <div className="subscribe_logo_div">
              <img
                src={subscribe}
                alt="subscribe_letter"
                className="subscribe_logo"
              />
            </div>
            <div className="news_letter_para">
              <h2 className="news_letter_heading">Subscribe to Newsletter</h2>
              <span className="subscribe_note">
                We'll never share your email address with a any third party
              </span>
            </div>
          </Navbar.Brand>
          <div className="copy_button">
            <input
              name="search"
              aria-label="search"
              placeholder="Email address"
              className="search_newsletter"
            />
            <button className="subscribe_button"> Subscribe</button>
          </div>
        </Container>
      </Navbar>

      <div className="main_div_footer">
        <Container className="sub_div_footer">
          <Row>
            <Col className="col-lg-3 mb-3 mb-lg-0">
              <div className="first_footer_section_div">
                <div>
                  <img
                    src={kohinoor_logo}
                    width="200"
                    height="60"
                    className="d-inline-block align-top"
                    alt="kohinoor logo"
                  />
                </div>

                <div className="headphone_flex">
                  <div className="headphone_div">
                    <img src={headset} alt="Headset" className="headphone" />
                  </div>
                  <div>
                    <p className="questions">Got questions? Call us!</p>
                    <p className="help_line_number">022 6163 6464</p>
                  </div>
                </div>

                <div className="social_img_div">
                  {Social_Media.map((data, i) => (
                    <div className="social_img">
                      <img
                        src={data.img}
                        alt="image"
                        className="social_media"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col className="col-lg-3">
              <div className="second_section_div">
                <div>
                  <h6>Find it Fast</h6>
                </div>
                <br />

                <div className="second_div_sub">
                  <div className="second_list">
                    <li>Accessories</li>
                    <li>Air Conditioner</li>
                    <li>Computers</li>
                    <li>Game Zone</li>
                    <li>Home Appliances</li>
                  </div>

                  <div className="second_list">
                    <li>Home Entertainment</li>
                    <li>Smart Phone</li>
                    <li>Tablets</li>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="col-lg-2">
              <div className="third_div">
                <div>
                  <h6>My Account</h6>
                </div>
                <br />

                <div>
                  <li>My Account</li>
                  <li> Track Your Order </li>
                  <li> Wish List</li>
                </div>
              </div>
            </Col>

            <Col className="col-lg-2">
              <div className="fourth_div">
                <div>
                  <h6>About</h6>
                </div>
                <br />
                <div>
                  <li>About Us</li>
                  <li>Media/Press</li>
                  <li>Our Promise</li>
                  <li>FAQ</li>
                  <li>Testimonials</li>
                  <li>Careers</li>
                </div>
              </div>
            </Col>

            <Col className="col-lg-2">
              <div className="fifth_div">
                <div>
                  <h6>Politics</h6>
                </div>
                <br />
                <div>
                  <li>Privacy Policy</li>
                  <li>Terms & Consitions</li>
                  <li>Disclaimer</li>
                  <li>Disclaimer</li>
                  <li>Testimonials</li>
                  <li>Cancellation, Returns & Refunds</li>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
