import React, { useState } from "react";
import "./Click_Carousel.css";
import Videos from "../../assets/json_data/Videos.json";
import Container from "react-bootstrap/Container";

export default function Click_Carousel() {
  const [value, setValue] = useState("Kohinoor");
  // const [value1, setValue1] = useState("Apple");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Videos.map((item, i) => (
        <div style={{ display: "block" }}>
          {value === item.name && (
            <iframe
              width="1186"
              height="659"
              src={item.url}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
      ))}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "659px",
          width: "250px",
          marginTop: "-7px",
        }}
      >
        <button
          value="Kohinoor"
          onClick={handleChange}
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "70px",
          }}
        >
          Kohinoor
        </button>
        <button
          value="Apple"
          onClick={handleChange}
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "70px",
          }}
        >
          Apple
        </button>
        <button
          value="Samsung"
          onClick={handleChange}
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "70px",
          }}
        >
          Samsung
        </button>
        <button
          value="JBL"
          onClick={handleChange}
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "70px",
          }}
        >
          JBL
        </button>
        <button
          value="One_Plus"
          onClick={handleChange}
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "70px",
          }}
        >
          One_Plus
        </button>
      </div>
    </Container>
  );
}
