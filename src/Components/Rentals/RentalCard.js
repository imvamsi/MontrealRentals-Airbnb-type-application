import React from 'react';

const RentalCard = () => (
  <div className="col-md-3 my-4 px-0">
    <div className="card">
      <img
        className="card-img-top"
        src="http://via.placeholder.com/350x250"
        alt="..."
      />
      <div className="card-body" style={{ lineHeight: '2em' }}>
        <h5
          className="card-title text-success mb-0"
          style={{ fontSize: '14px' }}
        >
          WHOLE APARTMENT &#183; PLATEAU
        </h5>
        <p className="lead mb-0">4 Bedroom Apartment</p>
        <p className="card-text text-muted mb-0" style={{ fontSize: '14px' }}>
          $240 per night &#183; Free Cancellation
        </p>
        <a href="/" className="text-primary">
          More Info
        </a>
      </div>
    </div>
  </div>
);

export default RentalCard;
