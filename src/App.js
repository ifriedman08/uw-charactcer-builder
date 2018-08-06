import React from 'react';
import charData from './charData.json';
import './App.css';
import MainNav from './components/MainNav.js';
import CareerStep from './components/CareerStep';
import OriginStep from './components/OriginStep';
import StatsStep from './components/StatsStep';
import Alert from './components/Alert';
import AdvancementStep from "./components/AdvancementStep";
import WorkspaceStep from "./components/WorkspaceStep";
import PersonaStep from "./components/PersonaStep";
import BackstoryModal from "./components/BackstoryModal";
import AssetsStep from "./components/AssetsStep";
import DownloadButton from "./components/DownloadButton";
import _util from './_util.js';

// console.log(charData);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      careers: [],
      origin: [],
      careerSkills: [],
      originSkill: [],
      mettle: null,
      physique: null,
      expertise: null,
      influence: null,
      interface: null,
      workspace: [],
      advancement: [],
      description1: [],
      description2: [],
      description3: [],
      name: []
    };

    // this.state = {
    //   "careers": ["academic", "clandestine"],
    //   "origin": ["crowded"],
    //   "careerSkills": ["education", "chemistry", "surgery"],
    //   "originSkill": ["affable"], 
    //   "mettle": "+2",
    //   "physique": "+1",
    //   "expertise": "0",
    //   "influence": "+1",
    //   "interface": "-1",
    //   "workspace": ["secure Sensors to track people and movement. Security cameras, monitoring stations, holding cells, security doors."],
    //   "advancement": ["Academic: A subject is thoroughly analyzed."],
    //   "description1": ["skinny"],
    //   "description2": ["pale"],
    //   "description3": ["hawk nosed"],
    //   "name": ["Bruce Banner"]
    // }


    this.toggleCareerState = this.toggleCareerState.bind(this);
    this.toggleOriginState = this.toggleOriginState.bind(this);
    this.toggleOriginSkillState = this.toggleOriginSkillState.bind(this);
    this.toggleCareerSkillState = this.toggleCareerSkillState.bind(this);
    this.setStatValue = this.setStatValue.bind(this);
    this.setAdvancement = this.setAdvancement.bind(this);
    this.setWorkspace = this.setWorkspace.bind(this);
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setAdvancement(adv) {
    this.setState({
      advancement: [adv]
    })
  }
  
  setWorkspace(ws) {
    this.setState({
      workspace: [ws]
    })
  }

  setStatValue(stat, value) {
    this.setState({
      [stat]: value
    })
  }

  toggleCareerState(career, isChecked){
    var _u = _util;
    this.setState((prevState) => {
      if (isChecked) {
        return {careers: _u.ensureElementPresent(career, prevState.careers)}
      } else {
        var newSelectedCareerSkills = this.state.careerSkills;
        charData.careers[career].skillOptions.forEach(cSkill => {
          this.state.careerSkills.forEach(sSkill => {
            if (sSkill === cSkill) { newSelectedCareerSkills = _u.ensureElementAbsent(sSkill, newSelectedCareerSkills)}
          })
        });
        return {
          careers: _u.ensureElementAbsent(career, prevState.careers),
          careerSkills: newSelectedCareerSkills
        }
      }
    });
  }
  
  toggleCareerSkillState(skill, isChecked){
    var _u = _util;
    this.setState((prevState) => {
      if (isChecked) {
        return {careerSkills: _u.ensureElementPresent(skill, prevState.careerSkills)}
      } else {
        return {careerSkills: _u.ensureElementAbsent(skill, prevState.careerSkills)}
      }
    });    
  }

  toggleOriginSkillState(skill, isChecked){
    var _u = _util;
    this.setState((prevState) => {
      if (isChecked) {
        return {originSkill: _u.ensureElementPresent(skill, prevState.originSkill)}
      } else {
        return {originSkill: _u.ensureElementAbsent(skill, prevState.originSkill)}
      }
    });    
  }
  
  toggleOriginState(origin, isChecked){
    var _u = _util;
    this.setState((prevState) => {
      if (isChecked) {
        return {origin: _u.ensureElementPresent(origin, prevState.origin)}
      } else {
        return {origin: _u.ensureElementAbsent(origin, prevState.origin)}
      }
    });    
  }

  setName(newName){
    this.setState({
      name: [newName]
    })
  }
  
  setDescription(desc, idx){
    this.setState({
      ['description'+(idx).toString()]: [desc]
    })
  }

  render() {
    return (
      <div id="app" style={{"marginBottom" : "5em"}}>
        <div>
          <MainNav/>
          <div id="app-body">
            <Alert state={this.state}/>
            <button type="button" style={{ "marginTop": "4em", "marginBottom": "2em" }} className="btn btn-info btn-lg btn-block col-lg-4" data-toggle="modal" data-target="#exampleModal">
              Learn the backstory!
            </button>
            <BackstoryModal/>
            <div className="dropdown-divider"></div>
            <CareerStep 
              charData={charData} 
              toggleCareerState={this.toggleCareerState}
              toggleSkillState={this.toggleCareerSkillState}
              selectedCareers={this.state.careers}
              selectedSkills={this.state.careerSkills}
            />
            <OriginStep 
              charData={charData} 
              toggleOriginState={this.toggleOriginState}
              toggleSkillState={this.toggleOriginSkillState}
              selectedOrigin={this.state.origin}
              selectedSkills={this.state.originSkill}
            />
            <AdvancementStep 
              charData={charData}
              selectedCareers={this.state.careers}
              setAdvancement={this.setAdvancement}
            />
            <div className="dropdown-divider"></div>
            <WorkspaceStep charData={charData} selectedCareers={this.state.careers} setWorkspace={this.setWorkspace}/>
            <div className="dropdown-divider"></div>
            <StatsStep stats={this.state.stats} setStatValue={this.setStatValue}/>
            <div className="dropdown-divider"></div>
            <PersonaStep 
              charData={charData} 
              selectedCareers={this.state.careers} 
              selectedOrigin={this.state.origin} 
              setDescription={this.setDescription}
              setName={this.setName}
            />
            <div className="dropdown-divider"></div>
            <AssetsStep/>
            <DownloadButton charState={this.state} charData={charData}/>
            <div className="dropdown-divider"></div>
            <h3 name="link-header" id="link-header">Helpful links and resources:</h3>
            <div className="list-group" id="list-tab" role="tablist">
              <br/>
              <a className="btn btn-info col-lg-4" href="https://drive.google.com/file/d/1agL2dGUN1oJJTgx5ySFXw6aP912XEPXS/view?usp=sharing" target="_blank" rel="noopener noreferrer">Uncharted Worlds: Rulebook PDF</a>
              <br/>
              <a className="btn btn-info col-lg-4" href="https://drive.google.com/file/d/1qYB8_8l0pOdH1Px4pqAgad3cqbrkhcRc/view?usp=sharing" target="_blank" rel="noopener noreferrer">Uncharted Worlds: Blank Character Sheet</a>
              <br/>
              <a className="btn btn-info col-lg-4" href="https://www.youtube.com/watch?v=1EtZWC68Kcg" target="_blank" rel="noopener noreferrer">Uncharted Worlds: Basic Gameplay Intro</a>
              <br/>
              <a className="btn btn-info col-lg-4" href="https://www.youtube.com/watch?v=a4vTLeXam4Q" target="_blank" rel="noopener noreferrer">Uncharted Worlds: Basic Combat Intro</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;