import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import BackBtn from '../../../../shared/components/BackBtn';

const OTP = () => {
  const [otpValue, setOtp] = useState('');

  const handleOtp = (otp: string) => {
    setOtp(otp);
  };

  return (
    <div className="OTP">
      <BackBtn />
      <form className="OTP-form">
        <h4>
          Verify your number with <br /> codes sent to you
        </h4>
        <OtpInput
          value={otpValue}
          onChange={handleOtp}
          numInputs={6}
          shouldAutoFocus
          containerStyle="container-style"
          inputStyle="input-style"
          focusStyle="focus-style"
        />

        <p className="OTP-help">
          I didn’t receive the code, <span className="OTP-resend">Resend</span>
        </p>

        <input className="btn-primary" type="submit" value="Continue" />
      </form>
    </div>
  );
};

export default OTP;
