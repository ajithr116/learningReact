import React, {useState} from 'react';
import axios from 'axios';

function Axioser() {

    const [state, setState] = useState([])

  return (
    <div>
      <h1>Hallo</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response.data);
            setState(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
      }}>Click</button>
      {state.map((obj,index)=>{
        return(
            <div key={index}>
                <h1>{index}</h1>
                <h4>{obj.title}</h4>
            </div>
        )
      })}
    </div>
  )
}

export default Axioser
