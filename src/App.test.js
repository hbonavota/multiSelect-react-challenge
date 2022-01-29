import { render, screen } from '@testing-library/react';
import MultipleSelects from './Components/MultipleSelects/MultipleSelects.jsx';
import Error from './Components/Error/Error.jsx';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Multi Select/i);
  expect(linkElement).toBeInTheDocument();
});
