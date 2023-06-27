import React from 'react';
import './header.css';
import CTA from './CTA';
import m1 from "../../assets/m1.png"
import {IoIosBicycle} from 'react-icons/io';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Herzlich willkommen zu meiner Expedition!<IoIosBicycle/></h1>
        <p className="text-sub">Hier erfahren Sie mehr über meinen Werdegang und die Herausforderungen auf dem Weg zu meinem Traumjob als Programmiererin!</p>
        <p className="text-sub-1">Mein Motto ist:</p><p className="text-sub"> Übung macht den Meister. und alles ist möglich, wenn man es nur will!</p>
       <br />
       <div className="m1-img">
          <img src={m1} alt="" />
        </div>
        <h3 className="text-light">Ich bin Sara </h3>
        <h2 className="text-primary">Web Entwicklerin</h2>
        <CTA />
      </div>
    </header>
  )
}

export default Header
