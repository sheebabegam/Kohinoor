import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import "./Product_Category.css";
import { AiOutlineRight } from "react-icons/ai";
import MultiRangeSlider from "../../Midpage/Pages/MultiRangeSlider";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import heart from "../../../assets/images/heart.svg";
import Headphones_Filter from "../../../assets/json_data/Headphones_Filter.json";
import Footer from "../../Footer/Footer";

function Product_Category() {
  return (
    <div>
      <Container>
        <div>
          <Container>
            <Navbar bg="white" variant="dark" expand="lg">
              <div>
                <Link to="/" className="breadcrumb-not-active">
                  Home
                </Link>
              </div>
            </Navbar>
          </Container>
        </div>
        <Row>
          <Col xs={3}>
            <Table className="product_filter_table">
              <thead className="product_filter_th">
                <tr>
                  <td className="product_filter_td">Browse Categories</td>
                </tr>
              </thead>
              <tbody className="product_filter_tbody">
                <tr>
                  <ul className="product_filter_ul">
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">REFRIGERATOR</span>
                          </Accordion.Header>
                          <Accordion.Body>FROST FREE</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Accessories</span>
                          </Accordion.Header>
                          <Accordion.Body>Bluetooth Speakers</Accordion.Body>
                          <Accordion.Body>Frame</Accordion.Body>
                          <Accordion.Body>Bluetooth Earphone</Accordion.Body>
                          <Accordion.Body>Amazon Device</Accordion.Body>
                          <Accordion.Body>Wired Earphones</Accordion.Body>
                          <Accordion.Body>Smart Watch</Accordion.Body>
                          <Accordion.Body>Wired Headphone</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Computers</span>
                          </Accordion.Header>
                          <Accordion.Body>Laptops</Accordion.Body>
                          <Accordion.Body>Desktop</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Game Zone</span>
                          </Accordion.Header>
                          <Accordion.Body>Sony</Accordion.Body>
                          <Accordion.Body>Game Accessories</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Home Appliances</span>
                          </Accordion.Header>
                          <Accordion.Body>Washing Machine</Accordion.Body>
                          <Accordion.Body>Dishwashers</Accordion.Body>
                          <Accordion.Body>Microwaves</Accordion.Body>
                          <Accordion.Body>Dryers</Accordion.Body>
                          <Accordion.Body>Air Coolers</Accordion.Body>
                          <Accordion.Body>Water Purifiers</Accordion.Body>
                          <Accordion.Body>Refrigerator</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Home Entertainment</span>
                          </Accordion.Header>
                          <Accordion.Body>Televisions</Accordion.Body>
                          <Accordion.Body>Home Theater Systems</Accordion.Body>
                          <Accordion.Body>Amazon Devices</Accordion.Body>
                          <Accordion.Body>Partbox</Accordion.Body>
                          <Accordion.Body>Soundbar</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Smart Phone</span>
                          </Accordion.Header>
                          <Accordion.Body>Brands</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                    <li className="product_filter_li">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {/* <AiOutlineRight /> */}
                            <span className="myspan">Tablets</span>
                          </Accordion.Header>
                          <Accordion.Body>All Tablets</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                  </ul>
                </tr>
              </tbody>
            </Table>

            <div className="yellow_line_div">
              <div>
                <h3 className="product_filter_h3">
                  <span className="product_filter_span_yellow_bottom">
                    Filters &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                </h3>
                <hr className="product_filter_bottom_line_hr" />
              </div>

              <div className="brands_div">
                <h4 className="brands_h4">Brands</h4>
                <div className="Boat_checkbox_div">
                  <input
                    type="checkbox"
                    id="boat"
                    name="boat"
                    value="Boat"
                    className="checkbox_boat"
                  />{" "}
                  &nbsp;
                  <label className="label_boat_filter">
                    {" "}
                    Boat <span>(10)</span>
                  </label>
                  <br />
                  <br />
                  <hr className="product_filter_bottom_line_hr" />
                </div>

                <div className="product_filter_price_div">
                  <label className="label_product_filter_price"> Price</label>
                  <div className="price_range_filter_div">
                    <MultiRangeSlider
                      min={0}
                      max={200000}
                      onChange={({ min, max }) =>
                        console.log(`min = ${min}, max = ${max}`)
                      }
                    />
                  </div>
                  <div className="price_filter_btn_div">
                    <button className="price_filter_btn">Filter</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={9}>
            <div className="second_main_div">
              <div className="filter_result_for_div">
                <h3 className="result_for_h3">Result for "boat"</h3>
                <p className="showing_results">Showing 1 - 10 of 10 results</p>
              </div>

              <div className="filter_gray_div">
                <div className="filter_th_icon_div">
                  <i
                    class="fa fa-th"
                    aria-hidden="true"
                    style={{ fontSize: "18px", color: "#575560" }}
                  ></i>{" "}
                  &nbsp;
                  <i
                    class="fa fa-list"
                    aria-hidden="true"
                    style={{ fontSize: "18px", color: "#575560" }}
                  ></i>
                </div>

                <div className="filter_popularity_dropdown_div">
                  <Dropdown className="popularity_dropdown_div">
                    <Dropdown.Toggle
                      id="dropdown-basic1"
                      className="popularity_drop"
                    >
                      <span className="filter_popularity_span">Popularity</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="popularity_menu">
                      <Dropdown.Item href="#/action-1">Sort by</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        New Arrival
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Popular</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Price: low to high
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Price: high to low
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="filter_show40_dropdown_div">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic2">
                        <span className="filter_show40_span">Show 40</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Show 40</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Show 60</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Show All
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="filter_inc_dec_value_div">
                  <input type="number" value="1" className="inc_dec_input" />
                </div>
              </div>

              <div className="filter_card_main_div">
                {Headphones_Filter.map((prod, i) => (
                  <div className="active_item_main_div_filter" key={i}>
                    <Card className="main_card_filter">
                      <div className="heart_eye_filter_card_div">
                        <div className="heart_end1">
                          <div className="heart_round">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="heart_end1">
                          <div className="heart_round">
                            <img
                              src={heart}
                              alt="favorite_icon"
                              className="heart1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="card_img_div">
                        <Card.Img
                          variant="top"
                          src={prod.img}
                          className="image_offer1"
                        />
                      </div>
                      <Card.Body className="card_body">
                        <div>
                          <Card.Text className="card_text" id="product_name1">
                            {prod.name}
                          </Card.Text>
                          <Card.Text className="card_text" id="joy_price">
                            Joy Price &#8377;
                          </Card.Text>
                          <Card.Text className="card_text" id="product_price">
                            &#8377; {prod.price}{" "}
                            <span className="offer_percent">{prod.offer}</span>
                          </Card.Text>
                        </div>
                        <Card.Text className="card_text" id="mrp_small_text">
                          MRP &#8377; {prod.mrp}
                        </Card.Text>

                        <div id="card_footer" className="card_text">
                          <Card.Text href="#" className="product_footer_item">
                            Compare
                          </Card.Text>
                          <Card.Text href="#" className="text_danger">
                            Out Of Stock
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Product_Category;
