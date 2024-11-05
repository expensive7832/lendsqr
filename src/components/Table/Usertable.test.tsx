import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import UserTable from './UserTable';

// Mock the fake database
jest.mock('../fakeDb/users', () => [
  { id: 1, organization: 'Org1', username: 'user1', email: 'user1@example.com', phoneNumber: '1234567890', dateJoined: '2023-01-01', status: 'Active' },
  { id: 2, organization: 'Org2', username: 'user2', email: 'user2@example.com', phoneNumber: '0987654321', dateJoined: '2023-02-01', status: 'Inactive' },
]);

describe('Table Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserTable />
      </MemoryRouter>
    );
  });

  test('renders the table with user data', () => {
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user1@example.com')).toBeInTheDocument();
  });

 

  

  test('opens dropdown on clicking vertical dots', async () => {
    

     waitFor(() => {
      expect(screen.getByText('View Details')).toBeInTheDocument();
      expect(screen.getByText('Blacklist User')).toBeInTheDocument();
    });
  });

  
});
