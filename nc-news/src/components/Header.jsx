import React from "react";
import { Link } from "@reach/router";
import { Row, Col } from "react-bootstrap";

const Header = (props) => {
  return (
    <Row className="header-background">
      <Col className="text-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>North Coder News</h1>
          <small>Signed In As: {props.username}</small>
        </Link>
      </Col>
    </Row>

    // <header className="Header">
    //   <Link to="/" style={{ textDecoration: "none" }}>
    //     <h1>North Coder News</h1>
    //     <small>Signed In As: {props.username}</small>
    //   </Link>
    // </header>
  );
};

export default Header;
