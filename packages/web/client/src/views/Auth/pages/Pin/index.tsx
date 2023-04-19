import React, { useState } from 'react';
import PinInput from 'react-otp-input';
import BackBtn from '../../../../shared/components/BackBtn';
import Padlock from '../../../../shared/themes/assets/images/padlock.png';

const Pin = () => {
  const [pinValue, setPin] = useState('');

  const handlePin = (pin: string) => {
    setPin(pin);
  };

  return (
    <div className="OTP Pin">
      <BackBtn />
      <form className="OTP-form">
        <h4>Please Create a 4-Digit Pin</h4>
        <img src={Padlock} alt="padlock" className="padlock" />
        <PinInput
          value={pinValue}
          onChange={handlePin}
          numInputs={4}
          shouldAutoFocus
          containerStyle="pin-container-style"
          inputStyle="input-style"
          focusStyle="focus-style"
        />

        <input className="btn-primary" type="submit" value="Continue" />
      </form>
    </div>
  );
};

export default Pin;
