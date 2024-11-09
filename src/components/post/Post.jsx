import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postimg" src="https://th.bing.com/th/id/OIP.Y1iMwzaZTAKwqgwMeEIitAAAAA?rs=1&pid=ImgDetMain" alt="" />

      <div className="postinfo">
        <div className="postcats">
            <span className="postcat">Word of God</span>
            <span className="postcat">Saint of the Day</span>
        </div>
        <span className="posttitle"> Be strong and couragous , do not be frightened or dismayed 
        <p>Joshua 1:9</p>
        </span>
        <hr />
        <span className="postdate">1 hour ago</span>

      </div>
      <p className="postdesc">Joshua is surrounded by things to be afraid of. He’s taking on a huge responsibility; it’s new to him. Will he be enough? He’s going to lead his people to battle; will they win? He’s going to have to deal with the problems of his people; does he have wisdom? He’s going to daily face challenges and dangers. And despite the plethora of things to be afraid of, God commands Joshua, “do not be afraid.” He is to lead boldly and be strong and courageous.  </p>
    </div>
  )
}
