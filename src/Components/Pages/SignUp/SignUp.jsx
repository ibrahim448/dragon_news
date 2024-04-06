import { Helmet } from "react-helmet-async";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const SignUp = () => {
  const [showPssword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dragon News | Sign Up</title>
      </Helmet>
      <div className={classes.container}>
        <h1>
          Please <span>Sign Up</span>!!!!!!!
        </h1>
        <div className={classes.form}>
          <form>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
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
            <button type="submit">Sign Up</button>
            <p>
              Have an Account? <Link to="/login">Please Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
