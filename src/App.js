import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

function App() {
  
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path= "/contact">
            <Contact/>
          </Route>
          <Route path= "/projects">
            <Projects/>
          </Route>
          <Route path= "/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
