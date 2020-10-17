import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import GPACal from './components/gpa-cal';
import subjectAdd from './components/subject-add';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={GPACal} />
        <Route path="/add" exact component={subjectAdd} />
      </div>
    </Router>
  );
}

export default App;
