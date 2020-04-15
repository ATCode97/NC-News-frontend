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
          className="commentUpVoteButton"
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        >
          {" "}
          Up Vote
        </button>
        <p>Current votes: {this.props.votes + optimisticVotes}</p>
        <button
          className="commentDownVoteButton"
          onClick={() => this.handleClick(-1)}
          disabled={optimisticVotes < 0}
        >
          Down Vote
        </button>
      </section>
    );
  }
}

export default CommentVote;
