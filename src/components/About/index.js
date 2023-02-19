import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello, my name is Abel and I am a new web developer excited to bring my skills and creativity to the world of web development. I recently completed a comprehensive web development training program and I am eager to apply what I have learned in real-world projects.

As a new web developer, I have a strong foundation in HTML, CSS, and JavaScript, as well as experience with popular front-end frameworks such as React and Angular. I am also familiar with back-end development using languages such as Node.js and databases like MongoDB.

My goal is to leverage my skills and passion for web development to create engaging and user-friendly websites that meet the needs of clients and users. I am excited to take on new challenges and work collaboratively to deliver exceptional results.
        </p>
      </div>
    </section>
  )
}

export default About