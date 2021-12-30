import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { NavLink , Route, HashRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    </>
  );
}

export default App;
