import React from 'react'
import './Login.css';
import { FaUser, FaLock} from "react-icons/fa";
const Login = (show) => {
  return (
    <div className='wrapper'>
        <form action="">
            <br/>
            <h1>Welcome Back!</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button> {/* Added "Login" text here */}

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>

            <div className='dahbo'>
            <a href='/'>
                    Dashboard
                </a>
            </div>
        </form>
    </div>
  );
};

export default Login;