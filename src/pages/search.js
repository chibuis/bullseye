import React from 'react';

const Search = () => {
  return (
    <>
      <div className='container' style={{ backgroundColor: "grey" }}>
        <div className='row'>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Brand</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Type</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Color</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Transmission</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <button type="submit" className="btn btn-secondary mb-2">Confirm identity</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
    </>
  );
};

export default Search;