import React from "react";
import "./about.css";
import Me from "../../assets/Me.jpg";
import m4 from "../../assets/m4.png";
import m5 from "../../assets/m5.png";
import m6 from "../../assets/m6.png";
import m7 from "../../assets/m7.png";
import m8 from "../../assets/m8.png";
import m9 from "../../assets/m9.png";
import m10 from "../../assets/m10.png";
import m11 from "../../assets/m11.png";
import m12 from "../../assets/m12.png";
import m13 from "../../assets/m13.png";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import {IoIosBicycle} from 'react-icons/io';


const About = () => {
  return (
    <section id="about">
      <h2 className="h2-title-light">Meine Geschichte</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Erfahrung</h5>
              <small>HTML | CSS | Responsive Web-design: Bootstrap, Materialize, Chakra UI | JS ES6 | React | Jinja | Arbeit mit API & Server</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projekte</h5>
              <small>Selbstprojekte: 
                <br />
                Portfolio Website | E-commerce App
              </small>
              <br />
              <small>
                Firmenprojekte: 
                <br />
                Klinik Website
              </small>
            </article>
          </div>
          <div className="about__story">
          <p>
          Hallo, mein Name ist Sara. Ich interessiere mich für Web Entwicklung. 
          Im Januar 2022 habe ich zuerst mit Scrimba und dann mit FreeCodeCamp 
          (interaktive Lern-Web-Plattform) angefangen zu programmieren. 
          Ich habe einen langen Weg zurückgelegt, um endlich meinen Traumjob zu finden.
          Hier ist meine Geschichte, wie ich eine Entwicklerin wurde!
            </p>
            <h2>- - - - - - - - - - - - - - - - - - - - - -<IoIosBicycle/> - - - - - - - - - - - - - - </h2>
            <br />
          </div>
        </div>
      </div>
      <div className="about__story-part-2">    
        <p>
        <div className="right-img">
          <img src={m11} alt="" />
        </div>
        Zunächst sollte ich sagen, dass ich an der Universität Genetik studiert habe. 
        Aber wie ich zum Programmieren gekommen bin, ist eine lange Geschichte! Sind Sie bereit, 
        mehr über meine Expedition zu erfahren? dann los!...
        <br />
        Als Kind war ich immer neugierig auf Details und darauf, wie winzig kleine Dinge große 
        Auswirkungen haben können. 
        Ich dachte, die Genetik sei ein Gebiet, auf dem ich außerordentliche Dinge tun könnte.</p>
        <br />
        <div className="left-img">
          <img src={m5} alt="" />
        </div>
        <p>
        Aber ich habe mich geirrt. Meine Vorstellungen von der Genetik waren ganz anders als das, 
        was an der Universität gelehrt wurde. Die Genetik hat zahlreiche Grenzen.
        man kann nicht alles machen, was man will. und es geht mehr um die Forschung, nicht um die 
        Herstellung oder etwas Kreatives. Ich liebe es zwar, zu forschen und in verschiedenen Büchern oder
        im Internet nach einer Antwort zu suchen, aber ich möchte am Ende des Tages auch die Ergebnisse 
        meiner Arbeit sehen. bei der Genetik war das nicht so möglich.
        </p> 
        <br />
        <div className="right-img">
          <img src={m12} alt="" />
        </div>
        <p>
        Während meines Bachelorstudiums habe ich angefangen, eine neue Sprache zu lernen. <b>Deutsch. </b>
         Nach etwa 9 Monaten war ich in der Lage, die Sprache auf B1-Niveau zu beherrschen. 
        Da ich mich für diese Sprache interessierte und um mein Deutsch zu verbessern, 
        beschloss ich, für kurze Zeit als Praktikantin in einem Übersetzungsbüro zu arbeiten. 
        Ich liebte diesen Job. Jeden Tag hatte ich mit dem Computer und Word Microsoft Office zu tun, 
        übersetzte offizielle Dokumente und lernte viele neue Dinge.
        </p>
        <div className="left-img">
          <img src={m13} alt="" />
        </div>
        <p>
        Allerdings hat mich der Mangel an Herausforderungen gestört. 
        </p>
        <br />
        <p>
        Zu dieser Zeit hatte ich eine Mitbewohnerin, die im Bereich SEO arbeitete. 
        Sie redete immer begeistert von ihrem Beruf, ihren Projekten und dem tollen Team, mit dem sie arbeitete. 
        <br />Klingt toll, oder? <br />Das war der Wendepunkt in meinem Leben.
        </p>
        <div className="right-img">
          <img src={m7} alt="" />
        </div>
        <p>
        Ich begann, nach allen möglichen IT-Jobs zu suchen, und schließlich fand ich es. 
        Als ich meinen ersten Code "Hello World" schrieb, öffnete sich eine neue Welt für mich!
        Und meine Expedition in dieser wunderbaren Welt begann. Ich habe mit Scrimba grundlegende HTML, CSS und JavaScript gelernt. 
        Danach habe ich Frontend Kurse bei Free Code Camp belegt und einige Projekte mit JS Frameworks wie React und modernen responsiven CSS Frameworks wie Materialize, Bootstrap und Chakra UI erstellt.
        </p>
        <br />
        <p>
        Nach 11 Monaten konnte ich meine erste Stelle als Praktikantin für Frontend Entwicklung bei einer digital-Marketing-Firma antreten!
        Wir waren einen Startup-Team von 12 Personen, darunter Grafikdesigner, Softwareexperten, UI/UX-Designer, Backend- und Frontend-Programmierer, die nach der Scrum- Methode arbeiteten.
        </p>
        <br />
        <p>
        Zu meinen Aufgaben gehören:  
        Dynamisierung der Webseite (für die Klinik) mit Jinja (Logik), erstellt die Seite (Register/Login, Blogs, Profile, 
        Onlinereservierung, Galerie,...), lösung der Probleme, Arbeit mit CSS, Bootstrap, Fancybox,..., Anwendung von Lozad und SEO, Arbeit mit API, WinSCP, wenige Erfahrung mit Javascript für einige Teil, uzw.
        Und jetzt will ich eine Ausbildung als Anwendungsentwicklerin in Deutschland machen!</p>
        <p>
        <ul> 
          <li>Hier erkläre ich einige Ausdrücke meiner Aufgaben:</li>
          <li><b>- Dynamisierung von Websites:</b> Das Unternehmen, für das ich gearbeitet habe, 
            war eine Agentur für digitales Marketing, die dynamische Websites für einige Berufsgruppen 
            (hauptsächlich Ärzte, Apotheken, Online-Shopping usw.) erstellt hat.  
            Damit die Kunden diese Website für sich selbst kaufen und dann ihre eigenen Produkte, 
            Inhalte,... ganz einfach hinzufügen können. Das ganze Projekt wurde mit Angular, Jinja, JavaScript 
            und so weiter umgesetzt.
            <br />
            Und meine Rolle in diesem Teil war: Dynamisierung von Header (Navbar, Logo), 
            Footer (Adresse, Handy/Telefon, Schnellzugriff), Artikelteil, Tab/Login-Seite, Contact-us, 
            About-us, usw. mit Jinja.
          </li>
          <div className="right-img">
          <img src={m8} alt="" />
          </div>
          <li>
          <b>- Scrum-Methode:</b> Jeden Tag wurden jeder Person Aufgaben zugeteilt, die zu einer bestimmten Zeit 
          erledigt werden mussten. Zuerst habe ich meine Aufgaben organisiert und nach Priorität erledigt.
          </li>
          <li>
          <b>Erfahrung mit JavaScript bei der Arbeit:</b> Ich habe einen Code für die Suchleiste geschrieben, 
          einen Code für das Datum der Artikel-Seite.
          </li>
          <li>
          <div className="right-img">
          <img src={m10} alt="" />
          </div>
          <b>Lösen der Probleme:</b> Manchmal funktioniert ein Code oder ein Stil nicht. 
          Das ist beim Programmieren ganz normal. Zuerst habe ich lange überlegt, warum ich diese Fehler bekomme 
          oder warum mein Code nicht funktioniert. Manchmal konnte ich das Problem selbst lösen. Wenn ich keine 
          Antwort bekommen habe, habe ich entweder Stack Overflow benutzt (meistens konnte ich dort die richtige
           Antwort finden) oder ich habe das Team gefragt und sie haben mir den Hinweis gegeben.
          </li>
        </ul>
          <br />
          <p>
          Alles in allem kann ich sagen, dass dieser Job nicht so einfach ist. 
          Es gibt immer Probleme zu lösen oder Herausforderungen. Aber das ist es, was mir Spaß macht. 
          Wenn ich ein Problem lösen kann, bin ich stolz auf mich, dass ich nicht aufgegeben habe. 
          Programmieren macht mich zu einem stärkeren Menschen. 
          Das ist erst der Anfang meiner Reise. In diesem Bereich gibt es für mich noch viel zu lernen.
          Ich kann nicht länger auf die Ausbildung in Deutschland warten.
          </p>
        <div className="left-img">
          <img src={m9} alt="" />
        </div>
        Begleiten Sie mich auf dieser wunderbaren Expedition!...
        </p>
      </div>
    </section>
  );
};

export default About;
