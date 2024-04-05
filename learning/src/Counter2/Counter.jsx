import React, {useState} from 'react';
import Count from './count.module.css'


function Counter(){
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(prev => prev+1);
        setCount(prev => prev+1);

    }

    const decrement = ()=>{
        setCount(prev => prev-1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return (<div className={Count.counterCountiner}>
            <p className={Count.countDisplay}>{count}</p>
            <button className={Count.counterButton} onClick={decrement}>Decrement</button>
            <button className={Count.counterButton} onClick={reset}>Reset</button>
            <button className={Count.counterButton} onClick={increment}>Increment</button>
        </div>)
}

export default Counter;