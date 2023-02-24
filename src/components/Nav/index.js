import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import resume from "../../assets/resume.pdf"

function Nav() {
  const  categories = [
    { name: 'Portfoilo', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'Projects', description: 'Portraits of people in my life' },
    { name: 'Education', description: 'school is university of toronto' },
    { name: '', description: 'contacting me with my information' }
  ];
  const handleClick = () => {
    console.log("click handled")
     const links = [
      {
        id:1,
        link: 'Portfolio'
      },
      {
        id:2,
        link: 'Projects'
      },
      {
        id:3,
        link: 'Education'
      },
   
      {
        id:5,
        link: 'contact'
      }
     ]
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> </span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        <li>
          <a href={resume} target="_blank">Resume</a>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;