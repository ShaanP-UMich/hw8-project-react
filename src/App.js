import logo from './logo.svg';
import './css/style.css'
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  render() {


    return (
      <div>
        <p>A single p tag in a div</p>
        <p className='title'>Another p tag!</p>
      </div>
    );
  }
}

export default App;
