// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   return <h1>Hello World!</h1>;
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// Entry point for the build script in your package.json
// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './react/redux/store';
import App from './react/components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
