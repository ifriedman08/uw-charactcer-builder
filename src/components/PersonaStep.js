import React, { Component } from 'react';

class PersonaStep extends Component {
    test(){

    }
    render() {
        var personaContent;
        
        if (this.props.selectedCareers.length != 2 || this.props.selectedOrigin.length != 1) {
            personaContent = <p>You need exactly <strong>2 careers</strong> and <strong>1 origin</strong> before you can complete this step.</p>
        } else {
            var career1 = this.props.selectedCareers[0];
            var career2 = this.props.selectedCareers[1];
            var origin = this.props.selectedOrigin[0];
            var test = 
            personaContent = (
                <div>
                    <input type="text" id="charName" onChange={(x) => {this.props.setName(x.target.value)}} className="form-control input-group-lg" placeholder="Character Name" aria-label="CharName" aria-describedby="basic-addon1"/>
                    <br/>
                    <DescriptionSelector idx="1" options={this.props.charData.careers[career1].descriptions} source={career1} setDescription={this.props.setDescription}/>
                    <br/>
                    <DescriptionSelector idx="2" options={this.props.charData.careers[career2].descriptions} source={career2} setDescription={this.props.setDescription}/>
                    <br/>
                    <DescriptionSelector idx="3" options={this.props.charData.origins[origin].descriptions} source={origin} setDescription={this.props.setDescription}/>
                </div>
            )
        }
        return (
            <div>
                <h3 id="persona-header" name="persona-header">Step 6: Select persona descriptions</h3>
                <p>Pick your name and descriptors from the selectors below.
                     These description options come from your origin and careers.</p>
                {personaContent}
            </div>
        );
    }
}

class DescriptionSelector extends Component {
    render() {
        var idx = this.props.idx;
        return (
            <div>
                <select className="custom-select custom-select-lg" onChange={(x) => {
                    this.props.setDescription(x.target.value, idx);
                }}>
                    <option default>Select a descriptor</option>
                    {this.props.options.map((opt, idx) => {
                        return <option key={idx} value={opt}>{opt}</option>
                    })}
                </select>
            </div>
        );
    }
}

export default PersonaStep;