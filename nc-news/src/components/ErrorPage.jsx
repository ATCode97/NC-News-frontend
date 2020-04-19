import React from "react";

const ErrorPage = (props) => {
  const { status, msg } = props;
  return (
    <div>
      <h2>Error! </h2>
      <p>Status: {status || 500}</p>
      <p>Msg: {msg || "please try again later..."}</p>
    </div>
  );
};

export default ErrorPage;
