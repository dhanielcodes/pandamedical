import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from '../Register';

test('renders component successfully', () => {
  const app = render(<Register />, { wrapper: MemoryRouter });
  const { getByText } = app;

  expect(app).toBeDefined();
  getByText('Sign up');
});

test('successfully updates input fields', () => {
  const app = render(<Register />, { wrapper: MemoryRouter });
  const { getByPlaceholderText, getByText } = app;
  const firstNameInput = getByPlaceholderText('First Name');
  const lastNameInput = getByPlaceholderText('Last Name');
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const confirmPasswordInput = getByPlaceholderText('Confirm Password');

  const firstName = 'Panda';
  const lastName = 'Health';
  const email = 'hello@test.react';
  const password = 'Hello123*';
  const confirmPassword = 'Hello123*';

  fireEvent.change(firstNameInput, { target: { value: firstName } });
  expect(firstNameInput).toHaveValue(firstName);

  fireEvent.change(lastNameInput, { target: { value: lastName } });
  expect(lastNameInput).toHaveValue(lastName);

  fireEvent.change(emailInput, { target: { value: email } });
  expect(emailInput).toHaveValue(email);

  fireEvent.change(passwordInput, { target: { value: password } });
  expect(passwordInput).toHaveValue(password);

  fireEvent.change(confirmPasswordInput, {
    target: { value: confirmPassword },
  });
  expect(confirmPasswordInput).toHaveValue(confirmPassword);

  getByPlaceholderText('Date of Birth');
  getByText('Gender');
});
