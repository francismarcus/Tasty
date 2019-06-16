import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'index.css';
import Provider from 'Provider';


ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  