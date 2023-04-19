import React from 'react';
import { Link } from 'react-router-dom';
import HurrayImage from '../../../../shared/themes/assets/images/hurray.svg';

const Hurray = () => (
  <div>
    <h3>HURRAY!</h3>
    <p className="ForgotPassword-text-2 hurray-text">
      Your password change was successful
    </p>
    <img src={HurrayImage} alt="hurray" />
    <Link to="/auth/login" className="link">
      <button type="button" className="btn-primary Hurray-btn">
        Continue
      </button>
    </Link>
  </div>
);

export default Hurray;
