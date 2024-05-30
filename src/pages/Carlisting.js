import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import audi from '../assets/audi.jpg';
import jeep from '../assets/jeep.jpg';
import Range from '../assets/Range.jpg';
import benz from '../assets/benz.jpg';
import Car from './car';

const Carlisting = () => {
  const cars = [
    {
      name: 'Audi',
      price: 80,
      thumbnail: audi,
    },
    {
      name: 'Jeep',
      price: 80,
      thumbnail: jeep,
    },
    {
      name: 'Range Rover',
      price: 80,
      thumbnail: Range,
    },
    {
      name: 'Benz',
      price: 80,
      thumbnail: benz,
    }
    // Add more car objects here as needed
  ];

  return (
    <div className="container d-flex flex-column align-items-center">

      
      <div className="cars--container row">
      <h3 className='align-self-start explore mb-4'>Explore the various cars</h3>
        {
          
        cars.map((car,index) => (
            <Car car={car} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carlisting;