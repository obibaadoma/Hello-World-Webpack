// app/javascript/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Greeting} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
