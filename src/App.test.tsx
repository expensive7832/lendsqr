import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';

// Mock the pages for lazy loading
jest.mock('./Pages/Login', () => () => <div>Login Page</div>);
jest.mock('./Pages/Dashboard/Home', () => () => <div>Dashboard Home</div>);
jest.mock('./Pages/Dashboard/Users', () => () => <div>Users Page</div>);
jest.mock('./Pages/Dashboard/UserDetails', () => () => <div>User Details Page</div>);
jest.mock('./Pages/Dashboard/Layout', () => ({ children }: { children: React.ReactNode }) => (
  <div>
    Layout
    {children}
  </div>
));

// Mock the Loader component
jest.mock('./components/Loader/Loader', () => () => <div>Loading...</div>);

describe('App Routing', () => {
  test('renders Login page at the root route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Login Page')).toBeInTheDocument());
  });

  test('renders Dashboard Home page at /dashboard', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Layout')).toBeInTheDocument());
    expect(screen.getByText('Dashboard Home')).toBeInTheDocument();
  });

  test('renders Users page at /dashboard/user', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard/user']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Layout')).toBeInTheDocument());
    expect(screen.getByText('Users Page')).toBeInTheDocument();
  });

  test('renders User Details page at /dashboard/user/:id', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard/user/123']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Layout')).toBeInTheDocument());
    expect(screen.getByText('User Details Page')).toBeInTheDocument();
  });

  test('displays Loader component while loading', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  });
});
