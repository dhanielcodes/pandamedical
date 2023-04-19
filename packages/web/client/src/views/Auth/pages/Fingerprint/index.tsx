import React from 'react';
import BackBtn from '../../../../shared/components/BackBtn';
import FingerprintShield from '../../../../shared/themes/assets/images/finger-print.png';

const OTP = () => (
  <div className="Fingerprint">
    <BackBtn />
    <form className="Fingerprint-form">
      <h4>
        Login Faster, set up <br /> Touch ID
      </h4>
      <img
        src={FingerprintShield}
        alt="fingerprint"
        className="fingerprint-shield"
      />

      <input className="btn-primary" type="submit" value="Enable" />
      <input className="btn-secondary" type="submit" value="Skip" />
    </form>
  </div>
);

export default OTP;
