import logo from "./logo.svg";
import "./App.css";
import Navbar_sub from "./components/Header/SubNav/Navbar_sub";
import { Route, Routes } from "react-router-dom";
import Store_Locator from "./components/Header/Pages/Store_Locator";
import MainNav from "./components/Header/MainNav/MainNav";
import Mid_Page from "./components/Mid_Page";

function App() {
  return (
    <div className="App">
      <Navbar_sub />
      <MainNav />
      <Mid_Page />
      <Routes>
        <Route path="/store-locator" element={<Store_Locator />} />
      </Routes>
    </div>
  );
}

export default App;
