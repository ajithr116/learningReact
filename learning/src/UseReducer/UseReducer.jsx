import {useReducer} from 'react'

let initialState = {count:0};

const UseReducer = () => {

    const reducer = (state, action)=>{
        switch(action.type){
            case 'increment':
                return {count: state.count+1}
            case 'decrement':
                return {count:state.count-1};
            case 'clear':
                return{count:0}
            default :
                throw new Error("unknown ");
        }
    }

    const[state,dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'clear'})}>Clear</button>
    </div>
  )
}

export default UseReducer
