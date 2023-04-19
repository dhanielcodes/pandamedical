import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackBtn from '../BackBtn';

test('renders component successfully', () => {
  const app = render(<BackBtn />, { wrapper: MemoryRouter });

  expect(app).toBeDefined();
});
