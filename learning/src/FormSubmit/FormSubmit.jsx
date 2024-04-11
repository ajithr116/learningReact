import React, { useRef, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;
