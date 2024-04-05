import React, {useState} from 'react';

function updateObject(){
    const [car, setCar] = useState({year:2024,
                                    make:'ford',
                                    model:"mustang"})

    function handleYear(event){
        setCar(prev =>({...prev, year:event.target.value}))
    }
    
    function handleMake(event){
        setCar(prev =>({...prev, make:event.target.value}))
    }

    function handleModel(event){
        setCar(prev =>({...prev, model:event.target.value}))    //prev means previos state of car
    }
    return(
        <div>
            <h1>You car are : {car.year} {car.make} {car.model}</h1>
            <input type="number" value={car.year} onChange={handleYear}/><br/>
            <input type="text" value={car.make} onChange={handleMake}/><br/>
            <input type="text" value={car.model} onChange={handleModel}/>
        </div>

    )
}


export default updateObject;