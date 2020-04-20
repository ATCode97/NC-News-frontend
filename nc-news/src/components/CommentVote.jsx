import React, { Component } from "react";
import * as api from "../utils/api";

class CommentVote extends Component {
  state = {
    optimisticVotes: 0,
  };

  handleClick = (votes) => {
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + votes };
    });
    api.patchVotes(this.props.type, this.props.comment_id, votes);
  };

  render() {
    const { optimisticVotes } = this.state;
    return (
      <section>
        <button
          className="upVoteButton"
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        >
          {" "}
        </button>
        <p>Current votes: {this.props.votes + optimisticVotes}</p>
        <button
          className="downVoteButton"
          onClick={() => this.handleClick(-1)}
          disabled={optimisticVotes < 0}
        ></button>
      </section>
    );
  }
}

export default CommentVote;
