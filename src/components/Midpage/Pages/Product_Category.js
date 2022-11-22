import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import "./Product_Category.css";
import { AiOutlineRight } from "react-icons/ai";

function Product_Category() {
  return (
    <div>
      <Container>
        <div>
          <Container>
            <Navbar bg="white" variant="dark" expand="lg">
              <div>
                <Link to="/" className="breadcrumb-not-active">
                  Home
                </Link>
              </div>
            </Navbar>
          </Container>
        </div>
        <Row>
          <Col xs={3}>
            <Table>
              <thead>
                <tr>
                  <td>Browse Categories</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {/* <AiOutlineRight /> */}
                          Accordion Item #1
                        </Accordion.Header>
                        <Accordion.Body>FROST FREE</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={9} style={{ backgroundColor: "gray" }}>
            Big Column
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product_Category;
