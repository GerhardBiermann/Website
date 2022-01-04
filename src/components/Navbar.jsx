import React , {useState, useEffect} from 'react';
import '../App.css';
import HomeContent from './HomeContent';
import Contact from './Contact';
import Projects from './Projects';
import { NavLink , Route, HashRouter, Switch } from 'react-router-dom'

export const MenuContext = React.createContext()
function Navbar(){

    const [burgerMenu, setBurerMenu] = useState(true);

    function toggleMenu(){
        setBurerMenu(!burgerMenu);
    }

return(
<HashRouter>
      <div className="App">
      <div className={burgerMenu === true ? "wrapper" : "wrapper-inactive"}>
            <ul>
                <li className = "menu-items"><NavLink to="/">Home</NavLink></li>
                <li className = "menu-items"><NavLink to="/projects">Projects</NavLink></li>
                <li className = "github-linkedin"><a href="https://www.linkedin.com/in/gerhard-biermann-ab868617b/" target="_blank">Linkedin</a></li>
                <li className = "github-linkedin"><a href="https://github.com/GerhardBiermann" target="_blank">GitHub</a></li>
                <li className = "menu-items"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className = "mobile-wrapper">
            <ul>
                <li className = "menu-items"><NavLink to="/">Home</NavLink></li>
                <li className = "menu-items"><NavLink to="/projects">Projects</NavLink></li>
                <li className = "github-linkedin"><a href="https://www.linkedin.com/in/gerhard-biermann-ab868617b/" target="_blank">Linkedin</a></li>
                <li className = "github-linkedin"><a href="https://github.com/GerhardBiermann" target="_blank">GitHub</a></li>
                <li className = "menu-items"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div id={burgerMenu === true ? "burger-menu" : "burger-menu-active"} onClick={() => {toggleMenu()}}><span></span></div>
      <Switch>
          <MenuContext.Provider value={burgerMenu}>
        <Route exact path='/' component={HomeContent}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
           </MenuContext.Provider>
      </Switch>
      
      </div>
    </HashRouter>
    
)
}

export default Navbar;