// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import setupStore from './store';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
);