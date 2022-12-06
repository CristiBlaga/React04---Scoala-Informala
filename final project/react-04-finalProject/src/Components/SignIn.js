import React, { useRef } from "react";

export default function SignIn() {
  const email = useRef();
  const password = useRef();
  const localName = localStorage.getItem("name");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter a valid password and email");
    }
  };
  return (
    <>
      <div className="container">
        <h4>Hello {localName}</h4>
        <form onSubmit={handleSignIn}>
          <div className="input_space">
            <input placeholder="Email" type="email" ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Password" type="password" ref={password} />
          </div>
          <input className="submit" type="submit"></input>
        </form>
      </div>
    </>
  );
}
