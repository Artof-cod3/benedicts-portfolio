import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction', () => {
  render(<App />);
  expect(screen.getByText(/I investigate how/i)).toBeInTheDocument();
});
