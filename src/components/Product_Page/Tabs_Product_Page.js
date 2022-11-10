import React, { useState } from "react";
import Description from "./Description.js";
import Specification from "./Specification.js";
import Review from "./Review.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Tabs_Product_Page.css";

function Tabs_Product_Page() {
  const [tab, setTab] = useState("bookmark");
  return (
    <div className="features">
      <Navbar variant="dark">
        <Container className="tabs container">
          <Nav className="tabs container">
            <ul>
              <li>
                <Nav.Link href="#" onClick={() => setTab("description")}>
                  Description
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#" onClick={() => setTab("specification")}>
                  Specification
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#" onClick={() => setTab("review")}>
                  Review
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
      <Container className="tabs_div container">
        {tab === "description" && <Description />}
        {tab === "specification" && <Specification />}
        {tab === "review" && <Review />}
      </Container>
    </div>
  );
}

export default Tabs_Product_Page;
