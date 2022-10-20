import React, { memo, useRef, useState } from 'react'
import "./style.css"

  function Menu() {
  const menuRef = useRef("")
console.log("rendering");
  const [hover,setHover] = useState(false)
  
  function hoverHandle(){
    setHover(!hover)
    menuRef.current.classList.toggle("hover")
    console.log(menuRef.current.classList);
  }

  return (
    <div ref={menuRef} onMouseEnter={hoverHandle} onMouseLeave={hoverHandle} className=' Menu'>
      {
        hover?
        <div className='user'>
          <img  alt="userAvatar" className='userAvatar' />
          <span className='userName'>John Smith</span>
        </div>
        :
        ""
      }
      <div className='manageButtons'>
        <div>
          <img id='Search' alt="Search" src='assets/icons/ICON - Search.png' />
          {hover?<span>Search</span>:""}
        </div>
        <div>
          <img id='Home'  alt="Home"src='assets/icons/Group 46.png'/>
          {hover?<span>Home</span> :""}
        </div>
        <div>
          <img id='TV shows' alt="TV shows" src='assets/icons/Group 56.png' />
          {hover?<span>TV shows</span> :""}
        </div>
        <div>
          <img id='Movies' alt="Movies" src='assets/icons/Group 54.png' />
          {hover?<span>Movies</span> :""}
        </div>
        <div>
          <img id='Genres' alt="Genres" src='assets/icons/Group 53.png' />
          {hover?<span>Genres</span>:""}
        </div>
        <div>
          <img id='watchLater'  alt="watchLater" src='assets/icons/Group 47.png' />
          {hover?<span>Watch Later</span> :""}
        </div>
      </div>
      {hover?
        <div className='footer'>
          <span>Language</span>
          <span>Get Help</span>
          <span>Exit</span>
        </div> 
      :""}
      
    </div>
  )
}
export default memo(Menu)
