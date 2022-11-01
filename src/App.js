import Navbar_sub from "./components/Header/SubNav/Navbar_sub";
import { Route, Routes } from "react-router-dom";
import Store_Locator from "./components/Header/Pages/Store_Locator";
import MainNav from "./components/Header/MainNav/MainNav";
import Midpage from "./components/Midpage/Midpage";

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
