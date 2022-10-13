import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Css/Login.css'
import { auth } from './firebase'


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        auth    
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }  

  return (
    <div className='login'>
        <Link to='/'>
            <img 
            className='login__logo'
            src='https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg'
            />
        </Link>
        <div className='login__container'>
            <h1>Sign-In</h1>

            <form>
                <h5>Email or mobile phone number</h5>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <button type='submit'  
                className='login__signInButton'
                onClick={signIn}
                >
                Sign In
                </button>
            </form>
            
            <br />
            <p>By continuing, you agree to Amazon's <br/>
            Conditions of Use and Privacy Notice.</p>
            <br/>
            <p>
            Need help?</p>
            
        </div>
        <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
    </div>
  )
}

export default Login