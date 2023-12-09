/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { Button } from '../ui/button';

it('App Router: Works with Client Components (React State)', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});
