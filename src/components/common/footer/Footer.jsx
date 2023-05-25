import React from "react"
import { footer } from "./Data"
import IMG from './Room.png'
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'

// import Git  from './github (1).png'
import "./footer.css"


const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h4>RoomAdaa will give you 24*7 service any problem contact us</h4>
              <br></br>
              <p>Thank You for visting on RoomAdaa.</p>
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
                {/* <img src={Insta} alt="" className="Social-Media"/> */}
                {/* <img src={Facebook} alt="" className="Social-Media"/> */}
                <FaFacebookSquare />
                <AiOutlineInstagram/>
                <AiFillGithub/>
                {/* <img src={Git} alt="" className="Social-Media"/> */}

                


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
        <span>© 2023 RoomAadaa Technologies Solution Pvt. Ltd.</span>
      </div>
    </>
  )
}

export default Footer
