import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* try this
export { default as Navigation } from "./Navigation";
export { default as Footer } from "./Footer";
export { default as Home } from "./Home";
export { default as About } from "./About";
export { default as Contact } from "./Contact";
*/
// issue is with github pages only seeing homepoage and nothing else

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
