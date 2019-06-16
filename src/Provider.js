import React from 'react';
import reducers from 'reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import config from 'Fire';


export const store = createStore(reducers,
        compose(
         applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
         reduxFirestore(config),
         reactReduxFirebase(config)
        )
      );
export default ({ children }) => {


    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
