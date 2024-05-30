import React from 'react'

function Car({car}) {
  return (
    <>
      <div className="col-6 test d-flex flex-column">
        {/* <div className='width'> */}
          <img src={car.thumbnail} alt="audi" className="img-fluid" li/>
          <div className='d-flex justify-content-between w-100'> <p>{car.name}</p> <p>price:{car.price}$</p> </div>
          {/* </div> */}
        </div>
    </>
  )
}

export default Car
