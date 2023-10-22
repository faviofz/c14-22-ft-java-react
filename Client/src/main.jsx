import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import '@/assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
