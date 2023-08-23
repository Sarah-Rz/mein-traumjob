import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import {DiSass} from "react-icons/di";
import {SiRedux} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {DiMaterializecss} from "react-icons/di";
import {SiJinja} from "react-icons/si";
import {FaPython} from "react-icons/fa";



const Experience = () => {
  return (
    <section id="experience">
      <h5>Welche Fähigkeiten ich habe</h5>
      <h2>Meine Erfahrungen</h2>
      <div className="container experience__container">
        <div>
          <h3>Frontend Development</h3>
          <div className="experience__content-frontend">
          <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <h4>JavaScript ES6</h4>
              <small className="text-light">
                Regular Expressions | Debugging | Basic Data Structures | Object Oriented Programming | Functional Programming
              </small>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <h4>React</h4>
              <small className="text-light">
               JSX
              </small>
              <br />
              <small className="text-light">
               State, Props
              </small>
              <br />
              <small className="text-light">
               Babel
              </small>
            </article>
            <article className="experience__details">
              <SiJinja className="experience__details-icon" />
              <h4>Jinja</h4>
              <small className="text-light">
              Web Template Engine für die Programmiersprache Python              
              </small>
            </article>
            <article className="experience__details">
              <DiJqueryLogo className="experience__details-icon" />
              <h4>jQuery</h4>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icon" />
              <h4>SASS</h4>
              <small className="text-light">
               mixin
              </small>
              <br />
              <small className="text-light">
               inculde
              </small>
              <br />
              <small className="text-light">
               extend
              </small>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <DiMaterializecss className="experience__details-icon" />
              <h4>Materialize</h4>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <h4>CSS3</h4>
              <small className="text-light">
                Responsive Web Design <br /> CSS Animation <br /> CSS Transform
              </small>
            </article>
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <h4>Git</h4>
            </article>
           
          </div>
        </div>
      </div>
      <div className = "container experience__container">
      <div>
           <h3>Backend Development</h3>
           <div className="experience__content-backend">
           <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <h4>Python Programming</h4>
              <small className="text-light">
              Data Structure | Tuple | Database (DBMS) | SQL |
              Data Analysis | Data Visualization (DataViz) | Json | Xml | Web Scraping
              </small>
            </article>

           </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;
