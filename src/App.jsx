// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard } from './Pages/Dashboard.jsx';
import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </Router>
  );
};

export default App;