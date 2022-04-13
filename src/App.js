import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About'
import Skills from './components/pages/Skills';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>

      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/contact" element={<Contact/>}/>
        <Route path= "/skills" element={<Skills/>}/>
      </Routes>
      </Router>
      
      
      {/* <h1>Hello from react </h1> */}
    </div>
  );
}

export default App;
