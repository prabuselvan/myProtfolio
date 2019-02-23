import React, { Component } from 'react';
import About from './components/about';
import Exp from './components/experience';
import Edu from './components/education';
import Skills from './components/skills';
import './App.css';

class App extends Component {

  state= {
    id_about:'About',
    id_exp:'Experience',
    id_edu:'Education',
    id_skills: 'Skills'
  }

  render() {
    const {id_about, id_exp, id_edu, id_skills}=this.state;
    return (
        <div>
          <About About={id_about} Experience={id_exp} Education={id_edu} Skills={id_skills} />
          <Exp Experience={this.state.id_exp}/>
          <Edu Education={this.state.id_edu}/>
          <Skills Skills={this.state.id_skills}/>
        </div>
    );
  }
}

export default App;
