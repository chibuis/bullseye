import React, {useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const CarPost = () => {

  const [Image, setImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const navigate = useNavigate();
  const [Type, setType] = useState('');
  const [CarName, setCarName] = useState('');
  const [FuelType, setFuelType] = useState('');
  const [Transmission, setTransmission] = useState('');
  const [Color, setColor] = useState('');
  const [ManufacturingDate, setManufacturingDate] = useState('');
  const [Price, setPrice] = useState('');
  const [Description, setDescription] = useState('');
  

  async function submit(e){
    e.preventDefault();

    // try{

      const information = {
        Image,
        Type,
        CarName,
        FuelType,
        Transmission,
        Color,
        ManufacturingDate,
        Price,
        Description
      }

      console.log(information)

      axios.post('http://localhost:3001/car', information)
      .then(function (response) {
        console.log(response.data)
        navigate('/postcar')
      })
      .catch(function (error) {
        console.log(error);
      });

    //   await axios.post("http://localhost:3001/car", information)
    //   .then(res => {
    //     console.log(res.json())
    //     navigate('postcar')
    //   })
    //   .catch(e=>{
    //     alert("wrong details")
    //     console.log(e);
    //   })
    // }
    // catch(e){
    //     console.log(e);
    // }


  }

  return (
    <>
      <div className="container " >
        <form className='border border-black '>
          <div className="form-group">
            
          {Image && ( // Added conditional rendering for displaying the selected image
          <div className="mt-4 text-center">
            <h5>Selected Image:</h5>
            <img src={Image} alt="Selected" style={{ maxWidth: '10%', height: 'auto' }} />
          </div>
        )}
        
          <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={handleImageChange} // Added onChange event handler
              
            />
          </div>

          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Type</label>
              <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setType(e.target.value)}>
                <option>BMW</option>
                <option>AUDI</option>
                <option>FERRARI</option>
                <option>TESLA</option>
                <option>VOLVO</option>
                <option>TOYOTA</option>
                <option>HONDA</option>
                <option>FORD</option>
              </select>
            </div>
          </div>

          <div className="form-group col-md-8">
            <label htmlFor="exampleFormControlInput2">Car Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput2" onChange={(e) => setCarName(e.target.value)}/>
          </div>

          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Fuel Type</label>
              <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setFuelType(e.target.value)}>
                <option>Petrol</option>
                <option>Hybrid</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>CNG</option>
              </select>
            </div>
          </div>

          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Transmission</label>
              <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setTransmission(e.target.value)}>
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </div>
          </div>

          <div className="form-group col-md-8">
            <label htmlFor="exampleFormControlSelect1">Color</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setColor(e.target.value)}>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Black</option>
              <option>Orange</option>
              <option>Grey</option>
              <option>Silver</option>
              <option>Violet</option>
            </select>
          </div>

          <div className="form-group col-md-8">
            <label htmlFor="exampleFormControlInput1">Manufacturing Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" onChange={(e) => setManufacturingDate(e.target.value)}/>
          </div>

          <div className="form-group col-md-8">
            <label htmlFor="exampleFormControlInput2">Price</label>
            <input type="text" className="form-control" id="exampleFormControlInput2" onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div className="form-group col-md-8">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

        
            <div className="form-group mt-3 col-md-2">
              <button type="submit" onClick={submit} className="btn btn-secondary mb-2 " >Post</button>
            </div>
          
        </form>
      </div>
    </>
  );
};

export default CarPost;