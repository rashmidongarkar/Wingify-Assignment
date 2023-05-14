import React from "react";
import "./Card.css";
// import React, { useState } from 'react';
// import "./Card/.css";


// function Card() {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleOptionChange = (e) => {
//       setSelectedOption(e.target.value);
//     };





//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send authentication request to server
//   };
//   return (
//     <>

// <div className="card1">
//     <form onSubmit={handleSubmit}>
// <div className="form-group">
//             <h1>Create an account</h1>
//          <label htmlFor="username">Enter your email</label>
//          <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
        



//  <label for="dob">Date of Birth:</label>
//  <select name="day" id="day">
//    <option value="">Day</option>
//    <option value="1">1</option>
//    <option value="2">2</option>
//  </select>
//  <select name="month" id="month">
//    <option value="">Month</option>
//   <option value="1">January</option>
//   <option value="2">February</option>
// </select>
//  <select name="year" id="year">
//    <option value="">Year</option>
//   <option value="1990">1990</option>
//   <option value="1991">1991</option>
  
//  </select>



//  <div className="form-group">
//            <label htmlFor="password">Choose Strong Password</label>
//         <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />



//                   </div>

//         <div>
//          <label for="dob">Are you agency  or individual:</label>
//        <label>
//         <input
//           type="radio"
//           name="option"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={handleOptionChange}
//         />
//         individual
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="option"
//           value="option2"
//           checked={selectedOption === 'option2'}
//           onChange={handleOptionChange}
//         />
//         agency
//       </label>
      
//     </div>




//         <button type="submit">Login</button>



        

//       </form>
//     </div>


//     </>












function Card(props) {

return(

      


<div>
    <div className="card">
    <img src={props.imageSrc} alt={props.imageAlt} />
    <div className="image-text">{props.imageText}</div>
       <div className="card-header">{props.title}</div>
      <div className="card-body">{props.body}</div> 

     </div> 
     <div className="cardNew">
    <div className="card-header">{props.title}</div>
    <div className="card-body">{props.body}</div>
    
</div>



    
  </div> 
  
  
  );
  
  }
  


export default Card;
