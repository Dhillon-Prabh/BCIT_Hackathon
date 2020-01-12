import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import logo from './logo.svg';
//import Header from './components/Header';
import Chart from "react-apexcharts";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        yaxis: {
          min: 30
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    var self = this;
    fetch("/productivity", {
      method: "GET"
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log("RES:");
      var data = JSON.parse(JSON.stringify(response));
      console.log(data);
      var x = [];
      var y = [];
      for (var i = 0; i < data.length; i++) {
        x.push(data[i].SHIFT_DATE);
        y.push(data[i].PRODUCTIVITY);
      }
      console.log(x);
      self.setState(prevState => ({
        options: {
          ...prevState.options,           // copy all other key-value pairs of food object
          xaxis: {                     // specific object of food object
            ...prevState.options.xaxis,   // copy all pizza key-value pairs
            categories: x         // update value of specific key
          }
        },
        series: [{
          ...prevState.series,
          data: y
        }]
      }))
    }).catch(function(err) {
      console.log(err);
    });
  };



  
render() {
    return (
      <div className="App">

        <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
              className="chart1"
            />
          </div>
          
      </div>
    );
  }
}

export default App;