import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';

afterEach(rtl.cleanup);

describe('App', () => {
  const fakeDom = rtl.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it('renders without crashing', () => {
    // console.log(fakeDom.debug());
  });
});

// describe('NavBar', () => {
//   const element = rtl.render(
//     <BrowserRouter>
//       <NavBar />
//     </BrowserRouter>
//   );
//   console.log(element.debug());
// });
