import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './Login';

test('renders learn react link', () => {
  render(<Login />);
  const loginLabel = screen.getByTestId('login-label');
  expect(loginLabel).toBeInTheDocument();
});
