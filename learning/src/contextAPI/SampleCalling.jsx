import { MyContext } from "./MyContext";
import {useContext} from 'react'

const SampleCalling = () => {

    const {text, setText} = useContext(MyContext);

  return (
    <div>
      <h1>This is from context = {text}</h1>
      <input type="text" onChange={(e)=>{
         setText(e.target.value);
      }}/>
    </div>
  )
}

export default SampleCalling;


