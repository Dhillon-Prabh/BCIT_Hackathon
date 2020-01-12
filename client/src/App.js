import React, { Component } from 'react';
import BarGraph1 from './components/BarGraph1';
import BarGraph2 from './components/BarGraph2';
import BarGraph3 from './components/BarGraph3';
import BarGraph4 from './components/BarGraph4';

import './App.css';

class App extends Component {  
render() {
    return (
      <div className="App">

        <div className="mixed-chart">
            <BarGraph1 />
            <BarGraph2 />
            <BarGraph3 />
            <BarGraph4 />
          </div>
          
      </div>
    );
  }
}

export default App;