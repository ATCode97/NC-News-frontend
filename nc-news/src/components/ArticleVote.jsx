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
      <section>
        <button
          className="articleUpVoteButton"
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        >
          Up vote
        </button>
        <p>Current votes: {this.props.votes + optimisticVotes}</p>
        <button
          className="articleDownVoteButton"
          onClick={() => this.handleClick(-1)}
          disabled={optimisticVotes < 0}
        >
          Down votes
        </button>
      </section>
    );
  }
}

export default ArticleVote;
