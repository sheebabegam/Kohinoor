import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./Contact_us.css";
import Footer from "../../../Footer/Footer";

function Contact_Us() {
  const location = useLocation();

  //   const [lat, setLat] = useState("");
  //   const [long, setLong] = useState("");

  const lat = "19.013774° N";
  const long = "72.851075° E";

  //   const lat = "19.0760° N";
  //   const long = "72.8777° E";

  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    iframeData.src = `https://maps.google.com/maps?q=${long},${lat}&hl=es;&output=embed`;
    console.log(iframeData.src);
  });

  return (
    <div>
      <Container>
        <div className="margin_top">
          <Container>
            <Navbar bg="white" variant="dark" expand="lg">
              <div>
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
                <Link
                  to="/contact-us"
                  className={
                    location.pathname.startsWith("/products")
                      ? "breadcrumb-active"
                      : "breadcrumb-not-active"
                  }
                >
                  Contact Us
                </Link>
              </div>
            </Navbar>
          </Container>
        </div>
        <h1 className="contact_h1">Contact Us </h1>
        <Row className="row_contactus">
          <Col xs={6}>
            <div className="first_section_contactus">
              <div className="leave_msg_h3_div">
                <h3 className="leave_msg_h3">
                  <span className="yellow_bottom">Leave us a</span> Message
                </h3>
                <hr className="yellow_bottom_hr" />
              </div>
              <div>
                <div className="enter_input_div">
                  <label className="name_label">
                    Name <span className="star_span">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="enter_input_box"
                  />
                </div>
              </div>
              <Row>
                <Col>
                  <div className="enter_input_div">
                    <label className="name_label">
                      Mobile <span className="star_span">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Mobile No."
                      className="enter_input_box"
                    />
                  </div>

                  <div className="enter_input_div">
                    <label className="name_label">
                      Location <span className="star_span">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Location"
                      className="enter_input_box"
                    />
                  </div>
                </Col>
                <Col>
                  <div className="enter_input_div">
                    <label className="name_label">
                      Email <span className="star_span">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Email Address"
                      className="enter_input_box"
                    />
                  </div>

                  <div className="enter_input_div">
                    <label className="name_label">
                      Inquiry Reason <span className="star_span">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Type of Inquiry"
                      className="enter_input_box"
                    />
                  </div>
                </Col>
              </Row>
              <div className="text_area_div">
                <label className="name_label">Inquiry</label>
                <textarea
                  className="text_area"
                  placeholder="Enter Your Inquiry Msg"
                />
              </div>
              <button type="submit" className="submit_btn_contact_us">
                Submit
              </button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="second_section_contactus">
              <div className="iframe_contactus_div">
                <iframe
                  id="iframeId"
                  height="270px"
                  width="100%"
                  className="video_frame"
                ></iframe>
              </div>

              <div>
                <div className="leave_msg_h3_div">
                  <h3 className="leave_msg_h3">
                    <span className="yellow_bottom">Administra</span>{" "}
                    <span className="span_left">tive Office</span>
                  </h3>
                  <hr className="yellow_bottom_hr" />
                </div>

                <div className="kohinoor_address_div">
                  <address>
                    <h4 className="kohinoor_address_heading">
                      Kohinoor Electronics
                    </h4>
                    <div className="kohinoor_address">
                      Kohinoor Televideo Pvt Ltd, 1103, A Wing, 11th Flr, Naman
                      Midtown, Senapati Bapat Marg, Prabhadevi, Mumbai 400013
                    </div>
                    <div className="kohinoor_telephone_div">
                      Telephone: 8657536713 / 9619588141
                    </div>
                    <div className="kohinoor_telephone_div">
                      Email:
                      <a
                        href="mailto:online@kohinoortv.com"
                        className="kohinoor_link"
                      >
                        online@kohinoortv.com
                      </a>
                    </div>
                  </address>
                </div>
                <div className="opening_hours_div">
                  <h5 className="opening_hour_h5">Opening Hours</h5>
                  <p className="opening_hours_para">
                    We follow Government stipulated Covid Appropriate Measures &
                    Safety Protocol
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact_Us;
