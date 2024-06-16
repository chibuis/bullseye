import React from 'react';
import benz from '../assets/benz.jpg';
import { useEffect, useState } from 'react'
import axios from "axios"

const DashboardAdmin = () => {
  const [cars, setCars] = useState([])

  useEffect(()=> {
    // Make a request for a user with a given ID
    axios.get('http://localhost:3001/car')
    .then(function (response) {
      // handle success
      console.log(response);
      setCars(response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }, [])
  return (
    
       <div className='d-flex flex-column gap-4'>
      {cars.map(car => (
        <div className='container'>
          <div className='row'>
            <div className="col-md-4" style={{ backgroundColor: 'grey' }}>
            <img src={car.Image} alt="location" className="img-fluid" style={{ width: '100%', maxWidth: '430px' }} />
            </div>
            <div className="col-md-5" style={{ backgroundColor: 'grey' }}>
              <h2 >{car.CarName}</h2>
              {car.CarName}
              <hr></hr>
              Price:<b>${car.Price}</b>-Color: <b>{car.Color}</b>- Transmission:<b>{car.Transmission}</b>-Type:<b>{car.Type}</b>-Year:<b>{car.ManufacturingDate}</b>
              <hr/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardAdmin;