import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login"> 
    <span className="logintitle">Login</span>
      <form action="" className="loginform">

        <label >Email</label>
        <input type="text" className="logininput" placeholder="Enter your email"/>

        <label >Password</label>
        <input type="password" className="logininput" placeholder="Enter your password..."/>

        <button className="loginbutton">Login</button>
      </form>

      <button className="loginregisterbutton">
        <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
      </button>
    </div>
  )
}
