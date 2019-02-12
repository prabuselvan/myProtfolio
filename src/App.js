import React, { Component } from 'react';
import About from './components/about';
import Exp from './components/experience';
import './App.css';

class App extends Component {

  render() {
    const id = '£Experience_id';
    return (
        <div>
          <About id={id}/>
          <Exp id={id}/>
        </div>
    );
  }
}

export default App;
