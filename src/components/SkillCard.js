import React, { Component } from 'react';
import _util from '../_util.js';

class SkillCard extends Component {
    handleClick(){}

    render() {
        var skills = this.props.skills;
        var skill = this.props.skill;
        return (
            <div className="col-lg-4" style={{ "display": "inline-block" }}>
                <div className="card text-white bg-dark mb-3" style={{ "margin": "0.5em", "height": "20em" }}>
                <h5 className="card-header font-weight-bold">
                    <ion-icon name={skills[skill].iconName} className="float-right" style={{ "verticalAlign": "top"}}></ion-icon>
                    {"\u00a0\u00a0" + _util.capitalize(skill) + "    "}
                    {(this.props.isActiveCareer || this.props.isActiveOrigin) &&
                        <span className="switch switch-sm float-right">
                            <input type="checkbox" className="switch skill-switch" id={`switch-sm-${skill}`} onClick={(x) => { this.handleClick(this.props.toggleSkillState(skill, x)) }} />
                            <label htmlFor={`switch-sm-${skill}`} style={{ "margin": "0.3em" }}></label>
                        </span>
                    }
                </h5>
                <div className="card-body">
                    <p style={{"whiteSpace": "pre-wrap", "fontSize": "1em"}}>{skills[skill].description}</p>
                </div>
                </div>
            </div>
        );
    }
};

export default SkillCard;