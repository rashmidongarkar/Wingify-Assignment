import React from "react";
import Card from "./components/Card/Card";
import LoginForm from "./components/LoginForm/LoginForm";
import './App.css';
function App() {
  return (
    <>
    <div >
      <div  >
    <h1 >
        Welcome
    </h1>
    
      
    {/* <!-- Hexagon Division --> */}
    <div className="square"
        id="hexagon">
    </div>
    <div className="square2"
        id="hexagon">
    </div>


      </div>
      
      <Card
      
       imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sp3v7GN0n7IpaDECdDs4zUWjy0kchr2YlA&usqp=CAU"
        imageAlt="Example image"
        imageText="Welcome To Login Page"
        // imageText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //   description="Example card description"
      //   buttonText="Learn More"
      
      
      // title="Title" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    
    />
      </div>
    <LoginForm />
    </>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import LoginForm from './components/Login/LoginForm';

// function App() {
//   const logoutHandler =()=>{
//     setIsLoggedIn(false);
//     localStorage.setItem("loggedIn","0");
//   };
//   return (
//   <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

//     <LoginForm />
//   );
// }

// export default App;






// // import './App.css';
// // import React, { useEffect } from 'react';
// // import Home from "./components/Home/Home";

// // import Login from './components/Login/LoginForm';
// // // import { useEffect } from 'react';

// // import MainHeader from './components/MainHeader/MainHeader';
// // import { useState } from 'react';

// // function App() {
// // const [isLoggedIn, setIsLoggedIn]= useState(false);
// // const storedInfo= localStorage.getItem("LoggedIn");

// // useEffect(()=>
// // {
// //   if(storedInfo === "1")
// //   {
// //     setIsLoggedIn(true);
// //   }
// // },[])


// // const loginHandler = (email, password)=>{
// //   //we should of course check email n psw
// //   // but its just a dummy demo anyways
// //   //if(email==='admin@bitcode.in' && psw='123456')
// //   setIsLoggedIn(true);

// // };

// // const logoutHandler =()=>{
// //   setIsLoggedIn(false);
// //   localStorage.setItem("loggedIn","0");
// // };

// //   return (
// //     <>
// //       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
// //       <main>
// //         {!isLoggedIn && <Login onLogin={loginHandler} />}

// //         <div class="footer">
// //   <p>Author: Hege Refsnes</p>
// //   <p><a href="mailto:hege@example.com">hege@example.com</a></p>
// // </div>
// //       </main>
// //     </>
// //   );
// // }

// // export default App;











// import './App.css';
// import React, { useEffect } from 'react';

// // import LoginForm from './components/LoginForm';
// import LoginForm from './components/LoginForm/LoginForm';

// import { useState } from 'react';

// function App() {
// const [isLoggedIn, setIsLoggedIn]= useState(false);
// const storedInfo= localStorage.getItem("LoggedIn");

// useEffect(()=>
// {
//   if(storedInfo === "1")
//   {
//     setIsLoggedIn(true);
//   }
// },[]);


// const loginHandler = (username, password)=>{
//   //we should of course check email n psw
//   // but its just a dummy demo anyways
//   //if(email==='admin@bitcode.in' && psw='123456')
//   setIsLoggedIn(true);

// };

// const logoutHandler =()=>{
//   setIsLoggedIn(false);
//   localStorage.setItem("loggedIn","0");
// };

//   return (
//     <React.Fragment>
//       {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
//       <main>
//         {!isLoggedIn && <LoginForm onLogin={loginHandler} />}
//         {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}

//         <div class="footer">
//   <p>Author: Hege Refsnes</p>
//   <p><a href="mailto:hege@example.com">hege@example.com</a></p>
// </div>
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;

