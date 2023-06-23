import React from 'react'
import './header.css'
import CTA from './CTA'
import Me2 from "../../assets/Me2.jpg";
import {IoIosBicycle} from 'react-icons/io'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Herzlich willkommen zu meiner Expedition!<IoIosBicycle/></h1>
        <p className="text-lighter">Hier erfahren Sie mehr über meinen Werdegang und die Herausforderungen auf dem Weg zu meinem Traumjob als Programmiererin.</p>
       <br />
        <h2 className="text-light">Ich bin Sara</h2>
        <div className="header-img">
          <img src={Me2} alt="" />
        </div>
        <h3 className="text-lighter">Web Entwicklerin</h3>
        <CTA />
      </div>
    </header>
  )
}

export default Header
