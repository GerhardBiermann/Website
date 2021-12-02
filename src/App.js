import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { NavLink , Route, HashRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
      <div className = "wrapper">
            <ul>
                <li className = "menu-items"><NavLink to="/">Home</NavLink></li>
                <li className = "menu-items"><NavLink to="/projects">Projects</NavLink></li>
                <li className = "github-linkedin"><a href="https://www.linkedin.com/in/gerhard-biermann-ab868617b/" target="_blank">Linkedin</a></li>
                <li className = "github-linkedin"><a href="https://github.com/GerhardBiermann" target="_blank">GitHub</a></li>
                <li className = "menu-items"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
      <Switch>
        <Route exact path='/' component={HomeContent}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
