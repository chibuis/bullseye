import React from 'react';
import car from '../assets/car1.jpg';
import loc from '../assets/lo.jpg';
const Home = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: '250px' }}>
        <div className="col-md-6">
          <h2 className="display-5">Launch and Scale Your Car Subscription Business.</h2>
          <p className="lead">
            Manage your subscriptions, recurring payments, and track all your fleet in one place. Scale your car
            subscription business through Circuly's sophisticated digital infrastructure.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <img src={car} alt="car" className="img-fluid" style={{ width: '100%', maxWidth: '400px', marginBottom: '90px' }} />
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start align-items-center ">
          <img src={loc} alt="location" className="img-fluid" style={{ width: '100%', maxWidth: '430px' }} />
        </div>
        <div className="col-md-6 fon">
          <p className='lead'>
            Vehicles ready for your users at all times
          </p>
          <p className='lead'>
            Maintenance made easy
          </p>
          <p className='lead'>
            Use dedicated workflows for fleet managers and service workers to boost availability and cut operational costs.
          </p>
          <p className='lead'>
            Optimized vehicle distribution
          </p>
          <p className='lead'>
            Leverage our tools to analyze vehicle utilization and fine-tune your fleet distribution.
          </p>
          <p className='lead'>
            24/7 availability
          </p>
          <p className='lead'>
            People depend on new mobility as much as they do on ATMs for cash. Our 24/7 on-call services and quality assurance expertise ensure we uphold this promise.
          </p>
        </div>
      </div>
      </div>
  );
};

export default Home;