import React, { Component } from 'react';
import StatSelector from "./StatSelector.js"

const statDictionary = [
    {
        "name": "Mettle",
        "description": "Courage, calm, discipline and precision. When the situation calls for reflexes, bravery, tactics, stealth or accuracy, it is a test of one's Mettle."
    },
    {
        "name": "Physique",
        "description": "Strength, beauty, athleticism and physical fitness. When success relies on acts of might, overcoming pain and fatigue, or pushing one's body to the limit, it is a test of one's Physique."
    },
    {
        "name": "Influence",
        "description": "Personality, presence, leadership and political clout. When people need to be commanded, convinced, inspired or cowed, it is a test of one's Influence."
    },
    {
        "name": "Expertise", 
        "description": "Education, cleverness, creativity and skill. When something needs to be examined, built, fixed, invented, concocted or created, it is a test of one's Expertise."
    },
    {
        "name": "Interface",
        "description": "Technology, programming and logic. When systems need to be bypassed, hacked, reprogrammed, protected or shut down, it is a test of one's Interface."
    }
]

class StatsStep extends Component {
    render() {
        return (
            <div style={{"marginTop": "2em"}}>
                <h3 id="stats-header" name="stats-header">Step 5: Distribute Stats</h3>
                <p>Now for the numbers. Assign one of the following numbers to each of your stats 
                    (Mettle, Physique, Expertise, Influence and Interface):<br/>
                    No repeats (except for the "+1").
                </p>
                <h1 className="text-center font-weight-bold">+2, +1, +1, 0, -1</h1>
                <div className="container-fluid">
                    {statDictionary.map((statData, idx) => {
                        return <StatsCard {...statData} key={idx} setStatValue={this.props.setStatValue}/>
                    })}
                </div>
            </div>
        );
    }
}

class StatsCard extends Component {
    render() {
        return (
            <div className="col-lg-4" style={{"display": "inline-block"}}>
                <div className="card" style={{"margin": "1em", "height": "20em"}}>
                    <h5 className="card-header">{this.props.name}</h5>
                    <div className="card-body">
                        <StatSelector setStatValue={this.props.setStatValue} stat={this.props.name}/>
                        <br/>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsStep;