/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import validator from 'validator';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import InputField from '../../../../shared/components/InputField';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import PadlockIcon from '../../../../shared/themes/assets/images/profile-padlock.svg';
import EyeImage from '../../../../shared/themes/assets/images/profile-eye.svg';
import {
  passwordPattern,
  setIconColor,
  setInputIcon,
} from '../../../../helpers/inputHelper';
import Button from '../../../../shared/components/Button';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Password = ({ history }: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });

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
    currentPassword: '',
    password: '',
    confirmPassword: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword({ ...currentPassword, value: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, value: e.target.value });
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword({ ...confirmPassword, value: e.target.value });
  };

  const toggleCurrentPassword = () => {
    setCurrentPassword({ ...currentPassword, hidden: !currentPassword.hidden });
  };

  const togglePassword = () => {
    setPassword({ ...password, hidden: !password.hidden });
  };

  const checkCurrentPassword = () => {
    if (validator.isEmpty(currentPassword.value)) {
      setErrorMessages({
        ...errorMessages,
        currentPassword: 'This field is required.',
      });
      setCurrentPassword({ ...currentPassword, isValid: false });
      return false;
    }
    if (!validator.isLength(currentPassword.value, { min: 8 })) {
      setErrorMessages({
        ...errorMessages,
        currentPassword: 'Password is too short.',
      });
      setCurrentPassword({ ...currentPassword, isValid: false });
      return false;
    }
    if (!passwordPattern.test(currentPassword.value)) {
      setErrorMessages({
        ...errorMessages,
        currentPassword: 'Password should match pattern described below.',
      });
      setCurrentPassword({ ...currentPassword, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      currentPassword: '',
    });
    setCurrentPassword({ ...currentPassword, isValid: true });
    return true;
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
    if (!passwordPattern.test(confirmPassword.value)) {
      setErrorMessages({
        ...errorMessages,
        confirmPassword: 'Password should match pattern described below.',
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
  const currentPasswordIconColor = setIconColor(
    currentPassword,
    errorMessages.currentPassword,
  );

  const confirmPasswordIcon = setInputIcon(
    confirmPassword,
    errorMessages.confirmPassword,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      password: currentPassword.value,
      newPassword: password.value,
    };

    if (checkCurrentPassword() && checkPassword() && checkConfirmPassword()) {
      try {
        setLoading(true);
        const data = await axiosCustom().put('/user/password/change', userData);
        if (data) {
          toast.success('Password Updated Successfully', {
            className: 'toasty',
          });
          setCurrentPassword({ ...currentPassword, value: '' });
          setPassword({ ...password, value: '' });
          setConfirmPassword({ ...confirmPassword, value: '' });
          setLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.errMessage, { className: 'toasty' });
        setLoading(false);
      }
    }
  };

  return (
    <div className="Profile">
      {loading && <Loader />}
      <div className="Profile-header">
        <span className="Profile-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <p>Change Password</p>
        </span>

        <div className="Profile-img">
          <img src={PadlockIcon} alt="password" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="current-password" className="Profile-label">
                Current Password*
              </label>
            </div>
            <InputField
              name="password"
              id="current-password"
              type={currentPassword.hidden ? 'password' : 'text'}
              placeholder="Current Password"
              value={currentPassword.value}
              onChange={handleCurrentPassword}
              icon
              iconImage={EyeImage}
              iconStyle={{
                opacity: currentPassword.hidden ? 0.3 : 1,
                cursor: 'pointer',
                filter: currentPasswordIconColor,
              }}
              borderStyle={currentPassword.isValid ? '1px solid #7BE495' : ''}
              onIconClick={toggleCurrentPassword}
              errorMessage={errorMessages.currentPassword}
              onKeyUp={checkCurrentPassword}
              onBlur={checkCurrentPassword}
              isEmpty={validator.isEmpty(currentPassword.value)}
            />

            <div>
              <label htmlFor="new-password" className="Profile-label">
                New Password*
              </label>
            </div>
            <InputField
              name="password"
              id="new-password"
              type={password.hidden ? 'password' : 'text'}
              placeholder="New Password"
              value={password.value}
              onChange={handlePassword}
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
              onBlur={checkPassword}
              isEmpty={validator.isEmpty(password.value)}
            />

            <div>
              <label htmlFor="confirm-password" className="Profile-label">
                Confirm Password*
              </label>
            </div>
            <InputField
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword.value}
              icon
              iconImage={confirmPasswordIcon}
              borderStyle={confirmPassword.isValid ? '1px solid #7BE495' : ''}
              onChange={handleConfirmPassword}
              errorMessage={errorMessages.confirmPassword}
              onKeyUp={checkConfirmPassword}
              onBlur={checkConfirmPassword}
              isEmpty={validator.isEmpty(confirmPassword.value)}
            />

            <p className="hint">
              Password should be at least 8 characters and it should contain at
              least one uppercase letter, lowercase letter, one number and one
              special character.
            </p>
            <Button submit text="Update" className="btn-classic" />
          </form>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default Password;
