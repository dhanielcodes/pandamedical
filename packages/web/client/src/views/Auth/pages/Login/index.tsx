import React, { useContext, useState } from 'react';
import validator from 'validator';
import { Link, RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialBtn from '../../../../shared/components/SocialBtn';
import Google from '../../../../shared/themes/assets/images/google.png';
import EyeImage from '../../../../shared/themes/assets/images/eye.svg';
import InputField from '../../../../shared/components/InputField';
import { setInputIcon, setIconColor } from '../../../../helpers/inputHelper';
import BackBtn from '../../../../shared/components/BackBtn';
import { AuthContext } from '../../../../store/context';
import Loader from '../../../../shared/components/Loader';
import Button from '../../../../shared/components/Button';

const Login = ({ history }: RouteComponentProps) => {
  const { signin, signInWithGoogle, state } = useContext(AuthContext);
  const { loadingAuthState } = state;

  const [email, setEmail] = useState({ value: '', isValid: false });
  const [password, setPassword] = useState({
    value: '',
    hidden: true,
    isValid: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail({ ...email, value: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword({ ...password, value: e.target.value });
  };

  const togglePassword = () => {
    setPassword({ ...password, hidden: !password.hidden });
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
    setErrorMessages({
      ...errorMessages,
      password: '',
    });
    setPassword({ ...password, isValid: true });
    return true;
  };

  const emailIcon = setInputIcon(email, errorMessages.email);
  const passwordIconColor = setIconColor(password, errorMessages.password);

  const validate = () => checkEmail() && checkPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      email: email.value,
      password: password.value,
    };
    if (validate()) {
      await signin(userData, history);
    }
  };

  const googleAuth = async () => {
    await signInWithGoogle(history);
  };

  const faceBookAuth = () => {
    // signInWithFacebook(history)
    toast.info('Facebook authentication is currently offline', {
      className: 'toasty',
    });
  };

  return (
    <div className="Login">
      <BackBtn />
      {loadingAuthState && <Loader />}
      <div className="Login-content">
        <h3>Login</h3>
        <p id="description">
          Enter your login details to
          <br />
          access your account
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={email.value}
            inputStyle="Login-input-field"
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
            inputStyle="Login-input-field"
            onChange={handlePassword}
            icon
            iconImage={EyeImage}
            iconStyle={{
              opacity: password.hidden ? 0.3 : 1,
              filter: passwordIconColor,
              cursor: 'pointer',
            }}
            borderStyle={password.isValid ? '1px solid #7BE495' : ''}
            onIconClick={togglePassword}
            errorMessage={errorMessages.password}
            onKeyUp={checkPassword}
            onBlur={checkPassword}
            isEmpty={validator.isEmpty(password.value)}
          />

          <div className="more-options">
            <Link to="/forgot-password" className="link">
              <h4>Forgot Password?</h4>
            </Link>
            <p className="signup-text">
              Not a Member? <Link to="/auth/register">Sign up</Link>
            </p>
          </div>

          <Button
            submit
            text="Log in"
            className="btn-login"
            disabled={loadingAuthState}
          />
        </form>

        <p className="or">OR</p>

        <div className="social-btns">
          <SocialBtn
            name="Google"
            image
            src={Google}
            imageClassName="google-icon"
            buttonClassName="SocialBtn-google"
            onClick={googleAuth}
          />

          <SocialBtn
            name="Facebook"
            icon
            iconClass="fab fa-facebook"
            buttonClassName="SocialBtn-facebook"
            onClick={faceBookAuth}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
