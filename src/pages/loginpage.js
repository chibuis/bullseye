import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Login(){

  return(
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
        <input type ="email "onChange = {(e)=>{setEmail(e.target.value)}} placeholder="Email"name="''"id=""/>
        <input type ="password "onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password"name="''"id=""/>

        <input type ="submit"/>

      </form>
      <br/>
      <p>OR</p>
      <br/>
      <Link to="/register"></Link>
    </div>

  )
}
export default Login