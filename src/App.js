import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './src/Nav/About';
//import PortfolioContainer from './components/Nav/PortfolioContainer';

const [currentPage, setCurrentPage] = useState("About");
const App = () => {
  if(currentPage == 'About'){
    return <About></About>
  } else if (currentPage == "contact"){
    return <contact></contact>
  }
  return (
    
 
    <div className="App">
      <Nav setCurrentPage= {setCurrentPage}/>
      <main>
        <About></About>
         <PortfolioContainer/>
      </main>
    </div>
   
    
  );
  }

export default App;
