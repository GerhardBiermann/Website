import Accordion from './Accordion';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
    return (
        <>
           <div id="projects-content">
               <div id="projects-heading">
                 <h1>Projects</h1>
               </div>
              <Accordion/>
           </div>
           
        </>
     );
}
 
export default Projects;