


function List(){
    const fruits = [{id:1, name:"apple",calories:95},
                    {id:2, name:"orange",calories:45},
                    {id:3, name: "pineaple",calories:159}];

    // fruits.sort((a,b)=>a.name.localeCompare(b.name))
    fruits.sort((a,b)=>a.calories - b.calories)
    
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>)
    
    return(
        <ul>{listItems}</ul>
    );
}

export default List;
