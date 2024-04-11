

// Module css, folders are Button. files insides -------------------------------------------------
// import styles from './Button.module.css';

// function Button(){
//     return(
//         <button className={styles.button}>Click me</button>
//     )
// }

//inline css
function Button(){

    const styles = {
        backgroundColor:"red",
        color:"white",
        padding:"10px 20px",
        borderRadius: "5px",
        border:"none",
        cursor:"pointer"
    }

    return(
        <button style={styles}>Click me</button>
    )
}


export default Button;

