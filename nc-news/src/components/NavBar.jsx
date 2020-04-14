import React from "react";
import * as api from "../utils/api";

import { Link } from "@reach/router";
import Loader from "./Loader";

class NavBar extends React.Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false }, () => {
        console.log(this.state);
      });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <nav className="Nav">
        <ul>
          {topics.map(({ slug }) => {
            return (
              <li key={slug}>
                <Link to={`/topics/${slug}`}>{slug}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
