import React from 'react';
import { render } from '@testing-library/react';
import InputField from '../InputField';

const props = {
  type: 'text',
  placeholder: 'test',
  value: 'inputValue',
  onChange: () => {},
};

const { placeholder, value } = props;

test('renders component successfully', () => {
  const app = render(<InputField {...props} />);
  const { getByPlaceholderText } = app;
  const inputField = getByPlaceholderText(placeholder);

  expect(app).toBeDefined();
  expect(inputField).toHaveValue(value);
});
