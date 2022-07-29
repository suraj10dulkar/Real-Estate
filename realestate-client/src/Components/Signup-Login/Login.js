import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

export default function Login() {
  return (
    <>
    <div className='container'>
      <div className='formDiv'>
          <h1>Logo</h1>
          <p>Enter your credentials to access your account</p>
          <form>       
              <input id='userid' name='username' placeholder='USER ID'/>
              <input id='password' name='password' placeholder='PASSWORD'/>  
              <button id='signin'>Sign In</button>       
          </form>
          <Link className='signup' to="/signup">Signup</Link>
      </div>

      <h3 id='afterForm' >Don't have an account? <Link className='signup' to="/signup">Signup</Link></h3>
    </div>
    </>
  )
}
