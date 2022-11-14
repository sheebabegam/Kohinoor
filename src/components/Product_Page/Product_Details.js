import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  hitachi_img,
  hitachi_details,
  hitachi_price,
  hitachi_offer_details,
  hitachi_notes,
  hitachi_key_features,
  path,
} from "../../assets/json_data/Hitachi";
import "./Product_Details.css";
import truck from "../../assets/images/truck.png";
import Table from "react-bootstrap/Table";
import tags_solid from "../../assets/images/tags_solid.png";
import share_icon from "../../assets/images/share_icon.png";
import Tabs_Product_Page from "../Product_Page/Tabs_Product_Page";
import ReactImageMagnify from "react-image-magnify";

function Product_Details(props) {
  const [id, setId] = useState();
  const onChange = (e) => {
    setId(e);
  };
  console.log(id);
  console.log("PROPS -->", props);
  const location = useLocation();
  console.log(location.state);

  const imageProps = {
    smallImage: {
      alt: "Air conditioner",
      isFluidWidth: false,
      width: 331,
      height: 365,
      src: id,
    },
    largeImage: {
      src: id,
      width: 1400,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };
  return (
    <div>
      <div>
        <Container>
          <Navbar bg="white" variant="dark" expand="lg">
            {/* <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Air Conditioner</Nav.Link>
            <Nav.Link href="#">Split AC</Nav.Link>
            <Nav.Link href="#">1.0 Ton</Nav.Link> */}

            {path.map((paths, i) => (
              <div key={i}>
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
                  to="/shop/air-conditioner"
                  className={
                    location.pathname.startsWith("/products")
                      ? "breadcrumb-active"
                      : "breadcrumb-not-active"
                  }
                >
                  {paths.path1}
                </Link>
                <span className="breadcrumb-arrow"> &gt; </span>
                <Link
                  to="/shop/air-conditioner/split"
                  className={
                    location.pathname === "/products/1"
                      ? "breadcrumb-active"
                      : "breadcrumb-not-active"
                  }
                >
                  {paths.path2}
                </Link>
                <span className="breadcrumb-arrow"> &gt; </span>
                <Link
                  to="/shop/air-conditioner/split/10-ton"
                  className={
                    location.pathname === "/products/1"
                      ? "breadcrumb-active"
                      : "breadcrumb-not-active"
                  }
                >
                  {paths.path3}
                </Link>
              </div>
            ))}
          </Navbar>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              <div className="prod_div_flex">
                <div className="">
                  {hitachi_img.map((data, i) => (
                    <div
                      className="prod_img_div"
                      onClick={() => {
                        onChange(data.img);
                      }}
                      style={{
                        border: id === data.img && "1px solid black",
                      }}
                    >
                      <img src={data.img} alt="Image" className="prod_img" />
                    </div>
                  ))}
                </div>
                <div className="prod_zoom_img">
                  <ReactImageMagnify
                    {...imageProps}
                    style={{ marginRight: 60, width: 500 }}
                  />
                </div>
              </div>
            </Col>
            <Col xs={5}>
              <div>
                <div>
                  {hitachi_details.map((prod, i) => (
                    <div>
                      <h2 className="prod_name_h2">{prod.prod_name}</h2>
                      <p className="prod_code_number">
                        <strong className="prod_code">Product Code</strong>{" "}
                        &nbsp;
                        {prod.prod_code}
                      </p>
                      <a href="#" className="add_review">
                        Add Review
                      </a>
                      <div className="img_alt_div">
                        <img
                          src=""
                          alt="Image Description"
                          className="img_alt"
                        />
                        <p className="out_of_stock">&nbsp; Out Of Stock</p>
                      </div>
                      <input
                        name="mobile_number"
                        placeholder="Enter mobile no to get notified"
                        className="enter_mobile_number"
                      />{" "}
                      &nbsp; &nbsp; &nbsp;
                      <button className="notify_me_btn">
                        <b>Notify Me</b>
                      </button>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  {hitachi_price.map((prod, i) => (
                    <div className="price_details_div">
                      <div className="price_list">
                        <ul className="mrp_price">
                          <li className="mrp">M.R.P.:</li>
                          <li className="mrp1">&#8377; {prod.prod_mrp}</li>
                        </ul>

                        <ul className="joy_price">
                          <li> Joy Price:</li>
                          <li className="joy_price_value">
                            &#8377; {prod.prod_joy_price} &nbsp;
                            <strong className="free_delivery">
                              Free Delivery
                            </strong>
                          </li>
                        </ul>

                        <ul className="discount_price">
                          <li>You Save:</li>
                          <li className="disc_value">
                            &#8377; {prod.prod_you_save} <br />{" "}
                            <span className="inclusive_tax">
                              Inclusive of all taxes
                            </span>
                          </li>
                        </ul>
                      </div>

                      <p className="prod_delivery">
                        Get it between{" "}
                        <strong>{prod.prod_delivery_time_from}</strong> to{" "}
                        <strong>{prod.prod_delivery_time_to}</strong>
                      </p>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  {/* <table> */}
                  {hitachi_offer_details.map((prod, i) => (
                    <Table striped bordered className="tables">
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              <img
                                src="https://www.kohinoorelectronics.com/static/assets/img/icons/offers.png"
                                alt="offer_icon"
                                className="offer_icon"
                              />
                              <strong className="offer_color">
                                Save Extra:
                              </strong>
                              {prod.prod_save_extra}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong className="offer_color">
                                Exchange Offer:
                              </strong>
                              {prod.prod_exchange_offer}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong className="offer_color">EMI:</strong>
                              {prod.prod_emi} |{" "}
                              <a href="#" className="view_plans_button">
                                View Plans
                              </a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              <strong className="offer_color">
                                GST Invoice:
                              </strong>
                              {prod.prod_gst_invoice}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  ))}
                  {/* </table> */}
                </div>

                <div>
                  {hitachi_notes &&
                    hitachi_notes.map((prod, i) => (
                      <div className="notes_div">
                        <p className="red_text">
                          <img
                            src={tags_solid}
                            alt="tag_img"
                            className="tag_img"
                          />{" "}
                          &nbsp;
                          <strong className="notes">Notes </strong> &nbsp;
                          &nbsp;
                          <li>{prod.prod_notes}</li>
                        </p>
                      </div>
                    ))}
                </div>

                <div>
                  <h6 className="key_features">
                    <strong>Key Features</strong>
                  </h6>
                  {hitachi_key_features.map((prod, i) => (
                    <div className="features_list">
                      {/* <ul> */}
                      <li>{prod.prod_key_feature1}</li>
                      <li>{prod.prod_key_feature2}</li>
                      <li>{prod.prod_key_feature3}</li>
                      <li>{prod.prod_key_feature4}</li>
                      <li>{prod.prod_key_feature5}</li>
                      {/* </ul> */}
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <img
                    src="https://www.kohinoorelectronics.com/static/assets/svg/info/1_free_Delivery.svg"
                    alt="Truck"
                    className="truck"
                  />
                  <p className="free_delivery">Free Delivery</p>
                </div>
                <hr />
                <div>
                  <p className="compare_similarity">
                    Compare with similar items
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div className="share_btn_div">
                  <button className="share_btn">
                    <img
                      src={share_icon}
                      alt="share_icon"
                      className="share_icon"
                    />{" "}
                    Share
                  </button>
                </div>
                <br />
                <div className="card">
                  <h6 className="with_exchange">
                    <strong>With Exchange</strong>
                  </h6>
                  <h6 className="blue_text">
                    <strong>Up to ₹ 3,000.00 off</strong>
                  </h6>
                  <button className="exchange_offers_btn">
                    Exchange Offers
                  </button>
                </div>
                <div>
                  <div>
                    <p className="delivery_label">
                      <strong>Delivery</strong>
                      &nbsp; &nbsp;
                      <input
                        name="pincode"
                        placeholder="Enter Pincode"
                        className="enter_pincode"
                      />
                      <button className="check_btn">Check</button>
                    </p>
                  </div>
                  <div>
                    <button className="connect_store_btn">
                      Connect to Store
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Tabs_Product_Page />
        </Container>
      </div>
    </div>
  );
}

export default Product_Details;
