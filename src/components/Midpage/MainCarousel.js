import Carousel from "react-bootstrap/Carousel";

function MainCarousel() {
  return (
    <div>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/1440x500/images/home_banner/Samsung_REF_4.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/1440x500/images/home_banner/SONY_LED_1.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousel;
