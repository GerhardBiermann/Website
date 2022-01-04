import Accordion from './Accordion';
import { ProjectsData } from './ProjectsData';
import React, {useState, useEffect, useContext} from 'react';
import {MenuContext} from './Navbar';

const Projects = () => {

const active = useContext(MenuContext)

    return (
        <>
        
          <div className={active === true ? "project-active" : "project-inactive"}>
           <div id="projects-content">
               <div id="projects-heading">
                 <h1>Projects</h1>
               </div>
              <Accordion/>
           </div>
         </div>
        </>
     );
}
 
export default Projects;