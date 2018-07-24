import React, { Component } from 'react';
import charData from './charData.json';
import './App.css';
import MainNav from './components/MainNav.js';
import CareerStep from './components/CareerStep';
import OriginStep from './components/OriginStep';
import _util from './_util.js';

console.log(charData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [],
      origin: [],
      skills: [],
      stats: {
        mettle: null,
        physique: null,
        expertise: null,
        influence: null,
        interface: null
      },
      workspace: [],
      advancement: [],
      description: [],
      assets: [],
      name: [],
      archetype: [],
    };
    this.toggleCareerState = this.toggleCareerState.bind(this)
    this.toggleOriginState = this.toggleOriginState.bind(this)
  }

  toggleCareerState(career){
    var _u = _util;
    this.setState((prevState) => (
      {careers: _u.toggleElementInArray(career, prevState.careers)}
    ));
  }
  
  toggleSkillState(skill){
    var _u = _util;
    this.setState((prevState) => (
      {careers: _u.toggleElementInArray(skill, prevState.skills)}
    ));
  }

  toggleOriginState(origin){
    var _u = _util;
    this.setState((prevState) => (
      {origin: _u.toggleElementInArray(origin, prevState.origin)}
    ));
  }

  render() {
    return (
      <div id="app">
        <div>
          <MainNav/>
          <CareerStep 
            charData={charData} 
            toggleCareerState={this.toggleCareerState}
            selectedCareers={this.state.careers}
            selectedSkills={this.state.skills}
            />
          <OriginStep 
            charData={charData} 
            toggleOriginState={this.toggleOriginState}
          />
        </div>
      </div>
    );
  }
};

class StatsStep extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
};

class AdvancementStep extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
};

class WorkspaceStep extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
};

class DescriptionStep extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
};

class AssetsStep extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
};

class FinalStep extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
};

export default App;