import React, { Component } from 'react';

class AdvancementStep extends Component {
    render() {
        var selectedCareers = this.props.selectedCareers;
        var charData = this.props.charData;
        var advContent;
        
        if (this.props.selectedCareers.length > 2) {
            advContent = <p>You have selected too many careers. Fix that in <a href="#career-header">Step 1</a>.</p>
        } else if (this.props.selectedCareers.length < 2) {
            advContent = <p>Select 2 careers in <a href="#career-header">Step 1</a>.</p>
        } else {
            var advancementList = charData.careers[selectedCareers[0].toLowerCase()].advancementOptions.concat(charData.careers[selectedCareers[1].toLowerCase()].advancementOptions);
            advContent = (
            <div>
                <p>Select from the list below, this will be the trigger that will cause you to gain experience.</p>
                <select className="custom-select custom-select-lg mb-3" onChange={(x) => { this.props.setAdvancement(x.target.value) }}>
                    <option defaultValue>Select your advancement trigger</option>
                    {advancementList.map((adv, idx) => {
                        return <option key={idx} value={adv}>{adv}</option>
                    })}
                </select>
            </div>)
        }
        return (
            <div style={{ "marginTop": "2em" }}>
                <h3 id="adv-header" name="adv-header">Step 3: Select Advancement</h3>
                {advContent}
            </div>
        );
        
    }
}

export default AdvancementStep;