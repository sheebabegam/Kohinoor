import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  hitachi_img,
  hitachi_details,
  hitachi_price,
  hitachi_offer_details,
  hitachi_notes,
  hitachi_key_features,
} from "../../assets/json_data/Hitachi";
import "./Product_Details.css";
import truck from "../../assets/images/truck.png";

function Product_Details(props) {
  console.log("PROPS -->", props);
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <div>
        <Container fluid>
          <Navbar bg="white" variant="dark" expand="lg">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Air Conditioner</Nav.Link>
            <Nav.Link href="#">Split AC</Nav.Link>
            <Nav.Link href="#">1.0 Ton</Nav.Link>
          </Navbar>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              1 of 3
              <div className="prod_div_flex">
                <div className="">
                  {hitachi_img.map((data, i) => (
                    <div className="prod_img_div">
                      <img src={data.img} alt="Image" className="prod_img" />
                    </div>
                  ))}
                </div>
                <div className="prod_zoom_img">Image</div>
              </div>
            </Col>
            <Col xs={6}>
              2 of 3 (wider)
              <div>
                <div>
                  {hitachi_details.map((prod, i) => (
                    <div>
                      <h2>{prod.prod_name}</h2>
                      <p>
                        <strong>Product Code</strong>
                        {prod.prod_code}
                      </p>
                      <a href="#">Add Review</a>
                      <div>
                        <img src="" alt="Image Description" />
                        <p>Out Of Stock</p>
                      </div>
                      <input
                        name="mobile_number"
                        placeholder="Enter mobile number"
                      />
                      <button>Notify Me</button>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  {hitachi_price.map((prod, i) => (
                    <div>
                      <p>M.R.P.: &#8377; {prod.prod_mrp} </p>
                      <p>
                        Joy Price: <span>&#8377; {prod.prod_joy_price}</span>{" "}
                        <strong>Free Delivery</strong>{" "}
                      </p>
                      <p>
                        You Save:{" "}
                        <span>
                          &#8377; {prod.prod_you_save} <br /> Inclusive of all
                          taxes
                        </span>{" "}
                      </p>
                      <p>
                        Get it between{" "}
                        <strong>{prod.prod_delivery_time}</strong>
                      </p>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <table>
                    {hitachi_offer_details.map((prod, i) => (
                      <tbody>
                        <tr>
                          <p>
                            <strong>Save Extra:</strong>
                            {prod.prod_save_extra}
                          </p>
                        </tr>
                        <tr>
                          <p>
                            <strong>Exchange Offer:</strong>
                            {prod.prod_exchange_offer}
                          </p>
                        </tr>
                        <tr>
                          <p>
                            <strong>EMI:</strong>
                            {prod.prod_emi} | <a href="#">View Plans</a>
                          </p>
                        </tr>
                        <tr>
                          <p>
                            <strong>GST Invoice:</strong>
                            {prod.prod_gst_invoice}
                          </p>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>

                <div>
                  {hitachi_notes &&
                    hitachi_notes.map((prod, i) => (
                      <div>
                        <p>
                          <strong>Notes </strong> {prod.prod_notes}
                        </p>
                      </div>
                    ))}
                </div>

                <div>
                  <h6>
                    <strong>Key Features</strong>
                  </h6>
                  {hitachi_key_features.map((prod, i) => (
                    <div>
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
                    src={truck}
                    alt="Truck"
                    style={{
                      height: "30px",
                      width: "30px",
                      marginLeft: "30px",
                    }}
                  />
                  <p>Free Delivery</p>
                </div>
                <hr />
                <div>
                  <p>Compare with similar items</p>
                </div>
              </div>
            </Col>
            <Col>
              3 of 3
              <div>
                <div>
                  <button>
                    <i class="bi bi-share"></i>Share
                  </button>
                </div>
                <div>
                  <h6>
                    <strong>With Exchange</strong>
                  </h6>
                  <h6>
                    <strong>Up to ₹ 3,000.00 off</strong>
                  </h6>
                  <button>Exchange Offers</button>
                </div>
                <div>
                  <div>
                    <label>
                      <strong>Delivery</strong>
                    </label>
                    <input name="pincode" placeholder="Enter Pincode" />
                    <button>Check</button>
                  </div>
                  <div>
                    <button>Connect to Store</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Product_Details;
