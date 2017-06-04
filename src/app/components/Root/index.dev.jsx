import React from 'react';
import classNames from 'classnames/bind';
import { Provider } from 'react-redux';
import DevTools from 'app/components/DevTools';
import styles from './styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <div
      className={classNames.bind(styles)({
        'root': true,
      })}
    >
      <DevTools />
    </div>
  </Provider>
);

export default Root;
