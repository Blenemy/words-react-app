import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import { HeaderLink } from '../HeaderLink';

it('should contain a link', () => {
  render(
    <HashRouter>
      <HeaderLink route='' title='' />
    </HashRouter>
  );

  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
});

it('should render a title', () => {
  render(
    <HashRouter>
      <HeaderLink route='' title='text' />
    </HashRouter>
  );

  const linkElement = screen.getByText('text');
  expect(linkElement).toBeInTheDocument();
});

it('should render a link with a proper route', () => {
  render(
    <HashRouter>
      <HeaderLink route='route' title='' />
    </HashRouter>
  );

  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveAttribute('href', '#/route');
});

