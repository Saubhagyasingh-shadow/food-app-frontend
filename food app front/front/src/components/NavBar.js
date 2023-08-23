import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default function NavBar(props) {
  const navigate = useNavigate();

  const handleLogout = async()=>{
    let opt = window.confirm('Do you want to Logout ?')

    if(opt){
      try{
        const res = await fetch('/api/users/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        const data = await res.json()
        if(res.status === 200){
          window.alert(data.message)
        }
        else{
          throw new Error("Some error occured")
        }
      }
      catch(err){
        window.alert('Some error occured : ' + err)
      }
    }
  }

  const goToAllUsers = ()=>{
    navigate('/users/allusers')
  }

  const goToSignup = ()=>{
    navigate('/signin')
  }
  const goToLogin = ()=>{
    navigate('/login')
  }

  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-resp">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" onClick={handleLogout} >Logout</button>
          <button className="nav-link active" aria-current="page" onClick={goToAllUsers}>GetAlluser</button>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success mx-2" onClick={goToLogin}>Login</button>
        <button className="btn btn-outline-success" onClick={goToSignup}>Signup</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

NavBar.propTypes={

    title:PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

