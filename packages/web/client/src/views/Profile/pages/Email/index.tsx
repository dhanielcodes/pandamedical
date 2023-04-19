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
import EmailIcon from '../../../../shared/themes/assets/images/profile-email.svg';
import EyeImage from '../../../../shared/themes/assets/images/profile-eye.svg';
import { setInputIcon, setIconColor } from '../../../../helpers/inputHelper';
import Button from '../../../../shared/components/Button';
// import { AuthContext } from '../../../../store/context';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Email = ({ history }: RouteComponentProps<RouteParams>) => {
  // const { state } = useContext(AuthContext);
  // const { user } = state;

  const [password, setPassword] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });

  const [email, setEmail] = useState({ value: '', isValid: false });
  const [newEmail, setNewEmail] = useState({ value: '', isValid: false });

  const [errorMessages, setErrorMessages] = useState({
    password: '',
    email: '',
    newEmail: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, value: e.target.value });
  };

  const togglePassword = () => {
    setPassword({ ...password, hidden: !password.hidden });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, value: e.target.value });
  };

  const handleNewEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail({ ...newEmail, value: e.target.value });
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
    setErrorMessages({
      ...errorMessages,
      password: '',
    });
    setPassword({ ...password, isValid: true });
    return true;
  };

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

  const checkNewEmail = () => {
    setNewEmail({ ...newEmail, isValid: validator.isEmail(newEmail.value) });
    if (validator.isEmpty(newEmail.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        newEmail: 'Please input an email address.',
      });
      return false;
    }
    if (!validator.isEmail(newEmail.value)) {
      setErrorMessages({
        ...errorMessages,
        newEmail: "Please check, that's not a correct email address format.",
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      newEmail: '',
    });
    return true;
  };

  const passwordIconColor = setIconColor(password, errorMessages.password);
  const emailIcon = setInputIcon(email, errorMessages.email);
  const newEmailIcon = setInputIcon(newEmail, errorMessages.newEmail);

  return (
    <div className="Profile">
      <div className="Profile-header">
        <span className="Profile-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <p>Change Email Address</p>
        </span>

        <div className="Profile-img">
          <img src={EmailIcon} alt="email" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form">
            <div>
              <label htmlFor="password" className="Profile-label">
                Password*
              </label>
            </div>

            <InputField
              name="password"
              id="new-password"
              type={password.hidden ? 'password' : 'text'}
              placeholder="Password"
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
              <label htmlFor="email" className="Profile-label">
                Current Email*
              </label>
            </div>
            <InputField
              id="email"
              type="email"
              placeholder="Current Email"
              value={email.value}
              onChange={handleEmail}
              icon
              iconImage={emailIcon}
              borderStyle={email.isValid ? '1px solid #7BE495' : ''}
              errorMessage={errorMessages.email}
              onKeyUp={checkEmail}
              onBlur={checkEmail}
              isEmpty={validator.isEmpty(email.value.trim())}
            />

            <div>
              <label htmlFor="new-email" className="Profile-label">
                New Email*
              </label>
            </div>

            <InputField
              id="new-email"
              type="email"
              placeholder="New Email"
              value={newEmail.value}
              onChange={handleNewEmail}
              icon
              iconImage={newEmailIcon}
              borderStyle={newEmail.isValid ? '1px solid #7BE495' : ''}
              errorMessage={errorMessages.newEmail}
              onKeyUp={checkNewEmail}
              onBlur={checkNewEmail}
              isEmpty={validator.isEmpty(newEmail.value.trim())}
            />

            <p className="hint">
              Use a Valid Email Address e.g. Me@sample.com. We will send a mail
              to this address.
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

export default Email;
