
function Button(){

    // const handleClick =() =>console.log("Hai");
    // const handleClick2 =(name)=>console.log(`${name} stop clicking`);

    // return(<button onClick={()=>handleClick2("Bro")} >click me</button>)

    //------------------------------------------------------------------------------

    // let count = 0;

    // const handleClick = (name)=>{
    //     if(count <3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time`);
    //     }
    //     else{
    //         console.log(`${name} stop clicked me ${count} time`);
    //     }
    // }
    // return(<button onClick={()=>handleClick("bro")} >click me</button>)

    //------------------------------------------------------------------------------
    // const handleClick =(event)=>{
    //     console.log(event); //just to find the contents have in that property
    //     event.target.textContent = "Ouch";
    // }
    // return (<button onClick={(event)=>handleClick(event)}>click me</button>);

    //------------------------------------------------------------------------------
    const imgUrl = './src/assets/amplifiers3.jpg';
    const handleClick=(event)=>event.target.display="none";

    return(<img onClick={(e)=> handleClick(e)} src={imgUrl}></img>)
}

export default Button;