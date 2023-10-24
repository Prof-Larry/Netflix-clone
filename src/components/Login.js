import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/content");
  };

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__background__image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/c3ab6e6e-5944-400f-9dad-ba5ce5692437/IN-en-20220228-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/c3ab6e6e-5944-400f-9dad-ba5ce5692437/IN-en-20220228-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/c3ab6e6e-5944-400f-9dad-ba5ce5692437/IN-en-20220228-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/c3ab6e6e-5944-400f-9dad-ba5ce5692437/IN-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="Netflix poster"
        />
      </div>
      <div className="login__nav">
        <img
          className="login__nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix_logo"
        />
      </div>
      <div className="login__form">
        <div className="login__form__body">
          <div className="login__form__header">
            <h1>Sign In</h1>
            <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
              <div className="login__form__inputs">
                <label htmlFor="email">Email or phone number</label>
                <input type="text" id="email" />
              </div>
              <div className="login__form__inputs">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button
                className="login__form__btn"
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <div className="login__form__utility">
                <div className="login__form__remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#">Need help?</a>
              </div>
            </form>
          </div>
          <div className="login__form__footer">
            <div>
              <div className="facebook__login">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                  alt="facebook icon"
                />
                <span>Login with facebook</span>
              </div>
              <div className="netflix__signup">
                {"New to Netflix? "}
                <a href="#">Sign up now.</a>
              </div>
              <div className="netflix__terms">
                <p>
                  <span>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </span>
                  &nbsp;
                  <button className="terms__btn">Learn more.</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login__footer"></div>
    </div>
  );
}

export default Login;
