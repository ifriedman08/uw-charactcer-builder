import React, { Component } from 'react';
import SkillCard from './SkillCard.js';
import _util from '../_util.js';
import '../styles/switches.css';

class CareerAccordion extends React.Component {  
  constructor(props) {
      super(props);
  }  

  render() {
    var careers = Object.keys(this.props.careers);
    var accContent = careers.map((career, idx) =>{
        return (
          <div className="card" career={career} idx={idx} key={idx}>
            <CareerAccordionHeader 
              idx={idx} 
              career={career} 
              skills={this.props.skills} 
              careers={this.props.careers} 
              toggleCareerState={this.props.toggleCareerState}
              isActive={this.props.selectedCareers.includes(career)}
              selectedSkills={this.props.selectedSkills}
            />
            <CareerAccordionPanel 
              career={career} 
              skills={this.props.skills} 
              careers={this.props.careers}  
              idx={idx} 
              isActiveCareer={this.props.selectedCareers.includes(career)}
              selectedSkills={this.props.selectedSkills}
              toggleSkillState={this.props.toggleSkillState}
            />
          </div>
        )
      });
      return (
      <div style={{"paddingTop": "65px"}}>
        <h3 id="career-header">Step 1: Select Careers</h3>
          <p>Pick 2 <strong>careers</strong> from the options below by flipping the switches. 
            These careers are basically classes from D&D. 
            The combination will determine your archetype, your skill choices, 
            your methods and the way you approach challenges and opportunities in the game. 
            Each career gives you 5 skill options for a <strong>total of 10</strong>. 
            Choose <strong>any 3 skills</strong> from among those 10. 
            For example: Clandestine (Stealth) and Explorer (Recklessness and Survival)</p>
          <div name="career-accordion" id="career-accordion" style={{"margin": "0.3em"}}>
          {accContent}
        </div>
      </div>
    );
  }
};

class CareerToggleSwitch extends Component {
  constructor(props) {
    super(props);
  };

  handleClick(params) {};

  render() {
    var career = this.props.career;
    return (
      <span className="switch switch-lg float-right">
        <input type="checkbox" className="switch career-switch inactive" id={`switch-lg-${career}`} onClick={() => {this.handleClick(this.props.toggleCareerState(career))}}/>
        <label htmlFor={`switch-lg-${career}`} style={{ "margin": "0.3em" }}></label>
      </span>
    );
  }
}

class CareerAccordionHeader extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var idx = this.props.idx;
    var career = this.props.career;
    return (
      <div className="card-header" id={`heading${idx}`}>
        <h2 className="mb-0 card-title" career={career} idx={idx}>
          <ion-icon name={this.props.careers[career].iconName} style={{ "width": "0.8em", "verticalAlign": "middle" }}></ion-icon>
          <button className="btn btn-light btn-lg" career={career} idx={idx} data-toggle="collapse" data-target={`#career-collapse${idx}`} aria-expanded="true" aria-controls={`career-collapse${idx}`}>
            {_util.capitalize(career)}
          </button>
          <CareerToggleSwitch career={career} toggleCareerState={this.props.toggleCareerState}/>
        </h2>
      </div>
    );
  }
}

  
class CareerAccordionPanel extends React.Component {
  constructor(props) {
    super(props);
  };
  
  toggleSwitch(params) {
    console.log('toggled!');
  };

  render() {
      var skillsDescriptions = this.props.careers[this.props.career].skillOptions.map((skill, idx) => {
        return <SkillCard skill={skill} skills={this.props.skills} key={idx} isActiveCareer={this.props.isActiveCareer} toggleSkillState={this.props.toggleSkillState}/>;
      });
      return (
        <div id={`career-collapse${this.props.idx}`} className="collapse" aria-labelledby={`heading${this.props.idx}`} data-parent="#career-accordion">
          <div className="card-body">
            {this.props.careers[this.props.career].summary}
            <br/>
            <br/>
            <div className="container-fluid">
              <h4>Skills:</h4>
              <div className="row justify-content-left">
                {skillsDescriptions}
              </div>
            </div>
          </div>
        </div>
      );
  }
};

class CareerStep extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    return (
      <div>
        <CareerAccordion 
          careers={this.props.charData.careers} 
          skills={this.props.charData.skills}
          toggleCareerState={this.props.toggleCareerState}
          toggleSkillState={this.props.toggleSkillState}
          selectedCareers={this.props.selectedCareers}
          selectedSkills={this.props.selectedSkills} 
        />
      </div>
    );
  }
};

export default CareerStep;