import React, { useState, useContext } from 'react';
import validator from 'validator';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import { Link, RouteComponentProps } from 'react-router-dom';
import Google from '../../../../shared/themes/assets/images/google.png';
import InputField from '../../../../shared/components/InputField';
import SocialBtn from '../../../../shared/components/SocialBtn';
import {
  namePattern,
  passwordPattern,
  setInputIcon,
  setIconColor,
} from '../../../../helpers/inputHelper';
import BackBtn from '../../../../shared/components/BackBtn';
import { AuthContext } from '../../../../store/context';
import EyeImage from '../../../../shared/themes/assets/images/eye.svg';
import CalendarImage from '../../../../shared/themes/assets/images/calendar.svg';
import SelectCaret from '../../../../shared/themes/assets/images/select-caret.svg';
import { calculateAge } from '../../../../helpers/helperFunctions';
import Loader from '../../../../shared/components/Loader';

const Register = ({ history }: RouteComponentProps) => {
  const { signup, signInWithGoogle, state } = useContext(AuthContext);
  const { loadingAuthState } = state;

  const [firstName, setFirstName] = useState({ value: '', isValid: false });
  const [lastName, setLastName] = useState({ value: '', isValid: false });
  const [email, setEmail] = useState({ value: '', isValid: false });
  const [password, setPassword] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    isValid: false,
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('default');
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
    gender: '',
  });

  let dateValue: Date | undefined;
  const [dateOfBirth, setDateOfBirth] = useState(dateValue);

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName({ ...firstName, value: e.target.value });
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName({ ...lastName, value: e.target.value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, value: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, value: e.target.value });
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword({ ...confirmPassword, value: e.target.value });
  };

  const togglePassword = () => {
    setPassword({ ...password, hidden: !password.hidden });
  };

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const handleDate = (date: Date) => setDateOfBirth(date);

  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const firstNameIcon = setInputIcon(firstName, errorMessages.firstName);
  const lastNameIcon = setInputIcon(lastName, errorMessages.lastName);
  const emailIcon = setInputIcon(email, errorMessages.email);
  const confirmPasswordIcon = setInputIcon(
    confirmPassword,
    errorMessages.confirmPassword,
  );

  const passwordIconColor = setIconColor(password, errorMessages.password);

  // Input Validation

  const checkFirstName = () => {
    if (validator.isEmpty(firstName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        firstName: 'First Name is required.',
      });
      setFirstName({ ...firstName, isValid: false });
      return false;
    }
    if (!namePattern.test(firstName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        firstName:
          'First Name should not have numbers, special characters or symbols.',
      });
      setFirstName({ ...firstName, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      firstName: '',
    });
    setFirstName({ ...firstName, isValid: true });
    return true;
  };

  const checkLastName = () => {
    if (validator.isEmpty(lastName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        lastName: 'Last Name is required.',
      });
      setLastName({ ...lastName, isValid: false });
      return false;
    }
    if (!namePattern.test(lastName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        lastName:
          'Last Name should not have numbers, special characters or symbols.',
      });
      setLastName({ ...lastName, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      lastName: '',
    });
    setLastName({ ...lastName, isValid: true });
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

  const checkDateOfBirth = () => {
    if (!dateOfBirth) {
      setErrorMessages({
        ...errorMessages,
        dateOfBirth: 'Please select date of birth',
      });
      return false;
    }
    if (calculateAge(dateOfBirth) < 18) {
      setErrorMessages({
        ...errorMessages,
        dateOfBirth: 'User must be up to 18 years of age',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      dateOfBirth: '',
    });
    return true;
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

  const checkGender = () => {
    if (!validator.isIn(gender, ['MALE', 'FEMALE', 'OTHER'])) {
      setErrorMessages({
        ...errorMessages,
        gender: 'Please select a gender',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      gender: '',
    });
    return true;
  };

  // Validate entire form
  // eslint-disable-next-line arrow-body-style
  const validate = () => {
    return (
      checkFirstName() &&
      checkLastName() &&
      checkEmail() &&
      checkPassword() &&
      checkConfirmPassword() &&
      checkDateOfBirth() &&
      checkPhoneNumber() &&
      checkGender()
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      dateOfBirth,
      phone: phoneNumber,
      gender,
    };
    if (validate()) {
      signup(userData, history);
    }
  };

  const googleAuth = () => signInWithGoogle(history);
  const faceBookAuth = () => {
    // signInWithFacebook(history)
    toast.info('Facebook authentication is currently offline', {
      className: 'toasty',
    });
  };

  return (
    <div className="Register">
      <BackBtn />
      {loadingAuthState && <Loader />}
      <h3>Sign up</h3>

      <SocialBtn
        name="Facebook"
        icon
        iconClass="fab fa-facebook"
        buttonClassName="SocialBtn-facebook"
        onClick={faceBookAuth}
      />

      <SocialBtn
        name="Google"
        image
        src={Google}
        imageClassName="google-icon"
        buttonClassName="SocialBtn-google"
        onClick={googleAuth}
      />

      <p className="login-info">
        Already a member? <Link to="/auth/login">Log In</Link>
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="First Name"
          value={firstName.value}
          icon
          iconImage={firstNameIcon}
          borderStyle={firstName.isValid ? '1px solid #7BE495' : ''}
          onChange={handleFirstName}
          errorMessage={errorMessages.firstName}
          onKeyUp={checkFirstName}
          onBlur={checkFirstName}
          isEmpty={validator.isEmpty(firstName.value.trim())}
        />

        <InputField
          type="text"
          placeholder="Last Name"
          value={lastName.value}
          icon
          iconImage={lastNameIcon}
          borderStyle={lastName.isValid ? '1px solid #7BE495' : ''}
          onChange={handleLastName}
          errorMessage={errorMessages.lastName}
          onKeyUp={checkLastName}
          onBlur={checkLastName}
          isEmpty={validator.isEmpty(lastName.value.trim())}
        />

        <InputField
          type="email"
          placeholder="Email"
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

        <InputField
          name="password"
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

        <InputField
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

        <div className="InputField date-field border-input">
          <DatePicker
            placeholderText="Date of Birth"
            selected={dateOfBirth}
            onChange={handleDate}
            onSelect={() =>
              // eslint-disable-next-line implicit-arrow-linebreak
              setErrorMessages({ ...errorMessages, dateOfBirth: '' })
            }
            onBlur={checkDateOfBirth}
            showYearDropdown
            showMonthDropdown
            dateFormat="dd/LL/yyyy"
          />
          <img
            src={CalendarImage}
            alt="calendar"
            className="InputField-icon InputField-cal-icon"
          />
          <div className="error-msg">{errorMessages.dateOfBirth}</div>
        </div>

        <div className="Register-phone-input-field">
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="NG"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            onKeyUp={checkPhoneNumber}
            onBlur={checkPhoneNumber}
            international
          />
        </div>
        <div className="error-msg">{errorMessages.phoneNumber}</div>

        <p className="hint">
          A valid cell number is required for managing appointments
        </p>

        <div className="Register-select">
          <select
            name="gender"
            value={gender}
            onChange={handleGender}
            onBlur={checkGender}
          >
            <option value="default" disabled>
              Gender
            </option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>

          <img
            src={SelectCaret}
            alt="select"
            className="Profile-select-caret"
          />
        </div>
        <div className="error-msg">{errorMessages.gender}</div>

        <p id="disclaimer">
          By clicking Join Now or Sign Up with Google, or Facebook you Agree to
          Panda Health{' '}
          <span>
            <a href="terms of use">Terms of Use</a>{' '}
          </span>
          and{' '}
          <span>
            <a href="privacy policy">Privacy Policy</a>{' '}
          </span>
          and{' '}
          <span>
            <a href="hipaa">HIPAA</a>{' '}
          </span>
          Authorization Statement.
        </p>

        <input
          type="submit"
          value="Join Now"
          className="btn-primary btn-join"
        />
      </form>
    </div>
  );
};

export default Register;
