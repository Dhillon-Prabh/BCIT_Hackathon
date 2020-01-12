import React, { Component } from 'react';
import BarGraph1 from './components/BarGraph1';
import BarGraph2 from './components/BarGraph2';
import BarGraph3 from './components/BarGraph3';
import BarGraph4 from './components/BarGraph4';

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
        <div className="h-100 bg-info mb-4 p-2">
          <h3 className="text-light font-weight-bold">Truck Analysis</h3>
        </div>

        <div className="mixed-chart mx-auto">
                {this.state.upload && (
          <div className="row card border-info shadow-sm w-75 mx-auto p-5">
            <div className="card-body text-info">
                  <form ref='uploadForm' 
                    id='uploadForm' 
                    action='http://localhost:5000/upload-files' 
                    method='post' 
                    encType="multipart/form-data"
                    className="">
                    <div className="row">
                        <input type="file" name="photos" multiple="multiple" className=" fileUpload col-sm-8 btn btn-outline-info border rounded text-white"/>
                        <input type='submit' value='Upload!' className=" col-sm-3 ml-auto btn btn-outline-success " />
                    </div>
                </form>
            </div>  
          </div>)}
          
        
        {this.state.analyze && (
              <input type="button" className="mt-5 btn btn-warning shadow-sm border rounded-pill w-50 p-3 font-weight-bold" value="Analyze!" onClick={this.handleClick}/>
            )}
        {this.state.charts && (
        <div>
            <BarGraph1 />
            <BarGraph2 />
            <BarGraph3 />
            <BarGraph4 />
            </div>)}
          </div>
          
      </div>
    );
  }
}

export default App;