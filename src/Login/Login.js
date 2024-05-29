import React from "react";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1> Log In here </h1>
      <form action="">
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
        <input type="submit" value="Log in" />
      </form>

      <button onClick={signInWithGoogle} style={{ margin: "20px" }}>
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
