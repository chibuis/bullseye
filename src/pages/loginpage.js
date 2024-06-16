import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate, Link } from 'react-router-dom';

function Login(){

  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:3001/login",{
      email,password
      })
      .then(res=>{
        if(res.data === "exist"){
            navigate("/")
        }
        else if(res.data === "not exist"){
         alert("User have not register")
      }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
        console.log(e);
    }


  }
    return(
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
        <input type ="email "onChange = {(e)=>{setEmail(e.target.value)}} placeholder="Email"name="''"id=""/>
        <input type ="password "onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password"name="''"id=""/>

        <input type ="submit" onClick={submit}/>

      </form>
      <br/>
      <p>OR</p>
      <br/>
      <Link to="/register"></Link>
    </div>

  )
}
export default Login