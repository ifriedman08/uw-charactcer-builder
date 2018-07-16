import React, { Component } from 'react';
import _util from '../_util.js';

class SkillCard extends React.Component {
    render() {
        return (
            // <div className="container">
            <div className="card" style={{ "height": "20em", "width": "20em", "marginRight": "1em", "marginBottom": "1em", "display": "inline-block", "verticalAlign": "top"}}>
              <div className="card-body">
                  <h6 className="card-title font-weight-bold">{_util.capitalize(this.props.skill)}</h6>
                  <p style={{"whiteSpace": "pre-wrap", "fontSize": "1em"}}>{this.props.skills[this.props.skill].description}</p>
              </div>
            </div>
          // </div>
        );
    }
};

export default SkillCard;