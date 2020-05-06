import React, { useState } from 'react';
import RentalCard from './RentalCard';

export default function RentalList() {
  const [data, setData] = useState({
    rental: [1, 2, 3, 4, 5],
  });

  const handleClick = () => {
    const { rental } = data;
    rental.push(1);
    setData({ rental });
  };
  return (
    <>
      <section id="rentalListing">
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
          {data.rental.map((item) => (
            <RentalCard />
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-small"
          onClick={handleClick}
        >
          Add rental
        </button>
      </section>
    </>
  );
}
