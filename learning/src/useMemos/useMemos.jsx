import React, { useMemo, useState } from 'react';

function useMemo({ list }) {

    const [count, setCount] = useState(0);

    function changeing(){
        useMemo((
            setCount(1)
        )
    ,[count])
    }

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={changeing} >Click </button>
    </div>
  );
}

export default useMemo;