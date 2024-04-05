
import React, {useState} from 'react';

function updateArrayState(){

    const [foods, setFoods] = useState(["Apple","orange","banana"]);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFoods(foodsPrev => [...foodsPrev, newFood]);

    }

    function handleRemoveFood(index){   
        setFoods(foods.filter((_, i)=>i!=index))
    }

    return(
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default updateArrayState;
