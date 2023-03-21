import React from 'react'
import  image from '../Assets/logo.jpg'
import elyes from '../Assets/plogo.jpg'
const ProfilePhoto = () => {
  return (
    <div>
     <h1>Elyes</h1>
     <h2>TRABELSI</h2>
     <img src={image} alt='daily'></img>
     <img src={elyes} alt='daily1'></img>
     <img src={elyes} alt='daily4'></img>
     <img src={elyes} alt='daily5'></img>
     <img src={elyes} alt='daily6'></img>
     <img src={image} alt='daily7'></img>
    </div>
  )
}

export default ProfilePhoto

