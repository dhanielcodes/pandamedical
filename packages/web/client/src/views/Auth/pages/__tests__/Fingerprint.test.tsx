import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Fingerprint from '../Fingerprint';

test('renders component successfully', () => {
  const app = render(<Fingerprint />, { wrapper: MemoryRouter });

  expect(app).toBeDefined();
});
