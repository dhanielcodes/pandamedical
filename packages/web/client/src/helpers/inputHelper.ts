import validator from 'validator';
import success from '../shared/themes/assets/images/success.svg';
import warning from '../shared/themes/assets/images/attention.svg';
import error from '../shared/themes/assets/images/error.svg';

export const namePattern = /^[a-zA-Z ,.'-]+$/i;

export const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const commentPattern = /^[a-zA-Z0-9()&/?":;\n ,.'-]+$/i;

export const setInputIcon = (
  inputValue: { value: string; isValid: boolean },
  errorMessage: string,
) => {
  if (inputValue.isValid) return success;
  if (validator.isEmpty(inputValue.value.trim()) && errorMessage) {
    return error;
  }
  if (errorMessage) return warning;
  return '';
};

export const setIconColor = (
  inputValue: { value: string; isValid: boolean },
  errorMessage: string,
) => {
  if (validator.isEmpty(inputValue.value.trim()) && errorMessage) {
    return 'brightness(0) saturate(100%) invert(41%) sepia(71%) saturate(4260%) hue-rotate(356deg) brightness(100%) contrast(94%)';
  }
  if (errorMessage)
    return 'brightness(0) saturate(100%) invert(85%) sepia(77%) saturate(686%) hue-rotate(313deg) brightness(105%) contrast(104%)';
  return '';
};
