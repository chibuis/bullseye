import React, { useState } from 'react';
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom';
import erik from '../assets/erik-mclean-ZRns2R5azu0-unsplash.jpg';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  async function submit(e){
    e.preventDefault();

    // try{

      const credentials = {
        name,
        email,
        password
      }

    //   await axios.post("http://localhost:3001/register", credentials)
    //   .then(res => {
    //     console.log(res)
    //     navigate('/')
    //   })
    //   .catch(e=>{
    //     // alert("wrong details")
    //     console.log(e);
    //   })
    // }
    // catch(e){
    //     console.log(e);
    // }

    axios.post('http://localhost:3001/register', credentials)
    .then(function (response) {
      console.log(response.data)
      navigate('/')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <form action='POST'>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                className="form-control"
                id=""
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id=""
                
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className="form-text text-muted">Must be at least 8 characters</small>
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">Get Started</button>
            <button className="btn btn-google">Sign Up with Google</button>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </form>
        </div>
        <div className="col-md-6">
         <img src={erik} alt="img" className="img-fluid" style={{ width: '100%' }}/> 
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;