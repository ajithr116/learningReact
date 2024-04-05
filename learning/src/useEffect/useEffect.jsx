
import React,{useState, useEffect} from 'react';

function useEffected(){

    const [count, setCount] = useState(0)

    function addCount(){
        setCount(prev => prev+1)
    }

    useEffect(()=>{
        document.title = count;
    })

    return(
        <>
            <p>Count : {count}</p>
            <button onClick={addCount}>Add</button>
        </>
    );
}

export default useEffected;