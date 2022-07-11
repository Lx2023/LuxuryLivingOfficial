import React, { useState } from 'react'
import './style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham';
import { useNavigate } from 'react-router-dom'
import { GiftOutlined } from '@ant-design/icons'

const Header = ({ display }) => {
  const navigate = useNavigate()
  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: 'auto'
    })
  }

  const [IsOpen, setIsOpen] = useState(false)
  const showNavbar = () => {
    switch (IsOpen) {
      case false:
        setIsOpen(true);
        break;
      case true:
        setIsOpen(false);
        break;
      default:
        setIsOpen(false)
    }
  }

  return (
    <nav className='header'>
      <div className="header_wrapper">

        <div className="ham_div" onClick={showNavbar}> <Ham /></div>
        <div className="navs_right">

          <div className="navs" onClick={(e) => {
            navigate('/hotel-collabs');
            toTop()
          }}>
            <div className="img" >
              {/* <img src="../../images/question1.png" alt="" /> */}
              <img src="/images/question1.png" alt="" />
            </div>

            <div className="link"><span data-text=' New&nbsp;Hotel Collaborations' className="links"> New&nbsp;Hotel&nbsp;Collaborations</span> </div>
          </div>

          <div className="navs " onClick={(e) => {
            navigate('/offers');
            toTop()
          }} >
            <div className="img">
              <GiftOutlined className='icon' />
            </div>
            <div className="link"><span data-text='Irresistible Offers' className="links">Irresistible&nbsp;Offers </span> </div>
          </div>
        </div>

        {
          IsOpen && <Navbar />
        }
      </div>
    </nav>
  )
}

export default Header