import React, { Component } from "react";
import * as api from "../utils/api";

class ArticleVote extends Component {
  state = {
    optimisticVotes: 0,
  };

  handleClick = (votes) => {
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + votes };
    });
    api.patchVotes(this.props.type, this.props.article_id, votes);
  };

  render() {
    const { optimisticVotes } = this.state;
    return (
      <section className="voting">
        <button
          className="upVoteButton"
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        ></button>
        <p className="voting">
          Current votes: {this.props.votes + optimisticVotes}
        </p>
        <button
          className="downVoteButton"
          onClick={() => this.handleClick(-1)}
          disabled={optimisticVotes < 0}
        ></button>
      </section>
    );
  }
}

export default ArticleVote;
