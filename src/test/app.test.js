// import React from 'react';
// import renderer from 'react-test-renderer';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';
// import App from '../App';
// import NavBar from '../components/navbar';

// it('App renders correctly', () => {
//   const tree = renderer
//     .create(
//       <React.StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </Provider>
//       </React.StrictMode>,
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('NavBar page renders correctly', () => {
//   const tree = renderer
//     .create(
//       <React.StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>
//             <NavBar />
//           </BrowserRouter>
//         </Provider>
//       </React.StrictMode>,
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
