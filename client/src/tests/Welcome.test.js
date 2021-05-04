import Welcome from '../components/Welcome'
import { render , fireEvent } from '@testing-library/react';

describe('Welcome', () => {

  let container;
  beforeEach(() => {
     const leaderBoard = [{name: "Martin", _id: 1}]
    container = render(<Welcome leaderBoard={leaderBoard} />);
  });

  it('should have 4 options in select', () => {
    const allOptions = container.getAllByTestId('genre-option');
    expect(allOptions.length).toBe(4);
  });
  
  it('should have players in select', () => {
    const allOptions = container.getAllByTestId('player-select');
    expect(allOptions.length).toBe(1);
  });

//   it('should have player in select', () => {
//     const allOptions = container.getAllByTestId('player-select');
//     expect(allOptions.length).toBe(1);
//   });

});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
