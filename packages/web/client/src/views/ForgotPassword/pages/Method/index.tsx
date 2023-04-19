import React from 'react';
import { Link } from 'react-router-dom';
import BackBtn from '../../../../shared/components/BackBtn';
import ForgotImage from '../../../../shared/themes/assets/images/forgot_password.svg';
import MobileImage from '../../../../shared/themes/assets/images/sms.svg';
import EmailImage from '../../../../shared/themes/assets/images/email.svg';

const Method = () => (
  <div className="ForgotPassword">
    <BackBtn />
    <h4>Forgot Your Password?</h4>
    <img
      src={ForgotImage}
      alt="forgot-password"
      className="ForgotPassword-image"
    />
    <p className="ForgotPassword-text">Choose a Password Reset Option</p>

    <Link to="/forgot-password/sms" className="link">
      <div className="ForgotPassword-method">
        <img src={MobileImage} alt="sms" />
        <p>Via SMS</p>
      </div>
    </Link>

    <Link to="/forgot-password/email" className="link">
      <div className="ForgotPassword-method">
        <img src={EmailImage} alt="email" />
        <p>Via Email</p>
      </div>
    </Link>

    <button type="button" className="btn-primary ForgotPassword-btn">
      Submit
    </button>
  </div>
);

export default Method;
