import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App counter warm-up', () => {
  it('renders initial count and increments on click', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Clicks: 0');
    await userEvent.click(button);
    expect(button).toHaveTextContent('Clicks: 1');
  });
});
