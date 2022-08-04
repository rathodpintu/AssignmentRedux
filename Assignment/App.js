/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import rootReducer from './src/reducers';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(rootReducer); // adding reduer inside store
import AppDrawer from '../Assignment/src/navigation/AppDrawer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppDrawer />
      </Provider>
    );
  }
}
