import React from 'react'
import './header.css'
import CTA from './CTA'
import {IoIosBicycle} from 'react-icons/io'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Herzlich willkommen zu meiner Expedition!<IoIosBicycle/></h1>
        <p className="text-sub">Hier erfahren Sie mehr über meinen Werdegang und die Herausforderungen auf dem Weg zu meinem Traumjob als Programmiererin!</p>
        <p className="text-sub">Mein Motto ist: Übung macht den Meister. und alles ist möglich, wenn man es nur will.</p>
       <br />
        <h3 className="text-light">Ich bin Sara</h3>
        <h2 className="text-primary">Web Entwicklerin</h2>
        <CTA />
      </div>
    </header>
  )
}

export default Header
