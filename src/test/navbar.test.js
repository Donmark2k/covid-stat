import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import NavBar from '../components/navbar';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';



it('Navbar page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('App renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});