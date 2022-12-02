import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Video_Caro.css";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Video_Caro() {
  return (
    <Container>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ width: "1300px", height: "659px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8D-DM_GJ-6w"
              title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "1300px", height: "659px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XKfgdkcIUxw"
              title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "1300px", height: "659px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ul6VOegwPQU"
              title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "1300px", height: "659px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vFy53HBq_9I"
              title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "1300px", height: "659px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/b9Je-dURuoc"
              title="Kohinoor Electronics - Kohinoor Consumer Electronic Show 2019  After Movie"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
export default Video_Caro;
