import React, { useContext } from 'react';
import { MyContext, Theme } from './MyContext';

const MyComponent = () => {
    const { text, setText } = useContext(MyContext);
    const { theme, toggleTheme } = useContext(Theme);

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => {
                setText('Hello World');
            }}>
                Click me
            </button>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle {(theme==='Dark' ? "Light":"Dark")}</button>
        </div>
    );
}

export default MyComponent;
