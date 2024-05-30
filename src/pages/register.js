import React, { useState } from 'react';
import erik from '../assets/erik-mclean-ZRns2R5azu0-unsplash.jpg';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', { name, email, password });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className="form-text text-muted">Must be at least 8 characters</small>
            </div>
            <button type="submit" className="btn btn-primary">Get Started</button>
            <button className="btn btn-google">Sign Up with Google</button>
            <p>Already have an account? <a href="/login">Log in</a></p>
          </form>
        </div>
        <div className="col-md-6">
         <img src={erik} alt="Registration Image" className="img-fluid" style={{ width: '100%' }}/> 
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;