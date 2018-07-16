import React, { Component } from 'react';
import SkillCard from './SkillCard.js';
import _util from '../_util.js';

class CareerAccordion extends React.Component {  
    // constructor(props) {
    //     super(props);
    //     // this.state = {charData}
    // }  
  
    render() {
      var careers = Object.keys(this.props.careers);
      var accContent = careers.map((career, idx) =>{
          return (
          <div className="card" career={career} idx={idx} key={idx}>
              <div className="card-header" id={`heading${idx}`}>
              <h2 className="mb-0 card-title" career={career} idx={idx}>
                  <ion-icon name={this.props.careers[career].iconName} style={{"width": "0.8em", "verticalAlign": "middle"}}></ion-icon>
                  <button className="btn btn-light" career={career} idx={idx} data-toggle="collapse" data-target={`#collapse${idx}`} aria-expanded="true" aria-controls={`collapse${idx}`}>
                    {_util.capitalize(career)}
                  </button>
              </h2>
              </div>
              <CareerAccordionPanel career={career} skills={this.props.skills} careers={this.props.careers}  idx={idx}/>
          </div>
          )
        });
      return (
        <div id="accordion" style={{"margin": "0.3em"}}>
          {accContent}
        </div>
      );
    }
  }
  
  class CareerAccordionPanel extends React.Component {
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
              {skillsDescriptions}
            </div>
          </div>
        );
    }
  };
  
  class CareerStep extends Component {
    render() {
      return (
        <div>
          <CareerAccordion careers={this.props.charData.careers} skills={this.props.charData.skills}/>
        </div>
      );
    }
  };

export default CareerStep;