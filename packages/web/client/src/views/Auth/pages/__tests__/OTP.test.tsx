import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OTP from '../OTP';

test('renders component successfully', () => {
  const app = render(<OTP />, { wrapper: MemoryRouter });

  expect(app).toBeDefined();
});
