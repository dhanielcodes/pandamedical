import React from 'react';
import Hurray from '../../../../shared/themes/assets/images/confirmation-success.svg';

const ConfirmationSuccess = () => (
  <div className="TimeBooking">
    <p className="Confirmation-hurray">Hurray!!!</p>

    <img src={Hurray} alt="success" className="Confirmation-success-img" />

    <p className="Confirmation-all-set">You&lsquo;re all set</p>

    <p className="Confirmation-tip">
      Please, make sure you&lsquo;re on time for your appointment
    </p>
  </div>
);

export default ConfirmationSuccess;
