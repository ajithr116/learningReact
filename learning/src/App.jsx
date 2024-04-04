


//basic header and footer-----------------------------------------------
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
// function App() {
//     return (
//         <>
//             <Header/>
//             <Food/>
//             <Food/>
//             <Footer/>
//         </>
//     );
// }

//card components------------------------------------------------------
import Card from './Card.jsx';
// function App() {
//     return (
//         <>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//         </>
//     );
// }

//Button components with css congif(externam modules and inline )------------------------------------------------------
// import Button from './Button/Button.jsx';

// function App() {
//     return (
//        <Button/>
//     );
// }

//Properties, propTypes and default properties ------------------------------------------------------
import Student from './Students/Student.jsx';

function App() {
    return (
       <>
            <Student name="Doraemon" age={30} isStudent={false}/>
            <Student name="Shinchan" age={22} isStudent={true}/>
            <Student name="tom" age={67} isStudent={false}/>
            <Student age={67}/>

       </>
    );
}


export default App
