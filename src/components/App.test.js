import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Provider from 'Provider';
import Container from 'components/Container/Container';
import { BrowserRouter } from 'react-router-dom';

it('Passes globalStyles', () => {
   const wrapper = shallow(<App />);
   expect(FindByTestAttr(wrapper, 'GlobalStyles').length).toEqual(1);
});

it('renders Container component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Container).length).toEqual(1);
});

it('has BrowserRouter <>', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(BrowserRouter).length).toEqual(1);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
