import { ProjectsData } from './ProjectsData';
import React, {useState, useEffect} from 'react';

const  Accordion = () => {
    const [active, setActive] = useState(false)

    let accordionClass
    function toggleActive(){
        setActive(!active)
    }

    return ( 
        <>
                <div onClick={() => toggleActive()} className={active === true ? "project-card-active" : "project-card"} href="/">
                 <img src={require('../images/websiteprojectimage.png').default} alt="" />
                 <h1>Portfolio website</h1>
                 <p id="website-card-overview">{ProjectsData.website}</p>
                 <p className={active === true ? "project-card-info" : "project-card-info-active"}>{ProjectsData.expand}</p>
                 <button className="arrow-button"><img src={require('../images/portfoliodownarrow.png').default} alt="" /></button>
               </div>

        </>
     );
}
 
export default Accordion;