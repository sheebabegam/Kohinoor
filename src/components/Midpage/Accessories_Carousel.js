import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainCarousel from "./MainCarousel";
import "./Accessories.css";
import headphones from "../../assets/json_data/headphones.json";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import heart from "../../assets/images/heart.svg";
import New_Arrivals from "../../assets/json_data/New_Arrivals.json";
import laptops from "../../assets/json_data/laptops.json";
import Accessories from "../../assets/json_data/Accessories.json";
import Televisions from "../../assets/json_data/Televisions.json";
import Air_Conditioner from "../../assets/json_data/Air_Conditioner.json";
import Washing_Machine from "../../assets/json_data/Washing_Machine.json";
import Microwaves from "../../assets/json_data/Microwaves.json";
import Soundbar from "../../assets/json_data/Soundbar.json";
import Recently_Viewed from "../../assets/json_data/Recently_Viewed.json";
import { Link } from "react-router-dom";

function Accessories_Carousel() {
  const responsive_card = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2500, min: 1000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1000 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 724, min: 300 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid className="new_arrival_bar_trend">
            <Nav.Link className="new_arrival_bar1">New Arrivals</Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Nav.Link href="#" className="new_arrival_bar1">
              Trending
            </Nav.Link>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {New_Arrivals.map((prod, i) => {
              var product_link = prod.name.replace(/\s+/g, "-").toLowerCase();
              product_link = product_link.replace(/[{()}]/g, "");
              product_link = product_link.replace(/[{,}]/g, "");
              console.log("PRODUCT NAME", product_link);
              return (
                <div className="active_item_main_div" key={i}>
                  <Card className="main_card">
                    <div className="heart_end">
                      <div className="heart_round">
                        <img
                          src={heart}
                          alt="favorite_icon"
                          className="heart"
                        />
                      </div>
                    </div>

                    <Link
                      to={{ pathname: `/product/${prod?.id}/${product_link}` }}
                      state={{ id: prod }}
                    >
                      <div className="card_img_div">
                        <Card.Img
                          variant="top"
                          src={prod.img}
                          className="image_offer"
                        />
                      </div>
                    </Link>
                    <Card.Body className="card_body">
                      <div>
                        <Card.Text className="card_text" id="product_name">
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
              );
            })}
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Laptops
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {laptops.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Accessories
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Accessories.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Televisions
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Televisions.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Air Conditioner
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Air_Conditioner.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Washing Machine
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Washing_Machine.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Microwave
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Microwaves.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Soundbar
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Soundbar.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              Recently Viewed
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar_button">View All</Button>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Recently_Viewed.map((prod, i) => (
              <div className="active_item_main_div" key={i}>
                <Card className="main_card">
                  <div className="heart_end">
                    <div className="heart_round">
                      <img src={heart} alt="favorite_icon" className="heart" />
                    </div>
                  </div>

                  <div className="card_img_div">
                    <Card.Img
                      variant="top"
                      src={prod.img}
                      className="image_offer"
                    />
                  </div>
                  <Card.Body className="card_body">
                    <div>
                      <Card.Text className="card_text" id="product_name">
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
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Accessories_Carousel;
