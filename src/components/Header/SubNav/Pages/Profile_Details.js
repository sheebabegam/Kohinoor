import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile_Details.css";
import Table from "react-bootstrap/Table";
import Footer from "../../../Footer/Footer";
import { useCookies } from "react-cookie";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Profile_Details() {
  const locations = useLocation();
  const [cookies, setCookie] = useCookies(["user"]);
  const [mobile, setMobile] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  // const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [location, setLocation] = useState("");
  const [altMobile, setAltMobile] = useState("");
  const [altHintName, setAltHintName] = useState("");
  const [password, setPassword] = useState("");

  const dob1 = JSON.stringify(dob.dob);

  const [editBtn, setEditBtn] = useState("cancel");
  const [tick, setTick] = useState(false);
  const [tick1, setTick1] = useState(false);
  const [gender, setGender] = useState("");

  console.log("TICK", tick);
  console.log("TICK1", tick1);
  console.log("Gender", gender);
  console.log("DOB", dob1);
  console.log("Type of DOB", typeof dob1);

  const handleTick = () => {
    setTick(true);
    setTick1(false);
    setGender("male");
  };

  const handleTick1 = () => {
    setTick1(true);
    setTick(false);
    setGender("female");
  };

  const handleEditBtn = () => {
    setEditBtn("edit");
  };

  const cancelEdit = () => {
    setEditBtn("cancel");
  };

  const onEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("fullname", fname);
    formData.append("email", email);
    formData.append("occupation", occupation);
    formData.append("gender", gender);
    formData.append("dob", dob1);
    formData.append("location", location);
    formData.append("alt_mobile", altMobile);
    formData.append("alt_hint_name", altHintName);
    formData.append("password", password);

    await axios
      .post("http://192.168.1.195:7000/user/update/", formData)
      .then((res) => {
        console.log("Edit Response is", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("FORM data", formData);
  };

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
                    locations.pathname === "/"
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

          {editBtn === "cancel" && (
            <Col xs={9}>
              <div>
                <div className="details_edit_btn">
                  <h3 className="profile_details">
                    <span className="profile_details_span">Profile Det</span>
                    ails
                  </h3>
                  <button className="profile_edit_btn" onClick={handleEditBtn}>
                    Edit
                  </button>
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
                      <td></td>
                    </tr>
                    <tr>
                      <th className="th_profile_details">Hint Name</th>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          )}

          {editBtn === "edit" && (
            <Col xs={9}>
              <div className="details_edit_btn">
                <h3 className="profile_details">
                  <span className="profile_details_span1">Edit Details</span>
                </h3>
              </div>
              <div>
                <div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Mobile <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter Your Name"
                      className="enter_input_box11"
                    />
                  </div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Full Name <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      placeholder="Enter Full Name"
                      className="enter_input_box11"
                    />
                  </div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Email <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email address"
                      className="enter_input_box11"
                    />
                  </div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Occupation <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="Enter occupation"
                      className="enter_input_box11"
                    />
                  </div>
                  <div>
                    <ButtonGroup
                      aria-label="Basic example"
                      className="gender_profile_div"
                    >
                      <Button className="group_btn" onClick={handleTick}>
                        <i
                          class="fa fa-check"
                          aria-hidden="true"
                          style={
                            tick
                              ? {
                                  visibility: "visible",
                                  marginLeft: "-40px",
                                }
                              : { visibility: "hidden", marginLeft: "-40px" }
                          }
                        ></i>{" "}
                        &nbsp; Male
                      </Button>
                      <Button className="group_btn1" onClick={handleTick1}>
                        <i
                          class="fa fa-check"
                          aria-hidden="true"
                          style={
                            tick1
                              ? {
                                  visibility: "visible",
                                  marginLeft: "-40px",
                                }
                              : { visibility: "hidden", marginLeft: "-40px" }
                          }
                        ></i>{" "}
                        &nbsp; Female
                      </Button>
                    </ButtonGroup>
                  </div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Date of Birth <span className="star_span11">*</span>
                    </label>
                    <input
                      type="date"
                      name="mobile"
                      value={dob.toLocaleDateString}
                      placeholder="Enter occupation"
                      className="enter_input_box11"
                      onChange={(event) => setDob({ dob: event.target.value })}
                      // min="2022-01-01"
                      // max="2022-12-31"
                    />
                  </div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Location <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter occupation"
                      className="enter_input_box11"
                    />
                  </div>

                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Alternate Mobile Number{" "}
                      <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="alt_mobile"
                      value={altMobile}
                      onChange={(e) => setAltMobile(e.target.value)}
                      placeholder="Enter occupation"
                      className="enter_input_box11"
                    />
                  </div>
                  <div className="enter_input_div11">
                    <label className="name_label11">
                      Hint Name <span className="star_span11">*</span>
                    </label>
                    <input
                      type="text"
                      name="alt_hint_name"
                      value={altHintName}
                      onChange={(e) => setAltHintName(e.target.value)}
                      placeholder="Enter occupation"
                      className="enter_input_box11"
                    />
                  </div>
                  <div className="enter_input_div11">
                    <button className="save_profile_edit_btn" onClick={onEdit}>
                      Save Changes
                    </button>
                  </div>
                  <div className="enter_input_div11">
                    <button
                      className="cancel_profile_edit_btn"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Profile_Details;
