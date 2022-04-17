import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form action="#">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm password</label>
              <input type="password" name="confirm-password" required />
            </div>
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
