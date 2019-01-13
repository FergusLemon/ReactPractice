import React, { Component } from 'react';
import Calendar from 'react-calendar';
//import logo from './logo.svg';
//import './App.css';

//class App extends Component {
//  render() {
//    return (<h1>Hello, World!</h1>);
//  }
//}

class App extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default App;
