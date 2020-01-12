import React, { Component } from 'react';
//import Header from './components/Header';
import Chart from "react-apexcharts";

export default class BarGraph4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [],
            options: {
              title: {
                text: "Percentage of Useage for Truck Types",
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
                width: 380,
                type: 'pie',
              },
              labels: [],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
        }
    }

  /**
   * this is where we grab all the events to show.
   */
  componentDidMount() {
    var self = this;
    fetch("/truckType", {
      method: "GET"
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log("RES:");
      var data = JSON.parse(JSON.stringify(response));
      console.log(data);
      var x = [];
      var y = [];
      var z = [];
      var count = 0;
      for (var i = 0; i < data.length; i++) {
        y.push(data[i].CountEquip);
        count += data[i].CountEquip;
        x.push("Truck Type " + data[i].Equip);
      }
      for (var i = 0; i < y.length; i++) {
          z.push((y[i] / count) * 100);
      }
      console.log(z);
      self.setState(prevState => ({
        options: {
          ...prevState.options,           // copy all other key-value pairs of food object
          labels: x
        },
        series: z
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
        type="pie"
        width="500"
        className="chart1"
      />
    );
  }
}
