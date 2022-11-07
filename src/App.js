import Navbar_sub from "./components/Header/SubNav/Navbar_sub";
import { Route, Routes } from "react-router-dom";
import Store_Locator from "./components/Header/Pages/Store_Locator";
import MainNav from "./components/Header/MainNav/MainNav";
import Midpage from "./components/Midpage/Midpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar_sub />
      <MainNav />
      <Routes>
        <Route path="/" element={<Midpage />} />
        <Route path="/store-locator" element={<Store_Locator />} />
      </Routes>
    </div>
  );
}

export default App;

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
