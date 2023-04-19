import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../Landing';

test('renders component successfully', () => {
  const app = render(<Landing />, { wrapper: MemoryRouter });
  const { getByText } = app;

  expect(app).toBeDefined();
  getByText('Get Started');
});
