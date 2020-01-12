import React, { Component } from 'react';
//import Header from './components/Header';
import Chart from "react-apexcharts";

export default class BarGraph5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
            title: {
                text: "Averages of each process in the cycle",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '20px',
                  color:  '#263238'
                  
          
                },
            },
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["HAULING_TIME", "EMPTY_TIME", "SPOTTING_TIME", "LOADING_TIME", "DUMPING_TIME", "QUEUE_AT_LU", "WAIT_AT_DUMP"],
            axisBorder: {
                show: true,
                color: '#78909C',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
              },
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
                    text: "Averages",
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
            data: [8.87, 6.44, 0.53, 2.84, 0.75, 1.82, 0.32]
          }
        ]
      };
    }

  /**
   * this is where we grab all the events to show.
   */
  componentDidMount() {
    var that = this;
    fetch("/averages", {
      method: "GET"
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log("RES:");
      var data = JSON.parse(JSON.stringify(response));
      console.log(data);
      var y = [];
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
        className="chart1"
      />
    );
  }
}
