import React from "react";
import logo from "../image/logo.png";
import { Row, Image } from "react-bootstrap";

const Header = (props) => {
  return (
    <Row className="header-background">
      <Image src={logo} alt="Logo" fluid className="logo" />
    </Row>
  );
};

export default Header;
