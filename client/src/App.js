import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
    // const res = fetch('/productivity');
    // console.log(res);
  }
  
render() {
    return (
      <React.Fragment>
        < Bar />
      </React.Fragment>
    );
  }
}

export default App;