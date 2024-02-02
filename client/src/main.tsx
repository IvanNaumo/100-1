import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import App from './App/App';
=======
import App from './App';
>>>>>>> 19c193e72d41074438d872cb3a71bdee85957ba0
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
<<<<<<< HEAD
    ,
  </Provider>,
=======
  </Provider>,

>>>>>>> 19c193e72d41074438d872cb3a71bdee85957ba0
  // </React.StrictMode>,
);
