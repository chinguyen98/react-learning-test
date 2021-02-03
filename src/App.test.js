import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test App', () => {
  test('renders learn react link', async () => {
    render(<App />);
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
  });

  test('User enter JS', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    screen.debug();
    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'JavaScript' }
    // });

    userEvent.type(screen.getByRole('textbox'), 'JavaScript')

    expect(await screen.findByText(/Searches for JavaScript/)).toBeInTheDocument();
    
    screen.debug();
  })
})
