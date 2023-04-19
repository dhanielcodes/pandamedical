import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

test('renders component successfully', () => {
  const app = render(<Login />, { wrapper: MemoryRouter });
  const { getByText } = app;

  expect(app).toBeDefined();
  getByText('Login');
});

test('successfully updates email input', () => {
  const app = render(<Login />, { wrapper: MemoryRouter });
  const { getByPlaceholderText } = app;
  const emailInput = getByPlaceholderText('Email');
  const emailValue = 'hello@test.react';

  fireEvent.change(emailInput, { target: { value: emailValue } });
  expect(emailInput).toHaveValue(emailValue);
});

test('successfully updates password input', () => {
  const app = render(<Login />, { wrapper: MemoryRouter });
  const { getByPlaceholderText } = app;
  const passwordInput = getByPlaceholderText('Password');
  const passwordValue = 'Hello123*';

  fireEvent.change(passwordInput, { target: { value: passwordValue } });
  expect(passwordInput).toHaveValue(passwordValue);
});
