import { Helmet } from "react-helmet-async";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const [showPssword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dragon News | Login</title>
      </Helmet>
      <div className={classes.container}>
        <h1>
          Please <span>Login</span>!!!!!!!
        </h1>
        <div className={classes.form}>
          <form>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <label htmlFor="">Password</label>
            <div className={classes.passwordIcon}>
              <input
                type={showPssword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <span onClick={() => setShowPassword(!showPssword)}>
                {showPssword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </span>
            </div>
            <div className={classes.forgotPassword}>
              <Link>Forgot Password?</Link>
            </div>
            <button type="submit">Login</button>
            <p>
              Are you New? <Link to="/sign-up">Please Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
