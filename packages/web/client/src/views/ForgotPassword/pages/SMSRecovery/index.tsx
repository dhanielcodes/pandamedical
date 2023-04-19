import React, { useContext, useState } from 'react';
import validator from 'validator';
import PhoneInput from 'react-phone-number-input';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router-dom';
import BackBtn from '../../../../shared/components/BackBtn';
import SMSImage from '../../../../shared/themes/assets/images/phone-sms.svg';
import axiosCustom from '../../../../utilities/axios';
import { AuthContext } from '../../../../store/context';

const SMSRecovery = ({ history }: RouteComponentProps) => {
  const { state, updateUser } = useContext(AuthContext);
  const { user } = state;

  const [phoneNumber, setPhoneNumber] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    phoneNumber: '',
  });

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const checkPhoneNumber = () => {
    if (!phoneNumber) {
      setErrorMessages({
        ...errorMessages,
        phoneNumber: 'Phone Number is required.',
      });
      return false;
    }
    if (
      !validator.isNumeric(phoneNumber) ||
      !validator.isMobilePhone(phoneNumber)
    ) {
      setErrorMessages({
        ...errorMessages,
        phoneNumber: 'Please enter a valid phone number',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      phoneNumber: '',
    });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { phone: phoneNumber };

    if (checkPhoneNumber()) {
      const data = await axiosCustom()
        .post('/user/password/forgotpassword', userData)
        .catch((err) => {
          toast.error(err?.response?.data?.errMessage, { className: 'toasty' });
        });
      if (data) {
        updateUser({ ...user, ...userData });
        setPhoneNumber('');
        toast.success(data.data.message, { className: 'toasty' });
        setTimeout(() => {
          history.push('/forgot-password/otp');
        }, 3000);
      }
    }
  };

  return (
    <div className="ForgotPassword">
      <BackBtn />
      <h4>Forgot Your Password?</h4>
      <img
        src={SMSImage}
        alt="forgot-password"
        className="ForgotPassword-email-image"
      />
      <p className="ForgotPassword-text sms-text">
        Enter Your Registered Phone Number
      </p>
      <p className="ForgotPassword-text-2">
        We&lsquo;ll send a code to your number
      </p>
      <form className="ForgotPassword-form" onSubmit={handleSubmit}>
        <div className="Register-phone-input-field">
          <PhoneInput
            className="SMS-phone-input"
            placeholder="Enter phone number"
            defaultCountry="NG"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            international
          />
        </div>
        <div className="error-msg">{errorMessages.phoneNumber}</div>

        <button type="submit" className="btn-primary SMS-btn">
          Verify
        </button>
      </form>
    </div>
  );
};

export default SMSRecovery;
