import Rails from '@rails/ujs';
import * as ActiveStorage from '@rails/activestorage';
import 'channels';
Rails.start();
ActiveStorage.start();

var componentRequireContext = require.context('components', true);
var ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);

import App from '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
});
