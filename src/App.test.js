import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  expect(screen.queryByText(/Signed in as/)).toBeNull();
  screen.debug();
  expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  screen.debug();
});
