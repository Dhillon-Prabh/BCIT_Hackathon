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
    fetch("/productivity", {
      method: "GET"
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log("RES:");
      console.log(JSON.parse(JSON.stringify(response)));
    }).catch(function(err) {
      console.log(err);
    });
  };



  
render() {
    return (
      <div className="App">

        <header className="App-header">

        <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />

              <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="500"
  />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;