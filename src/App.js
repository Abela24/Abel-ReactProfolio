import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './src/Nav/About';
//import PortfolioContainer from './components/Nav/PortfolioContainer';


const App = () => {
  return (
    
  
    <div className="App">
      <Nav />
      <main>
        <About />
         <PortfolioContainer/>
      </main>
    </div>
    
  );
  }

export default App;
