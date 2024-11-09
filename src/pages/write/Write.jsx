import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeimg" src="https://i.pinimg.com/originals/fe/ce/b9/feceb9a0cdfd0756f2f0903a77486c9a.jpg" alt="" />
        <form  className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                    <i className="writeicon fa-solid fa-plus"></i>
                </label>
                <input type="file"  id="fileinput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeinput" autoFocus={true} />
            </div>
            <div className="writeformgroup">
                <textarea placeholder="Spread the Word" type="text" className="writeinput writetext">

                </textarea>

            </div>
            <button className="writesubmit">PUBLISH</button>
        </form>
      
    </div>
  )
}
