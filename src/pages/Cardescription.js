import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import audi from '../assets/audi.jpg';
import jeep from '../assets/jeep.jpg';
import Range from '../assets/Range.jpg';

const Cardescription = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={audi} 
                alt="audi"
              />
              <Carousel.Caption>
                <h3>Slide 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={jeep} 
                alt="jeep"
              />
              <Carousel.Caption>
                <h3>Slide 2</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Range} 
                alt="range"
              />
              <Carousel.Caption>
                <h3>Slide 3</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <h2>Text on the Right</h2>
          <p>Some example text here.</p>
        </div>
      </div>
    </div>
  );
};

export default Cardescription;