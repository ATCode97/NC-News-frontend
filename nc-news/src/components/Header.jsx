import React from "react";
import { Link } from "@reach/router";

const Header = (props) => {
  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>North Coder News</h1>
      </Link>
      <p>Signed In As: {props.username}</p>
    </header>
  );
};

export default Header;
