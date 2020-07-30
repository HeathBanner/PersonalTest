import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import App from './App';
import Home from './pages/Home';
import Links from './components/Home/Links';

Enzyme.configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Home />);
  });

  test('Child count', () => {
    expect(wrapper.find(Links)).toHaveLength(4);
  });
});