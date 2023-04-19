import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pin from '../Pin';

test('renders component successfully', () => {
  const app = render(<Pin />, { wrapper: MemoryRouter });

  expect(app).toBeDefined();
});
