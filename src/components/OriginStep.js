import React, { Component } from 'react';
import SkillCard from './SkillCard.js';
import _util from '../_util.js';
import '../styles/switches.css';

class OriginAccordion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var origins = Object.keys(this.props.origins);
        var accContent = origins.map((origin, idx) => {
            return (
                <div className="card" origin={origin} idx={idx} key={idx}>
                    <OriginAccordionHeader
                        idx={idx}
                        origin={origin}
                        skills={this.props.skills}
                        origins={this.props.origins} 
                        toggleOriginState={this.props.toggleOriginState}
                        isActive={this.props.selectedOrigin.includes(origin)}
                        selectedSkills={this.props.selectedSkills}
                        origins={this.props.origins}
                        toggleOriginState={this.props.toggleOriginState}
                    />
                    <OriginAccordionPanel 
                        origin={origin} 
                        skills={this.props.skills} 
                        origins={this.props.origins} 
                        idx={idx} 
                        isActiveOrigin={this.props.selectedOrigin.includes(origin)}
                        selectedSkills={this.props.selectedSkills}
                        toggleSkillState={this.props.toggleSkillState}
                    />
                </div>
            )
        });
        return (
            <div style={{ "paddingTop": "2em" }}>
                <h3 id="origin-header">Step 2: Select Origin</h3>
                <p>Pick a single origin that most suits your character. 
                    This is the character's childhood and formative years. 
                    Choose one of the four skills offered by your origin. 
                    Note that a character cannot take the same skill twice, even if both their career and origin offers it.</p>
                <div name="origin-accordion" id="origin-accordion" style={{ "margin": "0.3em" }}>
                    {accContent}
                </div>
            </div>
        );
    }
};

class OriginToggleSwitch extends Component {
    constructor(props) {
        super(props);
    };

    handleClick(params) { };

    render() {
        var origin = this.props.origin;
        return (
            <span className="switch switch-lg float-right">
                <input type="checkbox" className="switch origin-switch inactive" id={`switch-lg-${origin}`} onClick={() => { this.handleClick(this.props.toggleOriginState(origin)) }} />
                <label htmlFor={`switch-lg-${origin}`} style={{ "margin": "0.3em" }}></label>
            </span>
        );
    }
}

class OriginAccordionHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var idx = this.props.idx;
        var origin = this.props.origin;
        return (
            <div className="card-header" id={`heading${idx}`}>
                <h2 className="mb-0 card-title" origin={origin} idx={idx}>
                    <ion-icon name={this.props.origins[origin].iconName} style={{ "width": "0.8em", "verticalAlign": "middle" }}></ion-icon>
                    <button className="btn btn-light btn-lg" origin={origin} idx={idx} data-toggle="collapse" data-target={`#origin-collapse${idx}`} aria-expanded="true" aria-controls={`origin-collapse${idx}`}>
                        {_util.capitalize(origin)}
                    </button>
                    <OriginToggleSwitch origin={origin} toggleOriginState={this.props.toggleOriginState} />
                </h2>
            </div>
        );
    }
}


class OriginAccordionPanel extends React.Component {
    constructor(props) {
        super(props);
    };

    toggleSwitch(params) {
        console.log('toggled!');
    };

    render() {
        var skillsDescriptions = this.props.origins[this.props.origin].skillOptions.map((skill, idx) => {
            return <SkillCard skill={skill} skills={this.props.skills} key={idx} isActiveOrigin={this.props.isActiveOrigin} toggleSkillState={this.props.toggleSkillState}/>;
        });
        return (
            <div id={`origin-collapse${this.props.idx}`} className="collapse" aria-labelledby={`heading${this.props.idx}`} data-parent="#origin-accordion">
                <div className="card-body">
                    {this.props.origins[this.props.origin].summary}
                    <br />
                    <br />
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

class OriginStep extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <OriginAccordion
                    origins={this.props.charData.origins}
                    skills={this.props.charData.skills}
                    toggleSkillState={this.props.toggleSkillState}
                    toggleOriginState={this.props.toggleOriginState}
                    selectedOrigin={this.props.selectedOrigin}
                    selectedSkills={this.props.selectedSkills} 
                />
            </div>
        );
    }
};

export default OriginStep;