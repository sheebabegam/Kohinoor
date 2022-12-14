import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import Container from "react-bootstrap/Container";

function Video_Carousel() {
  return (
    <div className="carousel_sec_main">
      <Carousel className="carousel_sec" interval="5000000000">
        <Carousel.Item>
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/8D-DM_GJ-6w"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/XKfgdkcIUxw"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/Ul6VOegwPQU"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/vFy53HBq_9I"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/b9Je-dURuoc"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Video_Carousel;
