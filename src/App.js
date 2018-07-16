import React, { Component } from 'react';
import charData from './charData.json';
import StepZilla from 'react-stepzilla';
import './App.css';
import CareerStep from './components/CareerStep';
import _util from './_util.js';

console.log(charData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [],
      origin: [],
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
  }
  render() {
      return (
          <div id="app">
            <h3>Character Builder</h3>
            <CareerStep charData={charData}/>
            {/* <CareerAccordion careers={charData.careers}/> */}
          </div>
      );
  }
};

class OriginStep extends Component {
  render() {
    return (
      <div>
        
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