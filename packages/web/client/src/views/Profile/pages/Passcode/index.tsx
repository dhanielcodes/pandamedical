/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import validator from 'validator';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import InputField from '../../../../shared/components/InputField';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import PadlockIcon from '../../../../shared/themes/assets/images/profile-padlock.svg';
import EyeImage from '../../../../shared/themes/assets/images/profile-eye.svg';
import { setIconColor, setInputIcon } from '../../../../helpers/inputHelper';
import Button from '../../../../shared/components/Button';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Passcode = ({ history }: RouteComponentProps<RouteParams>) => {
  const [currentPasscode, setCurrentPasscode] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });

  const [passcode, setPasscode] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });

  const [confirmPasscode, setConfirmPasscode] = useState({
    value: '',
    isValid: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    currentPasscode: '',
    passcode: '',
    confirmPasscode: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleCurrentPasscode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPasscode({ ...currentPasscode, value: e.target.value });
  };

  const handlePasscode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode({ ...passcode, value: e.target.value });
  };

  const handleConfirmPasscode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPasscode({ ...confirmPasscode, value: e.target.value });
  };

  const toggleCurrentPasscode = () => {
    setCurrentPasscode({ ...currentPasscode, hidden: !currentPasscode.hidden });
  };

  const togglePasscode = () => {
    setPasscode({ ...passcode, hidden: !passcode.hidden });
  };

  const checkCurrentPasscode = () => {
    if (validator.isEmpty(currentPasscode.value)) {
      setErrorMessages({
        ...errorMessages,
        currentPasscode: 'This field is required.',
      });
      setCurrentPasscode({ ...currentPasscode, isValid: false });
      return false;
    }
    if (!validator.isLength(currentPasscode.value, { min: 4, max: 4 })) {
      setErrorMessages({
        ...errorMessages,
        currentPasscode: 'Passcode must be 4 numbers',
      });
      setCurrentPasscode({ ...currentPasscode, isValid: false });
      return false;
    }
    if (!validator.isNumeric(currentPasscode.value)) {
      setErrorMessages({
        ...errorMessages,
        currentPasscode: 'Passcode can only contain numbers',
      });
      setCurrentPasscode({ ...currentPasscode, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      currentPasscode: '',
    });
    setCurrentPasscode({ ...currentPasscode, isValid: true });
    return true;
  };

  const checkPasscode = () => {
    if (validator.isEmpty(passcode.value)) {
      setErrorMessages({
        ...errorMessages,
        passcode: 'Passcode is required.',
      });
      setPasscode({ ...passcode, isValid: false });
      return false;
    }
    if (!validator.isLength(passcode.value, { min: 4, max: 4 })) {
      setErrorMessages({
        ...errorMessages,
        passcode: 'Passcode must be 4 numbers',
      });
      setPasscode({ ...passcode, isValid: false });
      return false;
    }
    if (!validator.isNumeric(passcode.value)) {
      setErrorMessages({
        ...errorMessages,
        passcode: 'Passcode can only contain numbers',
      });
      setPasscode({ ...passcode, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      passcode: '',
    });
    setPasscode({ ...passcode, isValid: true });
    return true;
  };

  const checkConfirmPasscode = () => {
    if (validator.isEmpty(confirmPasscode.value)) {
      setErrorMessages({
        ...errorMessages,
        confirmPasscode: 'Please confirm your password.',
      });
      setConfirmPasscode({ ...confirmPasscode, isValid: false });
      return false;
    }
    if (!validator.isNumeric(confirmPasscode.value)) {
      setErrorMessages({
        ...errorMessages,
        confirmPasscode: 'Passcode can only contain numbers',
      });
      setConfirmPasscode({ ...confirmPasscode, isValid: false });
      return false;
    }
    if (confirmPasscode.value !== passcode.value) {
      setErrorMessages({
        ...errorMessages,
        confirmPasscode: 'Value must match the above passcode',
      });
      setConfirmPasscode({ ...confirmPasscode, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      confirmPasscode: '',
    });
    setConfirmPasscode({ ...confirmPasscode, isValid: true });
    return true;
  };

  const currentPasscodeIconColor = setIconColor(
    currentPasscode,
    errorMessages.currentPasscode,
  );
  const passcodeIconColor = setIconColor(passcode, errorMessages.passcode);

  const confirmPasscodeIcon = setInputIcon(
    confirmPasscode,
    errorMessages.confirmPasscode,
  );

  return (
    <div className="Profile">
      <div className="Profile-header">
        <span className="Profile-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <p>Change Passcode</p>
        </span>

        <div className="Profile-img">
          <img src={PadlockIcon} alt="passcode" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form">
            <div>
              <label htmlFor="current-passcode" className="Profile-label">
                Current Passcode*
              </label>
            </div>
            <InputField
              maxLength={4}
              pattern="[0-9]{4}"
              name="password"
              id="current-passcode"
              type={currentPasscode.hidden ? 'password' : 'text'}
              placeholder="Current Passcode"
              value={currentPasscode.value}
              onChange={handleCurrentPasscode}
              icon
              iconImage={EyeImage}
              iconStyle={{
                opacity: currentPasscode.hidden ? 0.3 : 1,
                cursor: 'pointer',
                filter: currentPasscodeIconColor,
              }}
              borderStyle={currentPasscode.isValid ? '1px solid #7BE495' : ''}
              onIconClick={toggleCurrentPasscode}
              errorMessage={errorMessages.currentPasscode}
              onKeyUp={checkCurrentPasscode}
              onBlur={checkCurrentPasscode}
              isEmpty={validator.isEmpty(currentPasscode.value)}
            />

            <div>
              <label htmlFor="new-passcode" className="Profile-label">
                New Passcode*
              </label>
            </div>
            <InputField
              maxLength={4}
              pattern="[0-9]{4}"
              name="password"
              id="new-passcode"
              type={passcode.hidden ? 'password' : 'text'}
              placeholder="New Passcode"
              value={passcode.value}
              onChange={handlePasscode}
              icon
              iconImage={EyeImage}
              iconStyle={{
                opacity: passcode.hidden ? 0.3 : 1,
                cursor: 'pointer',
                filter: passcodeIconColor,
              }}
              borderStyle={passcode.isValid ? '1px solid #7BE495' : ''}
              onIconClick={togglePasscode}
              errorMessage={errorMessages.passcode}
              onKeyUp={checkPasscode}
              onBlur={checkPasscode}
              isEmpty={validator.isEmpty(passcode.value)}
            />

            <div>
              <label htmlFor="confirm-passcode" className="Profile-label">
                Confirm Passcode*
              </label>
            </div>
            <InputField
              id="confirm-passcode"
              type="password"
              placeholder="Confirm Passcode"
              value={confirmPasscode.value}
              icon
              iconImage={confirmPasscodeIcon}
              borderStyle={confirmPasscode.isValid ? '1px solid #7BE495' : ''}
              onChange={handleConfirmPasscode}
              errorMessage={errorMessages.confirmPasscode}
              onKeyUp={checkConfirmPasscode}
              onBlur={checkConfirmPasscode}
              isEmpty={validator.isEmpty(confirmPasscode.value)}
            />

            <p className="hint">Select a 4-digit passcode.</p>
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

export default Passcode;
