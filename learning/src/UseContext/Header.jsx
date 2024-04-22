import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context'; // Corrected import path

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
    </header>
  );
}

export default Header;
