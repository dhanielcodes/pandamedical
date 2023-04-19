import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import BackBtn from '../../../../shared/components/BackBtn';
import InputField from '../../../../shared/components/InputField';
import EmailImage from '../../../../shared/themes/assets/images/email_locked.svg';
import axiosCustom from '../../../../utilities/axios';

const EmailRecovery = () => {
  const [email, setEmail] = useState({ value: '', isValid: false });

  const [errorMessages, setErrorMessages] = useState({
    email: '',
  });

  const checkEmail = () => {
    setEmail({ ...email, isValid: validator.isEmail(email.value) });
    if (validator.isEmpty(email.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        email: 'Please input an email address.',
      });
      return false;
    }
    if (!validator.isEmail(email.value)) {
      setErrorMessages({
        ...errorMessages,
        email: "Please check, that's not a correct email address format.",
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      email: '',
    });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { email: email.value };

    if (checkEmail()) {
      const data = await axiosCustom()
        .post('/user/password/forgotpassword', userData)
        .catch((err) => {
          toast.error(err?.response?.data?.errMessage, { className: 'toasty' });
        });
      if (data) {
        toast.success(data?.data?.message, { className: 'toasty' });
        setEmail({ ...email, value: '' });
      }
    }
  };

  return (
    <div className="ForgotPassword">
      <BackBtn />
      <h4>Forgot Your Password?</h4>
      <img
        src={EmailImage}
        alt="forgot-password"
        className="ForgotPassword-email-image"
      />
      <p className="ForgotPassword-text email-text">
        Enter Your Registered Email Address
      </p>
      <p className="ForgotPassword-text-2">
        We&lsquo;ll send a link to your mail
      </p>
      <form className="ForgotPassword-form" onSubmit={handleSubmit}>
        <InputField
          value={email.value}
          onChange={(e) => setEmail({ ...email, value: e.target.value })}
          placeholder="Email"
          type="email"
          inputStyle="ForgotPassword-input-field"
          errorMessage={errorMessages.email}
        />

        <button type="submit" className="btn-primary ForgotPassword-btn">
          Verify
        </button>
      </form>
    </div>
  );
};

export default EmailRecovery;
