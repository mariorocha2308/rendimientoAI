import {useState} from 'react'
import './styles/LogIn.css'
import { HiArrowLeft } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { SiPlausibleanalytics } from "react-icons/si";

const LogIn =()=>{
    const [login, setlogin] = useState({
        email:'',
        password:''
    })

    function inputChange(e){
        setlogin((prevState)=>{
            return{
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className='block_login'>
            <div className='__login__btn__pop'>
                <NavLink to='/' className='__btn__pop'>
                    <HiArrowLeft/>
                </NavLink>
            </div>
            <div className='block_login__content'>
                <div>
                    <SiPlausibleanalytics  className='__avatar__login'/>
                </div>
                <div>
                    <h1>Welcome Back To</h1>
                    <h1>Alfonso Marina</h1>
                </div>
                <label>Sign in to your account below</label>
                <div>
                    <form>
                        <label>email</label>
                        <input type='email' name='email' value={login.email} onChange={inputChange}></input>
                        <label>password</label>
                        <input type='password' name='password' value={login.password} onChange={inputChange}></input>  
                        <label>Forgot password?</label>
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn