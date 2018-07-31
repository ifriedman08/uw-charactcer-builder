import React, { Component } from 'react';
import charData from './charData.json';
import './App.css';
import MainNav from './components/MainNav.js';
import CareerStep from './components/CareerStep';
import OriginStep from './components/OriginStep';
import StatsStep from './components/StatsStep';
import Alert from './components/Alert';
import AdvancementStep from "./components/AdvancementStep";
import _util from './_util.js';

console.log(charData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [],
      origin: [],
      skills: [],
      mettle: null,
      physique: null,
      expertise: null,
      influence: null,
      interface: null,
      workspace: [],
      advancement: [],
      description: [],
      assets: [],
      name: [],
      archetype: [],
    };
    this.toggleCareerState = this.toggleCareerState.bind(this);
    this.toggleOriginState = this.toggleOriginState.bind(this);
    this.toggleSkillState = this.toggleSkillState.bind(this);
    this.setStatValue = this.setStatValue.bind(this);
    this.setAdvancement = this.setAdvancement.bind(this);
  }

  setAdvancement(adv) {
    this.setState({
      advancement: [adv]
    })
  }

  setStatValue(stat, value) {
    this.setState({
      [stat]: value
    })
  }

  toggleCareerState(career){
    var _u = _util;
    this.setState((prevState) => (
      {careers: _u.toggleElementInArray(career, prevState.careers)}
    ));
  }
  
  toggleSkillState(skill, x){
    var _u = _util;
    this.setState((prevState) => (
      {skills: _u.toggleElementInArray(skill, prevState.skills)}
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
          <Alert state={this.state}/>
          <CareerStep 
            charData={charData} 
            toggleCareerState={this.toggleCareerState}
            toggleSkillState={this.toggleSkillState}
            selectedCareers={this.state.careers}
            selectedSkills={this.state.skills}
          />
          <OriginStep 
            charData={charData} 
            toggleOriginState={this.toggleOriginState}
            toggleSkillState={this.toggleSkillState}
            selectedOrigin={this.state.origin}
            selectedSkills={this.state.skills}
          />
          <AdvancementStep charData={charData} selectedCareers={this.state.careers} setAdvancement={this.setAdvancement}/>
          <StatsStep stats={this.state.stats} setStatValue={this.setStatValue}/>
        </div>
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