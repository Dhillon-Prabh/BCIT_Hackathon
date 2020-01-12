import React, { Component } from 'react';
import BarGraph1 from './components/BarGraph1';
import BarGraph2 from './components/BarGraph2';
import BarGraph3 from './components/BarGraph3';
import BarGraph4 from './components/BarGraph4';
import BarGraph5 from './components/BarGraph5';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      upload: true,
      analyze: true,
      charts: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick = () => {
  console.log("clickc");
  this.setState({
    upload: false,
    analyze: false,
    charts: true
  });
}
render() {
    return (
      <div className="App">

        <div className="mixed-chart">
          {this.state.upload && (
          <form ref='uploadForm' 
            id='uploadForm'
            action='http://localhost:5000/upload-files' 
            method='post' 
            encType="multipart/form-data">
          <input type="file" name="photos" multiple="multiple" className="fileUpload"/>
          <input type='submit' value='Upload!' className="Button" />
        </form>)}
        
        {this.state.analyze && (
              <input type="button" value="Analyze!" onClick={this.handleClick}/>
            )}
        {this.state.charts && (
        <div>
        
          <div className="round" id="avgHaul">
         
            <p id="avgHaulNum" className="para">8.87 min</p>
            <p className="para">Average Haul Time</p>
            </div>

            <div className="round"  id="avgEmpty">
            <p id="avgEmptyNum">6.44 min</p>
            <p className="para">Average Empty Time</p>
            </div>
            
            <BarGraph1 />
            <BarGraph2 />
            <BarGraph3 />
            <BarGraph4 />
            <BarGraph5 />
            </div>)}
          </div>
          
      </div>
    );
  }
}

export default App;