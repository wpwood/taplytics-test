import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Taplytics from '@taplytics/js-sdk';

Taplytics.init('53303f82931647ddb7c2eb43a3c50cc8');

Taplytics.propertiesLoaded(function (loaded) {
  console.log(`loaded = ${loaded}`)
  Taplytics.runningFeatureFlags((runningFF) => {
    console.log(JSON.stringify(runningFF))
  })

  if (Taplytics.featureFlagEnabled('iafWeb')) {
    console.log('iafWeb is enabled')
  } else {
    console.log('iafWeb is not enabled')
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
