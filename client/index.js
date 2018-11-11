import React from 'react';
import ReactDOM from 'react-dom';
import Main from './screens/Main';
import { Provider } from 'react-redux';
import store from './redux/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <div className="first">
      <Main />
    </div>
  </Provider>,
  document.getElementById('root')
);
