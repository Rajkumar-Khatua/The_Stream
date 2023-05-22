import "./register.scss";
import { useState } from "react";
import { useRef } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // for email registration
  const emailRef = useRef();
  const handelStart = () => {
    setEmail(emailRef.current.value);
  };
  // for password registration
  const passlRef = useRef();
  const handelFinished = () => {
    setPassword(passlRef.current.value);
  };
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <span className='logo'>The Stream</span>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <p>Already have account ?</p>
        <button className='loginBtn'>Sign In</button>

        {!email ? (
          <div className='input'>
            <input
              type='email'
              placeholder='E-mail address'
              ref={emailRef}
            />
            <button
              className='registerBtn'
              onClick={handelStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input
              type='password'
              placeholder='password'
              ref={passlRef}
            />
            <button
              className='registerBtn'
              onClick={handelFinished}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
