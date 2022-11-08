import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Video_Caro.css";
import Container from "react-bootstrap/Container";

function Video_Caro() {
  return (
    <Container>
      <h1>Carousel in React</h1>
      <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
        // selectedItem={1}
        width="600px"
      >
        <div className="slide-holder">
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/8D-DM_GJ-6w"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="slide-holder">
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/XKfgdkcIUxw"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="slide-holder">
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/Ul6VOegwPQU"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="slide-holder">
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/vFy53HBq_9I"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="slide-holder">
          <iframe
            width="1100px"
            height="659px"
            src="https://www.youtube.com/embed/b9Je-dURuoc"
            title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Carousel>
    </Container>
  );
}
export default Video_Caro;
