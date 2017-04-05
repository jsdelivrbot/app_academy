import React, { Component } from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={ store } />
);

export default Root;
