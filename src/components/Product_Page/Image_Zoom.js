import React from "react";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { hitachi_img } from "../src/assets/json_data/Hitachi";

function Image_Zoom(props) {
  const imageProps = {
    smallImage: {
      alt: "Phasellus laoreet",
      isFluidWidth: false,
      width: 450,
      height: 500,
      src: "https://wallpaperaccess.com/full/1409272.jpg",
    },
    largeImage: {
      src: "https://wallpaperaccess.com/full/1409272.jpg",
      width: 1400,
      height: 1800,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };

  const [id, setId] = useState(
    "https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/filters:quality(90)/fit-in/370x370/images/IMAGE-1_0DWw13c.jpg"
  );
  const onChange = (e) => {
    setId(e);
  };
  console.log(id);
  return (
    <div>
      <ReactImageMagnify
        {...imageProps}
        style={{ marginRight: 60, width: 1500 }}
      />

      <div>
        {hitachi_img.map((prod, i) => (
          <div
            style={{
              height: "200px",
              width: "200px",
              border: id === prod.img && "1px solid black",
            }}
            onClick={() => {
              onChange(prod.img);
            }}
          >
            <img
              src={prod.img}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image_Zoom;
