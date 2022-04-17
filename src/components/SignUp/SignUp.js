import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password didn't match");
      console.log("didn't match");
      console.log(password);
      console.log(confirmPassword);
      return;
    }

    if (password.length < 7) {
      console.log(password);
      console.log(password.length);
      setError("Password must be six characters or longer");
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser} action="#">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                onBlur={handleConPasswordBlur}
                type="password"
                name="confirm-password"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <p>
            New to Ema-John?{" "}
            <Link className="form-link" to="/login">
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
