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
import Mycart from "./components/Header/MainNav/Pages/Mycart";
import Product_Category from "./components/Midpage/Pages/Product_Category";
import Test_Dropdown from "./components/Test_Dropdown";
import Profile_Details from "./components/Header/SubNav/Pages/Profile_Details";

function App() {
  return (
    <div className="App">
      {/* <Test_Dropdown /> */}
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
        <Route path="/cart" element={<Mycart />} />
        <Route path="/search" element={<Product_Category />} />
        <Route path="/profile" element={<Profile_Details />} />
      </Routes>
    </div>
  );
}

export default App;

// *********************************************************************

// --------------- COOKIES STORAGE ------------------------------------ //

// import React, { useState } from "react";
// import { useCookies } from "react-cookie";

// const App = () => {
//   const [name, setName] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [cookies, setCookie] = useCookies(["user"]);

//   const handle = () => {
//     setCookie("Name", name, { path: "/" });
//     setCookie("Password", pwd, { path: "/" });
//   };
//   return (
//     <div className="App">
//       <h1>Name of the user:</h1>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1>Password of the user:</h1>
//       <input
//         type="password"
//         placeholder="Password"
//         value={pwd}
//         onChange={(e) => setPwd(e.target.value)}
//       />
//       <div>
//         <button onClick={handle}>Set Cookie</button>{" "}
//       </div>
//       <br />
//       {cookies.Name && (
//         <div>
//           Name: <p>{cookies.Name}</p>
//         </div>
//       )}
//       {cookies.Password && (
//         <div>
//           Password: <p>{cookies.Password}</p>
//         </div>
//       )}
//     </div>
//   );
// };
// export default App;
