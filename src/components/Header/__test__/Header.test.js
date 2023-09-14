import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';

jest.mock('../HeaderLeftPiece', () => {
  return {
    HeaderLeftPiece: () => <div>Mocked HeaderLeftPiece</div>
  };
});

jest.mock('../HeaderRightPiece', () => {
  return {
    HeaderRightPiece: () => <div>Mocked HeaderRightPiece</div>
  };
});

it('should use header tag', () => {
  render(
    <HashRouter>
      <Header />
    </HashRouter>
  );

  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});