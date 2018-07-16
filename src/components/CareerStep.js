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
            <CareerAccordionHeader career={career} skills={this.props.skills} careers={this.props.careers} idx={idx}/>
            <CareerAccordionPanel career={career} skills={this.props.skills} careers={this.props.careers}  idx={idx}/>
          </div>
        )
      });
      return (
      <div style={{"paddingTop": "65px"}}>
        <h3>Step 1: Select Careers</h3>
        <p>Pick 2 careers from the options below by flipping the switches. The combination will determine your archetype, your skill choices, your methods and the way you approach challenges and opportunities. Your combined careers will give you access to a total of 10 skills. Choose any 3 of them. For example, I could pick Clandestine (Stealth) and Explorer (Recklessness and Survival)</p>
        <div id="accordion" style={{"margin": "0.3em"}}>
          {accContent}
        </div>
      </div>
    );
  }
};

class CareerToggleSwitch extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(params) {
    event.preventDefault();
    console.log();
  }

  render() {
    return (
      <div>
        <span className="switch switch-lg float-right">
          <input type="checkbox" className="switch" id={`switch-lg-${career}`} />
          <label htmlFor={`switch-lg-${career}`} style={{ "margin": "0.3em" }}></label>
        </span>
      </div>
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
          <button className="btn btn-light btn-lg" career={career} idx={idx} data-toggle="collapse" data-target={`#collapse${idx}`} aria-expanded="true" aria-controls={`collapse${idx}`}>
            {_util.capitalize(career)}
          </button>
          <CareerToggleSwitch career={career}/>
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
        return <SkillCard skill={skill} skills={this.props.skills} key={idx}/>;
      });
      return (
        <div id={`collapse${this.props.idx}`} className="collapse" aria-labelledby={`heading${this.props.idx}`} data-parent="#accordion">
          <div className="card-body">
            {this.props.careers[this.props.career].summary}
            <br/>
            <br/>
            <div className="container-fluid">
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
        <CareerAccordion careers={this.props.charData.careers} skills={this.props.charData.skills}/>
      </div>
    );
  }
};

export default CareerStep;