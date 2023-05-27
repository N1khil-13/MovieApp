import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import movies from './reducers'
// import reportWebVitals from './reportWebVitals';

const store = createStore(movies);
console.log('store', store);
// console.log('B_STATE', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })

// console.log('A_STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>
);

