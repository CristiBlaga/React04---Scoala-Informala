import React, { useEffect, useRef, useState } from "react";
import SignIn from "./SignIn";
import Episodes from "./episodes";

function RegisterAndLogIn() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const checkPassword = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localSignUp, localEmail]);
  const handleClick = () => {
    if (
      name.current.value &&
      email.current.value &&
      password.current.value &&
      password.current.value === checkPassword.current.value
    ) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    } else {
      alert("Something went wrong, please make sure the passwords fit");
    }
  };

  return (
    <div>
      {showHome ? (
        <>
          <Episodes />
        </>
      ) : show ? (
        <SignIn />
      ) : (
        <>
          <h2>Create an account</h2>
          <form onSubmit={handleClick}>
            <div className="input_space">
              <input autoFocus placeholder="Name" type="text" ref={name} />
            </div>
            <div className="input_space">
              <input placeholder="Email" type="email" ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <div className="input_space">
              <input
                type="password"
                placeholder="Confirm Password"
                ref={checkPassword}
              />
            </div>
            <input className="submit" type="submit"></input>
          </form>
        </>
      )}
    </div>
  );
}
export default RegisterAndLogIn;
