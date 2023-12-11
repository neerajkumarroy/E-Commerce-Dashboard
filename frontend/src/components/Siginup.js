import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const Navigate = useNavigate();

    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            Navigate('/')
        }
    })

    const collectData = async()=>{

        console.warn(name,email,password);
        let result = await fetch('http://localhost:6500/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'content-Type':"application/json"
            },
        });

        result = await result.json();
        console.warn(result)
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
            Navigate('/')
        }
    
        
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputbox" type="text"
             value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
            <input className="inputbox" type="text"
             value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
            <input className="inputbox" type="password"
             value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></input>
            <button onClick={collectData} className="AppButton">Sign Up</button>
        </div>

    )
}

export default Signup;