import React from "react"
import { footer } from '../../data/Data'
import IMG from '../../../Assets/Images/IMG-20230523-WA0001.jpg'
import Insta from '../../../Assets/Images/IMG-20230523-WA0002.jpg'
import Facebook from '../../../Assets/Images/IMG-20230523-WA0003.jpg'
import Git  from '../../../Assets/Images/IMG-20230523-WA0004.jpg'
import "./footer.css"



const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={IMG} alt="" />
            
              
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
                
              </div>
              <div className="SocialMedia">
                <img src={Insta} alt="" className="Social-Media"/>
                <img src={Facebook} alt="" className="Social-Media"/>
                <img src={Git} alt="" className="Social-Media"/>

                


              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 RoomAadaa.</span>
      </div>
    </>
  )
}

export default Footer
