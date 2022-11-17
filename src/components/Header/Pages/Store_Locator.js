import React, { useState, useEffect } from "react";
import Store_Location from "../../../assets/json_data/Store_Location.json";
import Container from "react-bootstrap/Container";
import "./store_locator.css";
import MyMarker from "./MyMarker";

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
];

function Store_Locator() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const change1 = (e) => {
    setLong(e.target.value);
  };

  const change2 = (e) => {
    setLat(e.target.value);
  };

  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    iframeData.src = `https://maps.google.com/maps?q=${long},${lat}&hl=es;&output=embed`;
    console.log(iframeData.src);
  });

  const onSubmit = () => {
    const iframeData = document.getElementById("iframeId");
    iframeData.src = `https://maps.google.com/maps?q=${long},${lat}&hl=es;&output=embed`;
  };

  return (
    <div className="main_map_div">
      <div className="store_div">
        <h4 className="locate_store">Locate Store</h4>
        <div className="pincode_div">
          <input
            name="pincode"
            placeholder="Enter Your Pincode"
            className="enter_pin_input"
          />
        </div>

        <div className="find_now_btn_div">
          <button type="submit" className="find_now_btn">
            FIND NOW
          </button>
        </div>

        <div className="stores16_div">
          <p>
            <strong>16</strong> stores near you
          </p>
        </div>
        <hr className="store_locator_hr_line" />

        <div className="store_address_div_main" style={{ height: "500px" }}>
          {Store_Location.map((loc, i) => (
            <Container>
              <div className="store_address_div_sub">
                <div className="store_img_alt_div">
                  <img src="image" alt={loc.alt_name} className="store_image" />
                </div>
                <div className="store_number_div">
                  <p className="store_no">{loc.no}</p>
                  <p className="store_distance">{loc.km} km</p>
                </div>
                <div className="store_adress_div">
                  <div className="store_address_header">
                    <h3 className="store_name_header">{loc.address_header}</h3>
                  </div>
                  <div className="actual_store_address">
                    <address className="store_real_address">
                      {loc.address}
                    </address>
                  </div>
                </div>
              </div>
            </Container>
          ))}
        </div>
      </div>

      <iframe id="iframeId" height="845px" width="100%" className="video_frame">
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </iframe>
    </div>
  );
}

export default Store_Locator;
