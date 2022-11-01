import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainCarousel from "./MainCarousel";
import "./Midpage.css";
import headphones from "../../assets/headphones.json";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
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
      </div>
    </div>
  );
}

export default Midpage;
