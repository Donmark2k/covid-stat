// import React from 'react';
// import axios from 'axios';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
// import { store } from '../redux/store';
// import { fetchMissions, joinMission } from '../redux/missions/missionSlice';
// import Mission from '../components/mission';

// it('Mission page renders correctly', () => {
//   const tree = renderer
//     .create(
//       <React.StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>
//             <Mission />
//           </BrowserRouter>
//         </Provider>
//       </React.StrictMode>,
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// describe('Mission redux state tests', () => {
//   it('Should initially set Missions store to an empty Array', () => {
//     const state = store.getState().missions;
//     expect(state.missionList).toEqual([]);
//   });

//   it('should Join Mission payload send correct', () => {
//     const expectedPayload = { payload: '9D1B7E5', type: 'missions/joinMission' };
//     const actualPayload = joinMission('9D1B7E5');
//     expect(actualPayload).toEqual(expectedPayload);
//   });

//   it('Mission fetch data from API', async () => {
//     const url = 'https://api.spacexdata.com/v3/missions';
//     const axiosSpy = jest.spyOn(axios, 'get');
//     jest.setTimeout(90000);
//     const dispatchSpy = jest.fn();

//     await fetchMissions(url)(dispatchSpy);

//     expect(axiosSpy).toHaveBeenCalledWith(url);
//   });
// });
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
// import '@testing-library/jest-dom';
import Countries from '../components/country';
import store from '../redux/store';

describe('Test for countryDetails', () => {
  test('should render', () => {
    const country = {
      id: 24,
      death: '1933',
      critical: '0',
      country: 'Angola',
      active: '23',
      cases: '105298',
      recovered: '103342',
      tests: '1499795',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Countries countries={country} key={24} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});