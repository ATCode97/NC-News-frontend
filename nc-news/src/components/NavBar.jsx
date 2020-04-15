import React from "react";
import * as api from "../utils/api";

import { Link } from "@reach/router";
import Loader from "./Loader";

class NavBar extends React.Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false }, () => {});
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <nav className="Nav">
        <ul className="NavList">
          {topics.map(({ slug }) => {
            return (
              <li key={slug}>
                <Link to={`/topics/${slug}`}>{slug}</Link>
              </li>
            );
          })}
          <li>
            <Link to={"/articles"}> Articles</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
