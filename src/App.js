import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';


function App() {
  return (
    <div className="App"> 
   
     <Header/>
     <Body/>
      {/* <!-- Project Links --> */}
      <h1>Projects</h1>
      <a href="https://007krm.github.io/Day-Scheduler/">
        <h2>Day Scheduler</h2>
      </a>
      <br />
      <a href="https://007krm.github.io/Password-Generator-Homework/">
        <h2>Password Generator</h2>
      </a>
      {/* <!-- Group projects --> */}
      <h1>Group Project</h1>
      <a href="https://emacartoon.github.io/Dinner-with-K-T/">
        <h2>Dinner with Taylor & Kanye</h2>
      </a>

      <a href="https://page-turner-mj-ed-kr.herokuapp.com/">
        <h2>Page Turner</h2>
      </a>

      <h1>Hobbies</h1>
      <ul>
        <h2>
          {" "}
          <li>I enjoy fishing and camping.</li>
          <li>I like trying out new restraunts.</li>
          <li>I spend my free time playing video games.</li>
          <li>I travel any time I can.</li>
        </h2>
      </ul>
      <Footer/>
    </div>
  );
}

export default App;
