import React from 'react'
import './main.css'
import { useState } from 'react'

const Main = () => {
  const [click, setClick] = useState(false)
  const [first, setfirst] = useState(false)

  const handleclick =()=>{
    setClick(!click)
  }
  const nextclick =()=>{
    setfirst(!first)
  }
  return (
    <div className="container">
      <div className="img1" >
        <img
          className={!click ?'img-1':'img-1display'}  onClick={handleclick}
          src="https://images.pexels.com/photos/5234498/pexels-photo-5234498.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-5234498.jpg&fm=jpg"
          // src="https://images.pexels.com/photos/5765762/pexels-photo-5765762.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-5765762.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div className="img2">
        <img className={!first ?'img-2':'img-2display'} onClick={nextclick}
         src="https://images.pexels.com/photos/7640389/pexels-photo-7640389.jpeg?cs=srgb&dl=pexels-%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2-7640389.jpg&fm=jpg" alt="" />
         {/* src="https://images.pexels.com/photos/6333501/pexels-photo-6333501.jpeg?cs=srgb&dl=pexels-karolina-grabowska-6333501.jpg&fm=jpg" alt="" /> */}
        
      </div>
      <div className="img3">
        <img className="img img-3" src="https://images.pexels.com/photos/5951539/pexels-photo-5951539.jpeg?cs=srgb&dl=pexels-arina-krasnikova-5951539.jpg&fm=jpg" alt="" />
        
      </div>
    </div>
  )
}

export default Main