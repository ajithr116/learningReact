
import userGreeings from './userGreetings.module.css';


function userGreetings(props){

    const welcomeMessage =<h2 className={userGreeings.welcomeMessage}>Welcome {props.username}</h2>
    const loginPromt = <h2 className={userGreeings.loginPromt}>Please logged in</h2>;

    // if(props.isLogged){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // return <h2>Please log in to continue</h2>

    //ternary opertor
    return(props.isLogged ? welcomeMessage : loginPromt);
}

export default userGreetings;
