import React, { Component } from 'react';
import _util from '../_util.js';

class SkillCard extends Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-3 col-lg-4" style={{ "margin": "0.5em" }}>
              <h5 className="card-header font-weight-bold">
                <ion-icon name={this.props.skills[this.props.skill].iconName} className="float-right" style={{ "verticalAlign": "top"}}></ion-icon>
                    {"\u00a0\u00a0" + _util.capitalize(this.props.skill) + "    "}
              </h5>
              <div className="card-body">
                  <p style={{"whiteSpace": "pre-wrap", "fontSize": "1em"}}>{this.props.skills[this.props.skill].description}</p>
              </div>
            </div>
        );
    }
};

export default SkillCard;