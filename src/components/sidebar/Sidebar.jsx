import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img src="https://icon-library.com/images/profile-icon/profile-icon-4.jpg" alt="" />
            <p>Hi guys ... I am Sarah Vaz ... juss trying to spread the word of God</p>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">Word of God</li>
            <li className="sidebarlistitem">Saint of the Day</li>
            <li className="sidebarlistitem">Eucharistic Miracles</li>
            <li className="sidebarlistitem">Testimonies</li>
            <li className="sidebarlistitem">Gallery</li>
            <li className="sidebarlistitem">News</li>
            <li className="sidebarlistitem">Articles</li>

        </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
      <i className="sidebarIcon fa-brands fa-pinterest"></i>
      <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
        </div>
      
    </div>
  )
}
