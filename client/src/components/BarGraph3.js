import React, { Component } from 'react';
//import Header from './components/Header';
import Chart from "react-apexcharts";

export default class BarGraph3 extends React.Component {
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

  /**
   * this is where we grab all the events to show.
   */
  componentDidMount() {
    var self = this;
    fetch("/empting", {
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
        y.push(data[i].Emp);
        x.push(data[i].Equip);
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
    /**
     * Returns the calendar component which nests a modal for on click functions
     */
    return (
        <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="500"
        className="chart1"
      />
    );
  }
}
