import React, {useState} from 'react';


function inputs(){

    const [value, setValue] = useState('hallo');
    
    function handleInput(){
        const val = document.getElementById('values').value;
        setValue(val);
        console.log(val);
    }

    return (
        <div>
            <input id='values' type="text"/>
            <button onClick={handleInput}>Submit</button>
            <h2>{value}</h2>
        </div>
    )
}


export default inputs;


