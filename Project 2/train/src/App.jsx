// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage.jsx';
import SingleTrainPage from './pages/SingleTrainPage.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AllTrainsPage} />
        <Route path="/train/:trainNumber" component={SingleTrainPage} />
      </div>
    </Router>
  );
};

export default App;
