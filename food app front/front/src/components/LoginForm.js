import React, { useState } from 'react';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [description,setDescription]=useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
   
  const handleDescriptionChange=(e)=>{
    setDescription(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    
    console.log('Submitted:', username, password);
  };



  return (
    <div className="login-form-container">
      <div className="gif-container">
        <img src={'https://cdn.pixabay.com/animation/2022/10/11/09/05/09-05-26-529_512.gif'} alt="Login GIF" className="login-gif" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>CONTACT-US</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">DESCRIPTION</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <img src={'https://clipart-library.com/img/988574.gif' }  alt=" " className="lgif" />
    </div>
  );
};

export default LoginForm;
