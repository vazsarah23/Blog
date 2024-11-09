import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
            <span className="settingsupdatetitle">Update Your Account</span>
            <span className="settingsdeletetitle">Delete Your Account</span>
        </div>
        <form action="" className="settingsform">
            <label >Profile Picture</label>
            <div className="settingspp">
                <img src="https://th.bing.com/th/id/OIP.IOZuGXQ5qL8HWAYQ1gvh0QHaEo?rs=1&pid=ImgDetMain" alt="" />
                <label htmlFor="fileinput">
                <i class="settingsppicon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
            </div>

            <label>Username</label>
            <input type="text" placeholder="Sarah" />
            <label>Email</label>
            <input type="email" placeholder="sarah@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingssubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
