import React, { Component } from 'react';
import './App.css';
import SegmentedControl from './SegmentedControl'

class App extends Component {
  render() {
    return (
      <SegmentedControl
        values={["Audiences", "Partners", "Brands"]} />
    );
  }
}

export default App;
