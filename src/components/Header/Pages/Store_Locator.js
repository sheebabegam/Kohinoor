import React, { useState, useEffect } from "react";
import "./store_locator.css";

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

        <button type="submit" className="find_now">
          FIND NOW
        </button>

        <div className="stores16">
          <p>
            <b>16</b> stores near you
          </p>
        </div>
      </div>

      <iframe
        id="iframeId"
        height="845px"
        width="100%"
        className="video_frame"
      ></iframe>
    </div>
  );
}

export default Store_Locator;
