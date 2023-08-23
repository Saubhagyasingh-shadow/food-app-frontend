import React, { useState } from 'react'

const Siginform= function Signin() {
   //email,name,password,confirmpassword,role,profileimage
   const handleEmailChange = (e) => setEmail(e.target.value);
   const handleNameChange = (e) => setName(e.target.value);
   const handlePasswordChange = (e) => setPassword(e.target.value);
   const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
   const handleRoleChange = (e) => setRole(e.target.value);

   const handleProfileImageChange = (e) => setProfileImage(e.target.value);

   const [email,setEmail]=useState('');
   const [name,setName]=useState('');
   const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmPassword] = useState('');
   const [role,setRole]=useState('');
   const [profileimage,setProfileImage]=useState('');

const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    const res=await fetch('/api/users/signup',{
        method:'POST',
         headers:{
            'Content-Type':'application/json',
         },
         credentials :'include',
         body:JSON.stringify({email,name,password,confirmpassword,role,profileimage}),
    })
    const data = await res.json()
    if(res.status === 200){
        window.alert(data.message)
    }else{
        window.alert('Some error occured')
    }

  }
  catch(e){
    window.alert('Error occured : ' + e)
}
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmpassword">ConfirmPassword:</label>
        <input
          type="password"
          id="confirmpassword"
          value={password}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <div>
        
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={handleRoleChange}
          
        />
      </div>
      
      <div>
        
        <label htmlFor="ProfileImage">ProfileImage:</label>
        <input
          type="text"
          id="ProfileImage"
          value={profileimage}
          onChange={handleProfileImageChange}
          
        />
      </div>

      <button type="submit">SIGNUP</button>
    </form>
    </div>
  )
}

export default Siginform;