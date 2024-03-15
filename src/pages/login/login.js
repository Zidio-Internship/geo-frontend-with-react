import React from 'react'
import './login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  return (
    <div className='wrapper'>
      <form actions="">
        <h1>Welcome Back</h1>
        <h4>Login to continue to Geo Tracker</h4>
        <div className="input-box">
          <input type="text" placeholder="Email or username" required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label> 
          <a href="#">Forgot password?</a> 
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Dont have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}
export default Login;