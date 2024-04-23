


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

// import Button from './buttonOnClickListener/Button.jsx'
// function App() {

//     return (
//         <>
//             <Button />
//         </>
//     ); 
// }

//onclick listerner----------------------------------------------------------------------
// import StateAndHook from './stateAndHook/myComponent.jsx'

// function App() {

//     return (
//         <>
//             <StateAndHook />
//         </>
//     ); 
// }

// import Counter from './Counter/Counter.jsx'

// function App() {

//     return (
//         <>
//             <Counter />
//         </>
//     ); 
// }

//onChange listerner----------------------------------------------------------------------


// function App() {

//     return (
//         <>
//             <OnChange />
//         </>
//     ); 
// }

//Counter 2. updater function----------------------------------------------------------------------

// import Counter2 from './Counter2/Counter.jsx'

// function App() {

//     return (
//         <>
//             <Counter2 />
//         </>
//     ); 
// }


//update Object state ----------------------------------------------------------------------
// import UpdateObjectState from './updateObjectState/updateObject.jsx'

// function App() {

//     return (
//         <>
//             <UpdateObjectState />
//         </>
//     ); 
// }

//update Array state ----------------------------------------------------------------------
// import UpdateArrayState from './updateArrayState/updateArrayState.jsx'

// function App(){
//     return(
//         <>
//             <UpdateArrayState/>
//         </>
//     );
// }

//use Effect ----------------------------------------------------------------------
// import UseEffect from './useEffect/useEffect.jsx'

// function App(){
//     return(
//         <>
//             <UseEffect/>
//         </>
//     );
// }

//Digital clock----------------------------------------------------------------------
// import DigitalClock from './DigitalClock/DigitalClock.jsx'

// function App(){
//     return(
//         <>
//             <DigitalClock/>
//         </>
//     );
// }

//Form submit ---------------------------------------------------------------------
// import FormSubmit from './FormSubmit/FormSubmit.jsx'

// function App(){
//     return(
//         <>
//             <FormSubmit />
//         </>
//     );
// }

//Api ---------------------------------------------------------------------
// import ApiCode from './ApiCode/api.jsx'

// function App(){
//     return(
//         <>
//             <ApiCode />
//         </>
//     );
// }


//useCallaback() ---------------------------------------------------------------------
// import UseCallbacks from './useCallbacks/useCallbacks.jsx'
// import UseMemos from './useMemos/useMemos.jsx'


// function App(){
//     return(
//         <>
//             {/* <UseCallbacks/> */}
//             <UseMemos/>
//         </>
//     );
// }

// import XTraining from './XTraining.js/XTraining.jsx'

// function App(){
//     return(
//         <>
//             <XTraining />
//         </>
//     );
// }


//Axios ---------------------------------------------------------------------

// import Axios from './Axios.jsx'

// function App(){
//     return(
//         <>
//             <Axios />
//         </>
//     );
// }

//Lazy loading ---------------------------------------------------------------------

// import Lazy from './LazyLoading/lazyLoading';

// function App(){
//     return(
//         <>
//             <Lazy />
//         </>
//     );
// }

//Use reducer  ---------------------------------------------------------------------

// import UseReducer from './UseReducer/UseReducer';

// function App(){
//     return(
//         <>
//             <UseReducer />
//         </>
//     );
// }

//useContext  ---------------------------------------------------------------------


// import UseEffect from './useEffect/useEffect.jsx'

// function App(){
//     return(
//         <>
//             <UseEffect/>
//         </>
//     );
// }


// export default App

//Theme Provider using useContext  ---------------------------------------------------------------------

// import React from 'react';
// import { ThemeProvider } from './UseContext/context'; // Corrected import path

// import Header from './UseContext/Header';
// import Content from './UseContext/content';

// function App() {
//   return (
//     <ThemeProvider>
//       <Header />
//       <Content />
//     </ThemeProvider>
//   );
// }

//Context API  ---------------------------------------------------------------------

import React, { useState } from 'react';
import { MyContext, Theme } from './contextAPI/MyContext';
import MyComponent from './contextAPI/MyComponent';
import SampleCalling from './contextAPI/SampleCalling';
import ThemeSetter from './contextAPI/MyContext';

function App() {
    const [text, setText] = useState("");

    return (
        <>
            <MyContext.Provider value={{ text, setText }}>
                <Theme.Provider value={ThemeSetter()}>
                    <SampleCalling />
                    <MyComponent />
                </Theme.Provider>
            </MyContext.Provider>
        </>
    );
}

export default App;

