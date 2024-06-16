import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DateField = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="date1">Select a date:</label>
            <input
              type="date"
              id="date1"
              className="form-control"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="date2">Select a date:</label>
            <input
              type="date"
              id="date2"
              className="form-control"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            <div className="form-group">
              <button type="submit" className="btn btn-secondary mb-2">Confirm identity</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DateField;