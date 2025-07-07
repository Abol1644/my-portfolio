
// import SplashCursor from '@/components/SplashCursor'
// import Aurora from '@/components/Aurora'
import Silk from './components/Silk'
import GlareHover from './components/GlareHover'
// import { Component } from "@/components/ethernalShadows";
// import { EthernalShadow } from "./components/eternalShadows";

import { Box } from '@mui/material'

import './assets/css/style.css'
import './index.css'
import profileImage from './assets/images/profile-2.jpg'
import waveEmoji from './assets/images/wave-emoji.png'
import iranFlag from './assets/images/iran-flag.png'

function App() {

  return (
    <>
    {/* <SplashCursor /> */}
    {/* <EthernalShadow
      className="ethernal-shadow-background"
      color="rgba(255, 255, 255, 0.5)"
      animation={{ scale: 100, speed: 80 }}
      noise={{ opacity: 0.5, scale: 0.3 }}
    /> */}
    <Box
      className='background-image'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <Silk
        speed={5}
        scale={0.8}
        color="#7B7481"
        noiseIntensity={0.4}
        rotation={0}
      />
    </Box>
    <div className="home-container">
      <div className="profile">
        <GlareHover
          className='glare-hover'
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <img src={profileImage} alt="Profile Image" className='profile-image'/>
        </GlareHover>
        <div className="profile-text">
          <div className="name-wraper">
            <h2>Hi, I'm Abolfazl Bagheri</h2>
            <img src={waveEmoji} alt="wave emoji" className='home-wave-emoji' />
          </div>
          <div style={{ marginTop: '5px' }}>
            Font-end developer, Graphic Designer, 
            <div className="tooltip ml3" style={{ margin: '0 5px 0 5px' }}>BME
              <span className="tooltiptext">Bio Medical Engineering</span>
            </div>
            student
          </div>
          <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '20px'
          }}
          >
            <img src={iranFlag} alt="iran-flag" className='home-flag' />
            <p>Tehran, Iran</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
