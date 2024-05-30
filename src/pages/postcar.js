import React from 'react';
import benz from '../assets/benz.jpg';

const CarForm = () => {
  return (
    
       <>
      <div className='container'>
        <div className='row'>
          <div className="col-md-4" style={{ backgroundColor: 'grey' }}>
          <img src={benz} alt="location" className="img-fluid" style={{ width: '100%', maxWidth: '430px' }} />
          </div>
          <div className="col-md-5" style={{ backgroundColor: 'grey' }}>
            <h2 >VOLVO -S60</h2>
            Volvo S60
            <hr></hr>
            Price:<b>$200</b>-Color: <b>Silver</b>- Transmission:<b>Automatic</b>-Type:<b>Hybrid</b>-Year:<b>2023</b>
            <hr/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarForm;