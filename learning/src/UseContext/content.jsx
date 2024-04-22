import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context'; // Corrected import path

function Content() {
  const { theme } = useContext(ThemeContext);

  const contentStyle = {
    color: theme === 'light' ? 'black' : 'white',
    backgroundColor: theme === 'light' ? 'white' : 'black',
  };

  return (
    <div style={contentStyle}>
      <p>Changing color theme</p>
      <p>Current theme is: {theme}</p>
    </div>
  );
}

export default Content;