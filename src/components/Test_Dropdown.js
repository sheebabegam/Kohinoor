import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import search_ic from "../assets/images/search_ic.png";
import Drop_Header from "../assets/json_data/Drop_Header.json";

function Test_Dropdown(props) {
  const [isHovering, setIsHovering] = useState(false);
  const Refrigrator = 1;
  const accessories = 2;
  const Air_Conditioner = 3;
  const Computers = 4;
  const Game_Zone = 5;
  const Home_Appliances = 6;
  const Home_Entertainment = 7;
  const Smart_Phone = 8;
  const Tablets = 9;

  const handleRefrigratorOver = () => {
    Drop_Header.map((prods, i) => {
      if (Refrigrator === prods.id) {
        setIsHovering(true);
      }
    });
  };

  const handleaccessoriesOver = () => {
    Drop_Header.map((prods, i) => {
      if (accessories === prods.id) {
        setIsHovering(true);
      }
    });
  };

  //   const handleRefrigratorOver = () => {
  //     Drop_Header.map((prods, i) => {
  //       if (Refrigrator === prods.id) {
  //         setIsHovering(true);
  //       }
  //       if (accessories === prods.id) {
  //         setIsHovering(true);
  //       }
  //       if (Air_Conditioner === prods.id) {
  //         setIsHovering(true);
  //       } else if (Computers === prods.id) {
  //         setIsHovering(true);
  //       } else if (Game_Zone === prods.id) {
  //         setIsHovering(true);
  //       } else if (Home_Appliances === prods.id) {
  //         setIsHovering(true);
  //       } else if (Home_Entertainment === prods.id) {
  //         setIsHovering(true);
  //       } else if (Smart_Phone === prods.id) {
  //         setIsHovering(true);
  //       } else if (Tablets === prods.id) {
  //         setIsHovering(true);
  //       }
  //     });
  //   };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {/* <Col xs={8}> */}
      <label htmlFor="copy-button">
        {/* <button id="icon1">All Categories &nbsp; &nbsp; &nbsp;</button> */}
        <Dropdown id="icon1">
          <Dropdown.Toggle variant="success" id="dropdown-basic_main_navbar">
            All Categories
          </Dropdown.Toggle>

          <Dropdown.Menu className="drop_menu_items_main_nav">
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              onMouseOver={handleRefrigratorOver}
              onMouseOut={handleMouseOut}
            >
              REFRIGERATOR
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              onMouseOver={handleaccessoriesOver}
              onMouseOut={handleMouseOut}
            >
              Accessories
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Air Conditioner
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Computers
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Game Zone
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Home Appliances
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Home Entertainment
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Smart Phone
            </Dropdown.Item>
            <Dropdown.Item
              href="#"
              className="drop_items_main_nav"
              //   onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Tablets
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span className="line_vr_main_nav"></span>
        <input
          name="search_main_nav"
          aria-label="search_main_nav"
          placeholder="Search for products, brands & more"
          className="search_input_main_nav"
        />
        <img id="icon" src={search_ic} alt="icon" />
      </label>

      <div
        className="side_dropdown_main_nav"
        style={isHovering ? { display: "block" } : { display: "none" }}
        // onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* <Row>
          {Drop_Header.map(
            (prod, i) =>
              //   (
              prod.id === accessories &&
              prod.brands.map((list, j) => (
                <div>
                  <p>{list.brandName}</p>
                  {list.products.map((myprod, k) => (
                    <p>{myprod.name}</p>
                  ))}
                </div>
              ))
          )}
        </Row> */}

        <Row>
          {Drop_Header.map(
            (prod, i) =>
              //   (
              prod.id === Refrigrator &&
              prod.brands.map((list, j) => (
                <div>
                  <p>{list.brandName}</p>
                  {list.products.map((myprod, k) => (
                    <p>{myprod.name}</p>
                  ))}
                </div>
              ))
          )}
        </Row>
      </div>
    </div>
  );
}

export default Test_Dropdown;
