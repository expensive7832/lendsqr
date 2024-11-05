import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  const setsidebaropenMock = jest.fn();

  const renderComponent = (sidebaropen: boolean) => {
    render(<Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropenMock} />);
  };

  test('renders sidebar with appropriate classes when open', () => {
    renderComponent(true);
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('sidebar open');
  });

  test('renders sidebar with appropriate classes when closed', () => {
    renderComponent(false);
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('sidebar');
    expect(sidebar).not.toHaveClass('open');
  });

  test('renders all categories: Customers, Businesses, and Settings', () => {
    renderComponent(true);

    expect(screen.getByText('CUSTOMERS')).toBeInTheDocument();
    expect(screen.getByText('BUSINESSES')).toBeInTheDocument();
    expect(screen.getByText('SETTINGS')).toBeInTheDocument();
  });

  test('renders correct customer links', () => {
    renderComponent(true);
    const customerLabels = ['User', 'Guarantors', 'Loans', 'Decision Model', 'Savings', 'Loan Request', 'Whitelist', 'karma'];

    customerLabels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('renders correct business links', () => {
    renderComponent(true);
    const businessLabels = ['Organization', 'Loan Products', 'Saving Product', 'Fees and charges', 'Transaction', 'Charges', 'Service Account', 'Settlements', 'Reports'];

    businessLabels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('renders correct settings links', () => {
    renderComponent(true);
    const settingsLabels = ['Preferences', 'Fee and Pricing', 'Audit Logs'];

    settingsLabels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('renders "Switch Organization" with briefcase icon', () => {
    renderComponent(true);
    const switchOrgText = screen.getByText(/Switch Organization/i);
    const briefcaseIcon = screen.getByAltText(/briefcase/i);

    expect(switchOrgText).toBeInTheDocument();
    expect(briefcaseIcon).toBeInTheDocument();
    expect(briefcaseIcon).toHaveAttribute('src', '/briefcase 1.png');
  });

  test('renders "Dashboard" with home icon', () => {
    renderComponent(true);
    const dashboardText = screen.getByText(/Dashboard/i);
    const homeIcon = screen.getByAltText(/home/i);

    expect(dashboardText).toBeInTheDocument();
    expect(homeIcon).toBeInTheDocument();
    expect(homeIcon).toHaveAttribute('src', '/home 1.png');
  });
});

