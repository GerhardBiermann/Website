import React, {useState, useEffect} from 'react';

const  Accordion = () => {
    const [websiteActive, setWebsiteActive] = useState(false);
    const [cryptoworldActive, setCryptoworldActive] = useState(false);
    const [weatherActive, setWeatherActive] = useState(false);



    function toggleWebsiteActive(){
        setWebsiteActive(!websiteActive);
    }
    function toggleCryptoworldActive(){
      setCryptoworldActive(!cryptoworldActive);
    }
    function toggleWeatherActive(){
      setWeatherActive(!weatherActive);
    } 

    const ProjectsData = {
      website:'I created this website as a means to reach more people and potential employers. A fully functional and simple React application.',
      websiteExpand:'The site is intended to serve as a means to reach potential employers and clients. The site has a minimalist design so that clients and employers can learn the most about me in the shortest amount of time. The main issue was making the site a single page application that feels organic. It also has many elements, which made it hard to make it responsive.',
      cryptoworld:'This is a cryptocurreny website that displays various cryptocurrencies in real-time',
      cryptoworldExpand:'Cryptoworld displays various currencies in real-time and updates every few minutes. The goal was to make the website as simple as possible. When a currency is clicked more information can be viewed about it.',
      weather:'Weather app that displays the current weather of any city',
      weatherExpand:'A weather app with search functionality that allows users to search cities from all over the world.',
    }

    return ( 
        <> 
               <div onClick={() => toggleWebsiteActive()} className={websiteActive === true ? "project-card-website-active" : "project-card"} href="/">
                 <img src={require('../images/websiteprojectimage.png').default} alt="" />
                 <h1>Portfolio website</h1>
                 <p className="card-overview">{ProjectsData.website}</p>
                 <p className={websiteActive === true ? "project-card-info" : "project-card-website-info-active"}>{ProjectsData.websiteExpand}</p>
                 <button className="arrow-button"><img src={require('../images/portfoliodownarrow.png').default} alt="" /></button>
               </div>
               <div onClick={() => toggleCryptoworldActive()} className={cryptoworldActive === true ? "project-card-cryptoworld-active" : "project-card"} href="/">
                 <img src={require('../images/cryptoworldprojectimage.png').default} alt="" />
                 <h1>Cryptoworld</h1>
                 <p className="card-overview">{ProjectsData.cryptoworld}</p>
                 <p className={cryptoworldActive === true ? "project-card-info" : "project-card-cryptoworld-info-active"}>{ProjectsData.cryptoworldExpand}<a className="project-link" href='https://epic-mcnulty-a5731a.netlify.app/' target='_blank'>Click here</a></p>
                 <button className="arrow-button"><img src={require('../images/portfoliodownarrow.png').default} alt="" /></button>
               </div>
               <div onClick={() => toggleWeatherActive()} className={weatherActive === true ? "project-card-weather-active" : "project-card"} href="/">
                 <img src={require('../images/weatherprojectimage.png').default} alt="" />
                 <h1>Weather app</h1>
                 <p className="card-overview">{ProjectsData.weather}</p>
                 <p className={weatherActive === true ? "project-card-info" : "project-card-weather-info-active"}>{ProjectsData.weatherExpand}<a className="project-link" href='https://kind-banach-b1044c.netlify.app' target='_blank'>Click here</a></p>
                 <button className="arrow-button"><img src={require('../images/portfoliodownarrow.png').default} alt="" /></button>
               </div>
        </>
     );
}
 
export default Accordion;