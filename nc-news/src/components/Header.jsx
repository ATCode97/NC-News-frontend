import React from "react";

import { Row, Col, Image } from "react-bootstrap";

const Header = (props) => {
  return (
    <Row className="header-background">
      <Col className="text-center">
        <h1 style={{ color: "Black" }}>North Coder News</h1>
      </Col>
    </Row>
  );
};

export default Header;
