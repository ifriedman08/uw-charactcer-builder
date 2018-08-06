import React, { Component } from 'react';

class DownloadButton extends Component {
    constructor(props) {
        super(props);
        this.errorMessageList = [];
    }

    validateAll(state) {
        var allValidators = [
            "validateCareers",
            "validateOrigin",
            "validateSkills",
            "validateAdvancement",
            "validateWorkspace",
            "validateStats",
            "validatePersona"
        ];
        return allValidators.every(validator => {
            return this[validator](state);
        });   
    }

    validateCareers(state){
        if (state.careers.length === 2 ) {
            return true;
        } else {
            this.errorMessageList.push("Please select 2 Careers in Step 1.")
            return false;
        }
    }
    
    validateOrigin(state){ 
        if (state.origin.length === 1) {
            return true;
        } else {
            this.errorMessageList.push("Please select 1 Origin in Step 2.")
            return false;
        }    
    }

    validateSkills(state){
        if (state.careerSkills.length === 3 && state.originSkill.length === 1) {
            return 1;
        }

        if (state.careerSkills.length < 3) {
            this.errorMessageList.push("You have not selected enough Career skills (3) in Step 1.");
            return false;
        } else if (state.careerSkills.length > 3) {
            this.errorMessageList.push("You have not selected enough Career skills (3) in Step 1.");
            return false;
        }

        if (state.originSkill.length < 1) {
            this.errorMessageList.push("Please select exactly 1 Origin Skill in Step 2.");
            return false;
        } 
    }
    
    validateAdvancement(state){ 
        if (state.advancement.length > 0 && state.advancement[0].length > 0){
            return true
        } else {
            this.errorMessageList.push("Please select exactly 1 Advancement in Step 3.");
            return false;
        }
    }
    
    validateWorkspace(state){
        if (state.workspace.length > 0 && state.workspace[0].length > 0) {
            return true
        } else {
            this.errorMessageList.push("Please select exactly 1 Workspace in Step 4.");
            return false;
        }    
    }

    validateStats(state) {
        var arrayHasRepeats = function (array) {
            var counter = {};
            for (let idx = 0; idx < array.length; idx++) {
                const stat = array[idx];
                if (typeof counter[stat] !== "undefined") { counter[stat]++ }
                else { counter[stat] = 1 }
                if ((counter[stat] > 1 && stat !== "1") || counter[stat] > 2) {
                    return true
                }
            }
            return false
        }
        var expected = ["-1", "0", "+1", "+1", "+2"].sort();
        var result = [
            state.mettle,
            state.physique,
            state.interface,
            state.influence,
            state.expertise
        ]
        // console.log("------ expected:", expected)
        // console.log("------ result:", result.sort())
        // console.log("same:", expected === result.sort());
        
        if (expected.join() === result.sort().join()) {
            return true;
        } else {
            if (result.indexOf('') > -1 || result.indexOf(null) > -1) {
                this.errorMessageList.push("You are missing at least one Stat in Step 5. Please assign all 5 Stats.");
            } else if (arrayHasRepeats(result)) {
                this.errorMessageList.push("There are invalid duplicate Stats in Step 5. '+1' should be the only repeat.");
            }
            return false;
        }
    }
    
    validatePersona(state){
        var descriptions = [state.description1[0]].concat(state.description2[0]).concat(state.description3[0]);
        var name = state.name;
        // console.log('----------- name:', name);
        // console.log('----------- descriptions:',descriptions);
        if ((name.length > 0 && name[0].length > 0) && descriptions.indexOf('') === -1 && !descriptions.some(d => { return d === undefined })) {
            return true;
        } else if ( name.length === 0 || name[0].length === 0 ) {
            this.errorMessageList.push("Please name your character in Step 6.");
            return false;
        } else if ((state.description1.length !== 1 || state.description2.length !== 1 || state.description3.length !== 1) || (descriptions.indexOf('') > -1 || descriptions.some(d => { return d === undefined }))) {
            this.errorMessageList.push("Please pick 3 descriptors in Step 6.");
            return false;
        } else {
            console.log('weeeeeeeird');
        }
    }

    render() {
        this.errorMessageList = [];
        // console.log("########### VALID DATA: " + this.validateAll(this.props.charState));
        // console.log("\t ErrMsg:", this.errorMessageList);
        var btnMessg = this.validateAll(this.props.charState) ? "Download my sheet!" : this.errorMessageList[0] ;
        var isDisabled = !this.validateAll(this.props.charState) ? "disabled " : "";        
        var btnClass = !this.validateAll(this.props.charState) ? "btn-dark" : "btn-success";
        if (this.validateAll(this.props.charState)) {
            localStorage.uwCharData = JSON.stringify(this.props.charState);
            localStorage.skillInfo = JSON.stringify({
                [this.props.charState.careerSkills[0]]: this.props.charData.skills[this.props.charState.careerSkills[0]].description,
                [this.props.charState.careerSkills[1]]: this.props.charData.skills[this.props.charState.careerSkills[1]].description,
                [this.props.charState.careerSkills[2]]: this.props.charData.skills[this.props.charState.careerSkills[2]].description,
                [this.props.charState.originSkill[0]]: this.props.charData.skills[this.props.charState.originSkill[0]].description
            })
        }      
        return (
            <div className="fixed-bottom">
                <a id="submit" href="#" style={{"borderRadius": "0"}} className={"btn btn-lg " + btnClass + " btn-block " + isDisabled }>{btnMessg}</a>
            </div>
        );
    }
}

export default DownloadButton;