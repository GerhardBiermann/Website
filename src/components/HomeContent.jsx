import React, {useContext} from 'react';
import { MenuContext } from './Navbar';

const HomeContent = () => {
    const active = useContext(MenuContext)
    return ( 
        <> 
<div className={active === true ? "home-content-active" : "home-content-inactive"}>
    <div id = "home-container">
    <div id="content-1">
        <div id ="home-picture">
            <img src = {require('../images/IMG-20181112-WA0000.jpg').default} alt = "oops!"/>
        </div>
    </div>

    <div id="content-2"> 
        <div id = "home-heading">
            <h1>Hello there</h1>
        </div>

        <div id="home-introduction">
            <p>My name is Gerhard Biermann and I am a passionate web developer from Centurion, South Africa</p>
        </div>
    </div>

    <div id="content-3">
        <p> 
            I am a Web developer (with some graphic/web design experience) currently residing in Centurion, South Africa.
            I have a strong passion for making systems better and improving society as a whole. My aim is to constantly 
            be challenged and to learn as much as possible. I have been a web developer since the early age of 17 and have been 
            taking it seriously since the age of 20. I can speak both english and afrikaans fluently.
            I also have my own transport.
        </p>
    </div>

    <div id="content-4">
        

        <div id="skills-content">
            <div id="skills-heading">Skills:</div>

            <div className="circles"><div className="skills-circles"><div className="skills-pictures" id="skills-javascript"><img src={require('../images/javascriptimage.png').default} alt="" srcset=""/></div></div></div>
            <div className = "skills-headings" id="javascript-skills-heading"><h1>Javascript</h1></div>

            <div className="circles"><div className="skills-circles"><div className="skills-pictures" id="skills-javascript"><img src={require('../images/reactimage.png').default} alt="" srcset=""/></div></div></div>
            <div className = "skills-headings" id="javascript-skills-heading"><h1>React.js</h1></div>

            <div className="circles"><div className="skills-circles"><div className="skills-pictures" id="skills-html"><img src={require('../images/nodeimage.png').default} alt="" srcset=""/></div></div></div>
            <div className="skills-headings" id="html-skills-headings"><h1>Node.js</h1></div>

            <div className="circles"><div className="skills-circles"><div className="skills-pictures" id="skills-html"><img src={require('../images/htmlimage.png').default} alt="" srcset=""/></div></div></div>
            <div className="skills-headings" id="html-skills-headings"><h1>HTML</h1></div>

            <div className="circles"><div className="skills-circles"><div className="skills-pictures" id="skills-css"><img src={require('../images/cssimage.png').default} alt="" srcset=""/></div></div></div>
            <div className="skills-headings" id="css-skills-headings"><h1>CSS</h1></div>
        </div>
    </div>
</div>

<span className ="hamburger"></span>

<div id = "burger-icon"></div>
</div>
</>
    );
}
 
export default HomeContent;