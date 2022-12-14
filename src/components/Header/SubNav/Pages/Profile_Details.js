import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile_Details.css";
import Table from "react-bootstrap/Table";
import Footer from "../../../Footer/Footer";

function Profile_Details() {
  const location = useLocation();
  return (
    <div>
      <Container className="background_white">
        <div>
          <Container className="nav_profile_edit">
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
                <Link to="" className="breadcrumb-not-active">
                  My Account
                </Link>
                <span className="breadcrumb-arrow"> &gt; </span>
                <Link to="" className="breadcrumb-not-active">
                  My Profile
                </Link>
              </div>
            </Navbar>
          </Container>
        </div>
        <br />
        <Row>
          <Col xs={3}>
            <a href="#" className="a_tag_link" style={{ fontWeight: "bold" }}>
              My Profile
            </a>
            <a href="#" className="a_tag_link">
              My Order
            </a>
            <a href="#" className="a_tag_link">
              My Address Book
            </a>
            <a href="#" className="a_tag_link">
              My Gift Card
            </a>
            <a href="#" className="a_tag_link">
              Offers
            </a>
          </Col>

          <Col xs={9}>
            <div>
              <div className="details_edit_btn">
                <h3 className="profile_details">
                  <span className="profile_details_span">Profile Det</span>ails
                </h3>
                <button className="profile_edit_btn">Edit</button>
              </div>
              <Table striped="columns">
                {" "}
                <tbody>
                  <tr className="table_row_profile">
                    <th className="th_profile_details">Full Name</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Mobile Number</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Email ID</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Occupation</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Gender</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Date of Birth</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Location</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Alternate Number</th>
                    <td>sss</td>
                  </tr>
                  <tr>
                    <th className="th_profile_details">Hint Name</th>
                    <td>sss</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Profile_Details;
