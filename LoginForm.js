import React, { useState } from 'react';
import './LoginForm.css';


// import React from "react";
// import './LoginForm.css';
function LoginForm() {
    
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setemailError] = useState('');


    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };





  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if  (!username.includes('@')) {
        setemailError('Email should be include the @ symbol');
      } else {
        setemailError('');
  
      }

      if (password.length < 8 || !password.includes('$')) {
        setPasswordError('Email should be greater than 8 and numeric value');
      } else {
        setPasswordError('');
  
      }
    // Send authentication request to server
  };

  return (
    <div className="card1">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <h2 >Create an account</h2>
          <label htmlFor="email">Enter your email
          <input
            type="text"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />


<div  className = 'error' >
          
          {emailError && <div className="error">{emailError}</div>}
          </div></label>
        </div>
        



<label for="dob">Date of Birth:</label>
<br></br>
<label>Day</label>

<select name="day" id="day">

  <option value="">01</option>
  
</select>
<label>Month</label>

<select name="month" id="month">
  {/* <option label="">Month</option> */}
  <option value="1">March</option>
 
</select>

<label>Year</label>

<select name="year" id="year">
  {/* <option label="">Year</option> */}
  
  <option value="1991">1995</option>
  
</select>



<div className="form-group">
          <label htmlFor="password">Choose Strong Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<div  className = 'error' >
          
          {passwordError && <div className="error">{passwordError}</div>}
          </div></label>
        
        


          
        </div>

        <div>
        <label for="dob">Are you agency  or individual:</label>
<br></br>
      <label>
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        individual
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        agency
      </label>
      
    </div>




        <button type="submit">Login</button>



        

      </form>
    </div>














// <div>
//     <div className="card">
//     <img src={props.imageSrc} alt={props.imageAlt} />
//     <div className="image-text">{props.imageText}</div>
//       {/* <div className="card-header">{props.title}</div>
//       <div className="card-body">{props.body}</div> */}
//     </div>
//     {/* <div className="cardNew">
//     <div className="card-header">{props.title}</div>
//     <div className="card-body">{props.body}</div>
    




    
//   </div> */}</div>
  );
}

export default LoginForm;














