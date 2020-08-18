import React from 'react'
import '../Login/Login.css'
import {Link} from "react-router-dom"


function Login() {
    return (
        <div className="login">
            <Link to="/"> 
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/
                thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="login__signInButton">Sing In</button>
                    </form>
                    <button  className="login__registerInButton">Create Your Amazon Account</button>
                </div>
        </div>
    )
}

export default Login
