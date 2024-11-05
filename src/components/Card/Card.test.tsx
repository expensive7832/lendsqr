import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Card} from './Card';

describe('Card Component', () => {
  const title = 'Test Title';
  const count = 1234;
  const icon = '/test-icon.png';

  beforeEach(() => {
    render(<Card title={title} count={count} icon={icon} />);
  });

  test('renders the card title', () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('renders the formatted count', () => {
    expect(screen.getByText(count.toLocaleString())).toBeInTheDocument();
  });

  test('renders the correct icon with alt text', () => {
    const iconElement = screen.getByAltText(`${title} icon`);
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', icon);
  });
});
