import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmationPage() {
  const location = useLocation();
  const { car, rentalStartDate, rentalEndDate, totalPrice, totalDays } = location.state || {
    car: { name: '', price: 0, seats: '', image: '' },
    rentalStartDate: '',
    rentalEndDate: '',
    totalPrice: 0,
    totalDays: 0,
  };


  const [bookingNumber, setBookingNumber] = useState('');

  useEffect(() => {
    const randomBookingNumber = 'CR' + Date.now() + Math.floor(Math.random() * 1000);
    setBookingNumber(randomBookingNumber);
  }, []);

  return (
    <div className="confirmation-page">
      <h1>Booking Confirmation</h1>
      <p>Thank you for booking with us!</p>
      <p>Booking Number: <strong>{bookingNumber}</strong></p> 
      <p>Car: {car.name}</p> 
      <p>Rental Dates: {rentalStartDate} to {rentalEndDate}</p>
      <p>Total Days: {totalDays}</p>
      <p>Total Price: {totalPrice} THB</p>
    </div>
  );
}

export default ConfirmationPage;
