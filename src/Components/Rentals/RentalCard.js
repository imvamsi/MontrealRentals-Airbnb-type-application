import React from 'react';

const RentalCard = () => (
  <div className="container">
    <div id="rentalListing">
      <h1
        className="page-title my-4"
        style={{
          fontSize: '33px',
          fontWeight: '500',
        }}
      >
        Your Home in Montréal
      </h1>
      <div className="row">
        <div className="card col-md-3 my-4 px-0">
          <img
            src="http://via.placeholder.com/350x250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={{ lineHeight: '2em' }}>
            <h5
              className="card-title text-success mb-0"
              style={{ fontSize: '1em' }}
            >
              WHOLE APARTMENT &#183; PLATEAU
            </h5>
            <p className="lead mb-0">4 Bedroom Apartment</p>
            <p className="card-text text-muted mb-0">
              $240 per night &#183; Free Cancellation
            </p>
            <a href="/" className="text-primary">
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RentalCard;
