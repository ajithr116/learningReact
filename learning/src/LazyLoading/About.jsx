// About.js
import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      {setInterval(() => {
        <p>We are a team of developers.</p>
      },1000)}
    </div>
  );
};

export default About;
