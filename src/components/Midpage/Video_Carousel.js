import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

function Video_Carousel() {
  return (
    <div>
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
    </div>
  );
}
export default Video_Carousel;

// import React, { useState } from "react";
// import "./style.css";
// import Videos from "./assets/json_data/Videos.json";

// export default function App() {
//   const [value, setValue] = useState("");
//   // const [value1, setValue1] = useState("Apple");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen </p>
//       <button value="Kohinoor" onClick={handleChange}>
//         Kohinoor
//       </button>
//       <button value="Apple" onClick={handleChange}>
//         Apple
//       </button>
//       <button value="Samsung" onClick={handleChange}>
//         Samsung
//       </button>
//       <button value="JBL" onClick={handleChange}>
//         JBL
//       </button>
//       <button value="One_Plus" onClick={handleChange}>
//         One_Plus
//       </button>
//       {Videos.map((item, i) => (
//         <div>
//           {value === item.name && (
//             <iframe
//               width="1186"
//               height="659"
//               src={item.url}
//               title={item.title}
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//             ></iframe>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
