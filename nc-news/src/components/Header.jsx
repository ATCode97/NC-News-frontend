import React from "react";
import logo from "../image/logo.png";
import { Row, Col, Image } from "react-bootstrap";

const Header = (props) => {
  return (
    <Row className="header-background">
      <Col className="text-center">
        <Image src={logo} alt="Logo" fluid className="logo" />
      </Col>
    </Row>
  );
};

export default Header;
