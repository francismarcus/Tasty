import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import config from 'Fire';

const store = createStore(reducers,
  compose(
   applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
   reduxFirestore(config),
   reactReduxFirebase(config)
  )
);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  