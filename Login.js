import React,{useContext} from 'react'
import { statecontext } from './context/contex';
import './login.css'
function Login() {
    const[state,dispatch]=useContext(statecontext);
 const display=()=>{
     const disp=document.querySelector('.mail');
     const pass=document.querySelector('.pass');
     dispatch({
         type:'ADD_USER',
         payload:{
             mail:disp.value,
             password:pass.value
         }
     })
     console.log(state.user);
 }

    return (
        <div>
           
            <div className="login">
                <h1>Login page</h1>
        
        <input type="mail"    placeholder="Enter your mail Id" required className="mail"></input>
           <input type="password" placeholder="Enter your password" className="pass" required></input>
           <button  onClick={display} className="btn-login"><strong><bold>Login in</bold></strong></button>
        
            </div>
            
        </div>
    )
}

export default Login
