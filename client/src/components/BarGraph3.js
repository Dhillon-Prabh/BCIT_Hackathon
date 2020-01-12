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
            categories: [],
            axisBorder: {
                show: true,
                color: '#78909C',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
              },
            title: {
                text: "Truck Type",
                style: {
                    fontSize:  '16px',
                    color:  '#263238'
                  },
              }
            },
            yaxis: {
                axisBorder: {
                    show: true,
                    color: '#78909C',
                    height: 1,
                    offsetX: 0,
                    offsetY: 0
                  },
                  title: {
                    text: "Empty-Time",
                    style: {
                        fontSize:  '16px',
                        color:  '#263238'
                      },
                  }
            }
            
        },
        series: [
          {
            name: "series-1",
            data: []
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
        y.push(data[i].Emp.toFixed(2));
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
        width="400"
        className="chart1"
      />
    );
  }
}
