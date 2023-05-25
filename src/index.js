import React from 'react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Store from './store/store';
import reportWebVitals from './reportWebVitals';

export const store = new Store();
export const Context = createContext({
  store,
});
const rootElement = document.getElementById('root');
rootElement.innerHTML = '';
const root = createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  root.hydrate(
    <Context.Provider value={{ store, }}>
      <App />
    </Context.Provider>
  );
} else {
  root.render(
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  );
}

reportWebVitals();
