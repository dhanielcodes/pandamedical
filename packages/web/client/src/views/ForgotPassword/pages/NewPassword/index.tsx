import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import axiosCustom from '../../../../utilities/axios';
import BackBtn from '../../../../shared/components/BackBtn';
import InputField from '../../../../shared/components/InputField';
import LockedImage from '../../../../shared/themes/assets/images/locked.svg';
import EyeImage from '../../../../shared/themes/assets/images/eye.svg';
import {
  passwordPattern,
  setIconColor,
  setInputIcon,
} from '../../../../helpers/inputHelper';
import Hurray from '../Hurray';

const NewPassword = ({ location }: RouteComponentProps) => {
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [password, setPassword] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    isValid: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    password: '',
    confirmPassword: '',
  });

  const togglePassword = () => {
    setPassword({ ...password, hidden: !password.hidden });
  };

  const checkPassword = () => {
    if (validator.isEmpty(password.value)) {
      setErrorMessages({
        ...errorMessages,
        password: 'Password is required.',
      });
      setPassword({ ...password, isValid: false });
      return false;
    }
    if (!validator.isLength(password.value, { min: 8 })) {
      setErrorMessages({
        ...errorMessages,
        password: 'Password is too short.',
      });
      setPassword({ ...password, isValid: false });
      return false;
    }
    if (!passwordPattern.test(password.value)) {
      setErrorMessages({
        ...errorMessages,
        password: 'Password should match pattern described below.',
      });
      setPassword({ ...password, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      password: '',
    });
    setPassword({ ...password, isValid: true });
    return true;
  };

  const checkConfirmPassword = () => {
    if (validator.isEmpty(confirmPassword.value)) {
      setErrorMessages({
        ...errorMessages,
        confirmPassword: 'Please confirm your password.',
      });
      setConfirmPassword({ ...confirmPassword, isValid: false });
      return false;
    }
    if (confirmPassword.value !== password.value) {
      setErrorMessages({
        ...errorMessages,
        confirmPassword: 'Value must match the above password.',
      });
      setConfirmPassword({ ...confirmPassword, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      confirmPassword: '',
    });
    setConfirmPassword({ ...confirmPassword, isValid: true });
    return true;
  };

  const passwordIconColor = setIconColor(password, errorMessages.password);
  const confirmPasswordIcon = setInputIcon(
    confirmPassword,
    errorMessages.confirmPassword,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { password: password.value };
    if (checkPassword() && checkConfirmPassword()) {
      try {
        const data = await axiosCustom().post('/user/password/reset', userData);
        if (data) {
          toast.success('Password updated successfully', {
            className: 'toasty',
          });

          setPassword({ ...password, value: '' });
          setConfirmPassword({ ...confirmPassword, value: '' });

          setTimeout(() => {
            setPasswordChanged(true);
          }, 3000);
        }
      } catch (error) {
        toast.error(error?.response?.data.errMessage, {
          className: 'toasty',
        });
      }
    }
  };
  const setResetToken = async () => {
    try {
      const { token } = qs.parse(location.search, { ignoreQueryPrefix: true });
      const emailToken = typeof token === 'string' ? token : '';
      if (emailToken) {
        const verifyTokenData = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/password/verify/email`,
          { headers: { Authorization: emailToken } },
        );
        if (!verifyTokenData) {
          return toast.error('Something went wrong!', { className: 'toasty' });
        }
        const resetToken = verifyTokenData.data.data.token;
        localStorage.setItem('auth_token', resetToken);
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  };

  useEffect(() => {
    setResetToken();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ForgotPassword">
      <BackBtn />
      {passwordChanged ? (
        <Hurray />
      ) : (
        <>
          <h4>Forgot Your Password?</h4>
          <img
            src={LockedImage}
            alt="forgot-password"
            className="ForgotPassword-password-image"
          />

          <p className="ForgotPassword-text-2 password-text">
            Choose a password that&lsquo;s easy to remember
          </p>
          <form className="ForgotPassword-form" onSubmit={handleSubmit}>
            <InputField
              name="password"
              type={password.hidden ? 'password' : 'text'}
              placeholder="Password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              icon
              iconImage={EyeImage}
              iconStyle={{
                opacity: password.hidden ? 0.3 : 1,
                cursor: 'pointer',
                filter: passwordIconColor,
              }}
              borderStyle={password.isValid ? '1px solid #7BE495' : ''}
              onIconClick={togglePassword}
              errorMessage={errorMessages.password}
              onKeyUp={checkPassword}
              isEmpty={validator.isEmpty(password.value)}
            />

            <InputField
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword.value}
              icon
              iconImage={confirmPasswordIcon}
              borderStyle={confirmPassword.isValid ? '1px solid #7BE495' : ''}
              onChange={(e) =>
                setConfirmPassword({
                  ...confirmPassword,
                  value: e.target.value,
                })
              }
              errorMessage={errorMessages.confirmPassword}
              onKeyUp={checkConfirmPassword}
              isEmpty={validator.isEmpty(confirmPassword.value)}
            />

            <p className="ForgotPassword-hint">
              Password should be at least 8 characters and it should contain at
              least one uppercase letter, lowercase letter, one number and one
              special character.
            </p>

            <button type="submit" className="btn-primary NewPassword-btn">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewPassword;
