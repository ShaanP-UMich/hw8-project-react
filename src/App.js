import './css/style.css'
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import Components from './Components';
import Showcase from './Showcase';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hw8-project-react" element={<Home />} />
          <Route exact path="/components" element={<Components />} />
          <Route exact path="/showcase" element={<Showcase />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
