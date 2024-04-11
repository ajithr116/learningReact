

import React, {useState, useCallback, useMemo} from 'react';

function useCallbacks(){

  const [count, setCount] = useState(0);

  const increment = useCallback(()=>{
    setCount(count+1);
  },[0]);

  //here what i did is when i given [0] then it is not workinh cause the dependencies is still same and no funciton call or rendering happen . 
  // if i give 'count' instead of [0] then it change the dependencies and render tha

  return(
    <div>
    <h3>{count}</h3>
        <button onClick={increment}>Click</button>
    </div>
  )
}


export default useCallbacks;
