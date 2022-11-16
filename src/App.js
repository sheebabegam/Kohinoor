import Navbar_sub from "./components/Header/SubNav/Navbar_sub";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Store_Locator from "./components/Header/Pages/Store_Locator";
import MainNav from "./components/Header/MainNav/MainNav";
import Midpage from "./components/Midpage/Midpage";
import "./App.css";
import Product_Details from "./components/Product_Page/Product_Details";
import { useLocation } from "react-router-dom";
import Contact_us from "./components/Header/SubNav/Pages/Contact_us";

function App(props) {
  console.log("PROPS -->", props);
  const location = useLocation();
  function bark() {
    console.log("Woof!");
  }

  bark.animal = "dog";

  return (
    <div className="App">
      <Navbar_sub />
      <MainNav />
      <Routes>
        <Route path="/" element={<Midpage />} />
        <Route path="/store-locator" element={<Store_Locator />} />
        <Route
          path={`/product/:productId/:product_name`}
          element={<Product_Details />}
        />
        <Route path="/contact-us" element={<Contact_us />} />
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

// import Table from "react-bootstrap/Table";

// function BasicExample() {
//   return (
//     <Table>
//       <tbody>
//         <tr>
//           <td>1</td>
//         </tr>
//         <tr>
//           <td>2</td>
//         </tr>
//         <tr>
//           <td>3</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default BasicExample;
