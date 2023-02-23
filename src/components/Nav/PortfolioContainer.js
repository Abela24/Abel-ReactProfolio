import React, { useState } from 'react';
import Nav from './NavTabs';
import Home from './src/About/index.js';
import About from './src/Nav/About';
import Blog from './src/Nav/Blog';
import Contact from './src/Nav/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Home />;
    }
    if (currentPage === 'Project') {
      return <About />;
    }
    if (currentPage === 'education') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
