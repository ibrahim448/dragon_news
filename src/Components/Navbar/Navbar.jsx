import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={classes.container}>
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <Link to="/"><h1>Dragon News</h1></Link>
            </div>
            <div className={classes.navMenu}>
              <ul>
                <li>
                  <NavLink to="/" className={(active)=> active.isActive?classes.active:null}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={(active)=> active.isActive?classes.active:null}>About</NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={(active)=> active.isActive?classes.active:null}>Login</NavLink>
                </li>
                <li>
                  <NavLink to="/sign-up" className={(active)=> active.isActive?classes.active:null}>SignUp</NavLink>
                </li>
              </ul>
            </div>
            <div className={classes.menuBar}>
              <span><FaBars /></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
