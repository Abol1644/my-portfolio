
// import SplashCursor from '@/components/SplashCursor'
// import Aurora from '@/components/Aurora'
// import Silk from './blocks/Backgrounds/Silk/Silk'
// import { Component } from "@/components/ethernalShadows";
import { EthernalShadow } from "./components/eternalShadows";

import '@/assets/css/style.css'
import '@/index.css'
import profileImage from '@/assets/images/profile-2.jpg'
import waveEmoji from '@/assets/images/wave-emoji.png'


function App() {

  return (
    <>
    {/* <SplashCursor /> */}
    <EthernalShadow
      className="ethernal-shadow-background"
      // color="rgba(128, 128, 128, 1)"
      color="#03c39a"
      animation={{ scale: 100, speed: 80 }}
      noise={{ opacity: 0.5, scale: 0.3 }}
    />
    <div className="home-container">
      <div className="profile">
        <img src={profileImage} alt="Profile Image" className='profile-image'/>
        <div className="profile-text">
          <div className="name-wraper">
            <h2>Hi, I'm Abolfazl Bagheri</h2>
            <img src={waveEmoji} alt="wave emoji" className='home-wave-emoji' />
          </div>
          <div>
            Font-end developer, Graphic Designer, 
            <div className="tooltip ml3" style={{ margin: '0 5px 0 5px' }}>BME
              <span className="tooltiptext">Bio Medical Engineering</span>
            </div>
            student
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
