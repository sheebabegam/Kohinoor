import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainCarousel from "./MainCarousel";
import "./Midpage.css";
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
import Why_Kohinoor from "../../assets/json_data/Why_Kohinoor.json";

function Midpage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 512 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 512, min: 232 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 232, min: 0 },
      items: 1,
    },
  };

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
        <MainCarousel />
      </div>

      <div className="slider_icon_div">
        <div className="slider_carousel_div">
          <Carousel responsive={responsive}>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/headphones_lIOg7eq_T3Qatvg.png"
                alt="air-constioner"
                className="slider_carousel"
              />
              <h4 className="h4">Headphones</h4>
            </div>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/air-conditioner_mtKMV9K.png"
                alt="air-constioner"
                className="slider_carousel"
              />
              <h4 className="h4">Air Conditioner</h4>
            </div>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/Gamezone_icon_IvZTNCn.png"
                alt="air-condtioner"
                className="slider_carousel"
              />
              <h4 className="h4">Game Zone</h4>
            </div>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/computer_HVOgFY3.png"
                alt="computers"
                className="slider_carousel"
              />
              <h4 className="h4">Computers</h4>
            </div>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/appliances_rcgkYal.png"
                alt="Home-appliances"
                className="slider_carousel"
              />
              <h4 className="h4">Home Appliances</h4>
            </div>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/Electronics_icon_wrMaWjZ.png"
                alt="home-entertainment"
                className="slider_carousel"
              />
              <h4 className="h4">Home Entertainment</h4>
            </div>
            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/smartphone_qojgxKp.png"
                alt="smartphones"
                className="slider_carousel"
              />
              <h4 className="h4">Smart Phone</h4>
            </div>

            <div>
              <img
                src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/tablet_Fsdm56f.png"
                alt="Tablets"
                className="slider_carousel"
              />
              <h4 className="h4">Tablets</h4>
            </div>
          </Carousel>
        </div>
        <div className="ad_div">
          <div className="first_ad">
            <img
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/WIDE_RANGE_OF_DIRECT_COOL_REF.jpg"
              alt="fridge"
              className="first_ad_img1"
            />

            <img
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/FROST-FREE_REF.jpg"
              alt="fridge"
              className="first_ad_img2"
            />
          </div>

          <div className="first_ad">
            <img
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/SIDE_BY_SIDE_REF.jpg"
              alt="fridge"
              className="second_ad_img1"
            />

            <img
              src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(70)/fit-in/680x365/images/static_banner/THREE_DOOR_REF.jpg"
              alt="fridge"
              className="second_ad_img2"
            />
          </div>
        </div>
      </div>

      <div className="headphone_ad_div">
        {headphones.map((prod, i) => {
          return (
            <div className="headphones_img_div">
              <img src={prod.img} alt={prod.brand} className="headphone_img" />
            </div>
          );
        })}
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Nav.Link href="#" className="new_arrival_bar">
              New Arrivals
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Nav.Link href="#" className="new_arrival_bar">
              Trending
            </Nav.Link>
          </Container>
        </Navbar>
        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {New_Arrivals.map((prod, i) => (
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
              Laptops
            </Nav.Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button className="new_arrival_bar">Trending</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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
            <Button className="new_arrival_bar">View All</Button>
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

      <div className="why_kohinoor_div">
        <div className="why_kohinoor">
          <h2 className="h2_kohinoor">Why choose Kohinoor</h2>
          <p>
            Kohinoor’s Promise of Joyful Experience & Assured Quality, Creating
            Milestones.
          </p>
          <p>Since 1967 Your trusted destination for Consumer Electronics</p>
        </div>

        <div className="slider_icon_div">
          <div className="slider_carousel_div">
            <Carousel responsive={responsive}>
              {Why_Kohinoor.map((data, i) => (
                <div key={i}>
                  <img
                    src={data.img}
                    alt={data.alt}
                    className="slider_carousel"
                  />
                  <h4 className="h4">{data.tag1}</h4>
                  <h4 className="h4">{data.tag2}</h4>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Midpage;
