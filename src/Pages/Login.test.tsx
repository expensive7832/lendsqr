import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

describe('Login Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test('renders logo image and design image', () => {
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/design/i)).toBeInTheDocument();
  });

  test('renders welcome message and text', () => {
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
    expect(screen.getByText(/enter details to login/i)).toBeInTheDocument();
  });

  test('renders email and password inputs', () => {
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test('renders "Forgot password?" link', () => {
    expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
  });

  test('renders the login button', () => {
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeInTheDocument();
  });

  test('toggles password visibility when clicking "Show"/"Hide"', () => {
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByText(/show/i);

    // Default should be password hidden
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click to show password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
    expect(toggleButton).toHaveTextContent(/hide/i);

    // Click to hide password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(toggleButton).toHaveTextContent(/show/i);
  });

  test('email and password inputs accept input values', () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });
});
