
import '@/assets/css/style.css'
import '@/index.css'
import profileImage from '@/assets/images/profile-2.jpg'
import waveEmoji from '@/assets/images/wave-emoji.png'


function App() {

  return (
    <>
    <div className="home-container">
      <div className="profile">
        <img src={profileImage} alt="Profile Image" className='profile-image'/>
        <div className="profile-text">
          <div className="name-wraper">
            <h2>Hi, I'm Abolfazl Bagheri</h2>
            <img src={waveEmoji} alt="wave emoji" className='home-wave-emoji' />
          </div>
          <p>
            Font-end developer, Graphic Designer, 
            <div className="tooltip ml3" style={{ margin: '0 5px 0 5px' }}>BME
              <span className="tooltiptext">Bio Medical Engineering</span>
            </div>
            student
          </p>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
