import validator from 'validator';

const isEmpty = (string: string) => {
  if (validator.isEmpty(string.trim())) return true;
  return false;
};
const isEmail = (email: string) => {
  if (validator.isEmail(email)) return true;
  return false;
};
interface LoginData {
  email: string;
  password: string;
}

interface Error {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dob: string;
  username: string;
  confirmPassword: string;
}

const validateLoginData = (data: LoginData) => {
  const errors: Partial<Error> = {};

  if (isEmpty(data.email)) {
    errors.email = 'Email must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be valid email address';
  }
  if (isEmpty(data.password)) errors.password = 'Password must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

interface SignUpData extends LoginData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
  username: string;
  dob: string;
}
const validateSignUpData = (data: SignUpData) => {
  const errors: Partial<Error> = {};

  if (isEmpty(data.email)) {
    errors.email = 'Email must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be valid email address';
  }

  if (isEmpty(data.firstName)) errors.firstName = 'Firstname must not be empty';
  if (isEmpty(data.lastName)) errors.lastName = 'Lastname must not be empty';
  if (isEmpty(data.phoneNumber)) errors.phoneNumber = 'Phone Number must not be empty';
  if (isEmpty(data.dob)) errors.dob = 'Date of birth must not be empty';
  if (isEmpty(data.username)) errors.username = 'Username must not be empty';
  if (isEmpty(data.password)) errors.password = 'Password must not be empty';
  if (!validator.matches(data.confirmPassword, data.password)) {
    errors.confirmPassword = 'Passwords must be the same';
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

export default {
  validateSignUpData,
  validateLoginData,
  isEmpty,
};
