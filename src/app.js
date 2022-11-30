import './css/html5reset.css';
import './css/style.css'
import React from 'react';

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './home';
import Components from './components';
import Showcase from './showcase';
import Header from './header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/hw8-project-react" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/showcase" element={<Showcase />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;