import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
      <ul className="toplist">
        <li className="toplistitem">
          <Link to="/" style={{textDecoration:"none", color:"inherit"}}> HOME</Link></li>
        <li className="toplistitem">
        <Link to="/about" style={{textDecoration:"none", color:"inherit"}}> ABOUT</Link>
        </li>
        <li className="toplistitem">
        <Link to="/contact" style={{textDecoration:"none", color:"inherit"}}> CONTACT</Link>
        </li>
        <li className="toplistitem">
        <Link to="/write" style={{textDecoration:"none", color:"inherit"}}> WRITE</Link>
        </li>
        <li className="toplistitem">
          {user && "LOGOUT"}
        </li>
      </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImage" src="https://icon-library.com/images/profile-icon/profile-icon-4.jpg" alt="" />
          ) :(
            <ul  className="toplist">
            <li className="toplistitem">
            <Link to="/login" style={{textDecoration:"none", color:"inherit"}}> LOGIN</Link></li>
            <li className="toplistitem">
            <Link to="/register" style={{textDecoration:"none", color:"inherit"}}> REGISTER</Link></li>
            </ul>
          )
        }

      <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
