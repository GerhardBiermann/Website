import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomeContent from './components/HomeContent';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={HomeContent}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
