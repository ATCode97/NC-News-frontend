import React from "react";

//1. need error handling for 404 for an none existence path <--- done
//2. 400 error if reach an invalid article_id <---- done
//3. topic not found <---- done
//4. need error handling in comment section for posting and delete as well <-- need to induce error
//5. not allow post if not fill all boxes <--- done

const ErrorPage = (props) => {
  const { status, msg } = props;
  return (
    <div>
      <h2>Error! </h2>
      <p>Status: {status}</p>
      <p>Msg: {msg}</p>
    </div>
  );
};

export default ErrorPage;
