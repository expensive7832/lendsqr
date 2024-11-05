// Table.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Table from './Table'; // Adjust the import path based on your folder structure
import users from '../fakeDb/users'; // Adjust based on your file structure

// Mocking localStorage
beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(),
      getItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
});

test('renders Table component and displays users', () => {
  render(
    <Router>
      <Table />
    </Router>
  );

  // Check if the table headers are rendered
  expect(screen.getByText(/Organization/i)).toBeInTheDocument();
  expect(screen.getByText(/Username/i)).toBeInTheDocument();
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByText(/Date Joined/i)).toBeInTheDocument();
  expect(screen.getByText(/Status/i)).toBeInTheDocument();

  // Check if users are displayed in the table
  users.forEach(user => {
    expect(screen.getByText(user.username)).toBeInTheDocument();
  });
});

test('filters users based on form input', () => {
  render(
    <Router>
      <Table />
    </Router>
  );

  // Fill out the filter form
  fireEvent.change(screen.getByLabelText(/Organization/i), { target: { value: users[0].organization } });
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: users[0].username } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: users[0].email } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: users[0].phoneNumber } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: users[0].dateJoined.split('T')[0] } });
  fireEvent.change(screen.getByLabelText(/Status/i), { target: { value: users[0].status } });

  // Submit the form
  fireEvent.click(screen.getByText(/Filter/i));

  // Expect to navigate to the correct user
  expect(window.location.pathname).toBe(`/dashboard/user/${users[0].id}`);
});

test('shows alert when no users are found', () => {
  window.alert = jest.fn(); // Mock alert
  render(
    <Router>
      <Table />
    </Router>
  );

  // Submit the filter form with no matching users
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'nonexistentuser' } });
  fireEvent.click(screen.getByText(/Filter/i));

  // Check if alert was called
  expect(window.alert).toHaveBeenCalledWith("no users found");
});

test('opens dropdown menu on click', () => {
  render(
    <Router>
      <Table />
    </Router>
  );

  // Open dropdown for the first user
  fireEvent.click(screen.getAllByRole('cell')[5]); // Assuming the dropdown is the 6th cell

  // Check if dropdown items are visible
  expect(screen.getByText(/View Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Blacklist User/i)).toBeInTheDocument();
  expect(screen.getByText(/Activate User/i)).toBeInTheDocument();
});

test('resets filter form on button click', () => {
  render(
    <Router>
      <Table />
    </Router>
  );

  // Fill out the filter form
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });

  // Reset the filter form
  fireEvent.click(screen.getByText(/Reset/i));

  // Expect the input to be empty
  expect(screen.getByLabelText(/Username/i)).toHaveValue('');
});
