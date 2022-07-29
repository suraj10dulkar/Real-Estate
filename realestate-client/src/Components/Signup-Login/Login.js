import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import "./Login.css"

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({})
  const [dataSent, setDataSent] = useState(false)
  const [cookies, setCookie] = useCookies([]);
  let navigate = useNavigate();


  const handleLogin = (e)=>{
    e.preventDefault();
    setLoginDetails({
      email : e.target.elements.email.value,
      password : e.target.elements.password.value
    })
    setDataSent(true)
      // console.log(e.target.elements.email.value)
      // console.log(e.target.elements.password.value)
  }

  useEffect(() => {
    const userLogin = ()=>{
      axios({
        method : 'post',
        url: "http://localhost:5000/login",
        data : loginDetails

      }).then((response)=>{
        let token = response.data.authToken
        setCookie("jwt", token,  { path: '/' })
        console.log(token)
        // console.log(response.data.authToken)
        navigate("/property")
      }).catch((err)=>{
          console.log(err)
          if(err.response.data === "User doesn't exists!"){
            window.alert("User doesn't exists!")
          }else if(err.response.data === "Incorrect password"){
            window.alert("Incorrect password")
          }
      })

    }
    if(dataSent){
      userLogin()
      setDataSent(false)
      // console.log( `This is cookie from useEffect => ${cookies}`)
    }
    
    
  }, [loginDetails, dataSent, navigate,cookies, setCookie])

  return (
    <>
    <div className='L-container'>
      <div className='L-formDiv'>
          <h1>Realestate</h1>
          <p>Enter your credentials to access your account</p>
          <form action='/login' method='POST' onSubmit={handleLogin}>        
              <input id='L-userid' type="email" required={true}  name='email' placeholder='USER ID'/>
              <input id='L-password' name='password'  required={true} type="password" placeholder='PASSWORD'/>  
              <button type='submit' id='L-signin'>Sign In</button>       
          </form>
          <Link className='L-signup' to="/signup">Signup</Link>
      </div>

      <h3 id='L-afterForm' >Don't have an account? <Link className='signup' to="/signup">Signup</Link></h3>
    </div>
    </>
  )
}
