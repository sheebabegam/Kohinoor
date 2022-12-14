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
import Footer from "../Footer/Footer";
import Brands_Carousel from "../../assets/json_data/Brands_Carousel.json";
import Top_brands from "../../assets/json_data/Top_brands.json";
import Accessories_Carousel from "./Accessories_Carousel";
import Videos from "../../assets/json_data/Videos.json";
import React, { useState } from "react";
import Video_Carousel from "./Video_Carousel";
import Video_Caro from "./Video_Caro";
import Click_Carousel from "./Click_Carousel";
import { useNavigate, Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Midpage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("Kohinoor");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

      <div className="slider_icon_div ">
        <div
          className="slider_carousel_div container"
          style={{ overflowX: "hidden" }}
        >
          <Container>
            <Slider {...settings}>
              {Brands_Carousel.map((image, i) => (
                <div className="carousel_width d-flex justify-content-center align-items-center flex-column">
                  <img
                    src={image.img}
                    alt="brands"
                    className="slider_carousel"
                  />
                  <h4 className="h4_product_brands">{image.brand}</h4>
                </div>
              ))}
            </Slider>
          </Container>
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
              <Link to="/search">
                <img
                  src={prod.img}
                  alt={prod.brand}
                  className="headphone_img"
                  onClick={navigate("/search")}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <Accessories_Carousel />
      </div>

      {/* ,,,,,,,,,,,,,,,,,,, */}
      <div>
        {/* <Video_Carousel />
        <Click_Carousel /> */}
        <Video_Caro />
      </div>

      <div className="why_kohinoor_div">
        <div className="why_kohinoor">
          <h2 className="h2_kohinoor">Why choose Kohinoor</h2>
          <p className="kohinoor_since_line">
            Kohinoor???s Promise of Joyful Experience & Assured Quality, Creating
            Milestones <br /> Since 1967 Your trusted destination for Consumer
            Electronics
          </p>
        </div>

        <Container className="slider_icon_div">
          {/* <div className="slider_carousel_div"> */}
          {/* <Carousel
              responsive={responsive}
              className="why_kohinoor_carousel"
            > */}
          {/* <Slider {...settings}> */}
          {Why_Kohinoor.map((data, i) => (
            <div className="grayscale_hover">
              <div key={i} className="gray_scale">
                <img
                  src={data.img}
                  alt={data.alt}
                  className="slider_carousel"
                />
              </div>

              <div>
                <h4 className="why_kohinoor_offer">
                  {data.tag1} <br /> {data.tag2}
                </h4>
              </div>
            </div>
          ))}
          {/* </Slider> */}

          {/* </Carousel> */}
          {/* </div> */}
        </Container>
      </div>

      <Container className="top_brands_div">
        <div className="top_brands_text">
          <h2>Top Brands</h2>
        </div>

        <div className="wrap_div">
          <Carousel responsive={responsive_card}>
            {Top_brands.map((brand, i) => (
              <div className="top_brand_img" key={i}>
                <img src={brand.img} alt="Top_brand" className="img_div" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="yellow_btn_div">
          <Button className="yellow_img_btn">View All</Button>
        </div>
      </Container>

      <Container>
        <img
          src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/images/static_banner/101.png"
          alt="image"
          className="yellow_img container"
        />
      </Container>
      <br />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Midpage;
