// SingleTrainPage.js
import React from "react";

const SingleTrainPage = ({ location }) => {
  const train = location.state;

  return (
    <div>
      <h1>Single Train</h1>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      <p>
        Departure Time: {train.departureTime.Hours}:
        {train.departureTime.Minutes}
      </p>
      <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
      <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
      <p>Price (Sleeper): {train.price.sleeper}</p>
      <p>Price (AC): {train.price.AC}</p>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
};

export default SingleTrainPage;
