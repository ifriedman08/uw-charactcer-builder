import React, { Component } from 'react';
import _util from '../_util.js';

class SkillCard extends Component {
    render() {
        var skills = this.props.skills;
        var skill = this.props.skill;
        return (
            <div className="card text-white bg-dark mb-3 col-lg-4" style={{ "margin": "0.5em" }}>
              <h5 className="card-header font-weight-bold">
                <ion-icon name={skills[skill].iconName} className="float-right" style={{ "verticalAlign": "top"}}></ion-icon>
                {"\u00a0\u00a0" + _util.capitalize(skill) + "    "}
                { this.props.isActiveCareer &&
                    <span className="switch switch-sm float-right">
                        <input type="checkbox" className="switch skill-switch" id={`switch-sm-${skill}`} onClick={() => { }} />
                        <label htmlFor={`switch-sm-${skill}`} style={{ "margin": "0.3em" }}></label>
                    </span>
                }
              </h5>
              <div className="card-body">
                  <p style={{"whiteSpace": "pre-wrap", "fontSize": "1em"}}>{skills[skill].description}</p>
              </div>
            </div>
        );
    }
};

export default SkillCard;