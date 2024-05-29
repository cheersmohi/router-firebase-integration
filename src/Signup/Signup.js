import React from "react";

const Signup = () => {
  return (
    <div>
      <h3> Please Sign up </h3>
      <form action="">
        <input type="text" name="your name" placeholder="Your Name" id="" />{" "}
        <br />
        <input type="email" name="" placeholder="Write your mail here" id="" />
        <br />
        <input
          type="password"
          name=""
          placeholder="Type Your Password"
          id=""
        />{" "}
        <br />
        <input type="submit" value="signup" />
      </form>
    </div>
  );
};

export default Signup;
