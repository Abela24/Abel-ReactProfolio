import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

const App = () => <PortfolioContainer />;
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
