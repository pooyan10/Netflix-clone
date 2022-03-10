import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signin, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      <img
        className="loginScreen__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netflix-logo"
      />
      <button className="loginScreen__button" onClick={() => setSignin(true)}>
        Sign In
      </button>
      <div className="loginScreen__gradiant" />

      <div className="loginScreen__body">
        {signin ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV Programmes and more</h1>
            <h2>Watch anywhere, cancel at any time </h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" className="" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignin(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
