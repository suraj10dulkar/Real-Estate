import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"

export default function Login() {
  return (
    <>
    <div className='S-container'>
      <div className='S-formDiv'>
          <h1>Logo</h1>
          <p>Create New Account</p>
          <form>       
              <input id='S-userid' name='username' placeholder='MAIL ID'/>
              <input id='S-password' name='password' placeholder='PASSWORD'/> 
              <input id='S-cpassword' name='password' placeholder='CONFIRM PASSWORD'/>  
              <button id='S-signin'>Sign Up</button>       
          </form>
          
      </div>

      <h2 id='afterForm'><Link  className='S-signup' to="/login">Sign in</Link></h2>
    </div>
    </>
  )
}
