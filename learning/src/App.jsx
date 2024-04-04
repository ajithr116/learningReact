


//basic header and footer-----------------------------------------------
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';
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
// import Card from './Card.jsx';

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
// import Student from './Students/Student.jsx';

// function App() {
//     return (
//        <>
//             <Student name="Doraemon" age={30} isStudent={false}/>
//             <Student name="Shinchan" age={22} isStudent={true}/>
//             <Student name="tom" age={67} isStudent={false}/>
//             <Student age={67}/>

//        </>
//     ); 
// }

//conditional rendertings. User greetings  ----------------------------------------------------------------------
// import ConditionalRendering from './conditionalRendering/userGreetings.jsx';

// function App() {
//     return (
//         <>
//             <ConditionalRendering isLogged={true} username="Ajith R"/>
//             <ConditionalRendering isLogged={false} username="Ajith R"/>
//         </>
//     ); 
// }

//REndering list----------------------------------------------------------------------
// import List from './renderList/list.jsx';



// function App() {

//     const fruits = [{id:1, name:"apple",calories:95},
//     {id:2, name:"orange",calories:45},
//     {id:3, name: "pineaple",calories:159}];

//     return (
//         <>
//             <List/>
//         </>
//     ); 
// }


//onclick listerner----------------------------------------------------------------------

import Button from './buttonOnClickListener/Button.jsx'
function App() {

    return (
        <>
            <Button />
        </>
    ); 
}


export default App
