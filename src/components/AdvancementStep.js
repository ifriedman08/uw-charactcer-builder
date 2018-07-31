import React, { Component } from 'react';

class AdvancementStep extends Component {
    render() {
        var selectedCareers = this.props.selectedCareers;
        var charData = this.props.charData;
        if (this.props.selectedCareers.length > 2) {
            return (
                <div style={{ "marginTop": "2em" }}>
                    <h3 id="adv-header" name="adv-header">Step 3: Select Advancement</h3>
                    <p>You have selected too many careers. Fix that in <a href="#career-header">Step 1</a>.</p>
                </div>
            );
        } else if (this.props.selectedCareers.length < 2) {
            return (
                <div style={{ "marginTop": "2em" }}>
                    <h3 id="adv-header" name="adv-header">Step 4: Select Advancement</h3>
                    <p>Select 2 careers in <a href="#career-header">Step 1</a>.</p>
                </div>
            );
        } else {
            var advancementList = charData.careers[selectedCareers[0].toLowerCase()].advancementOptions.concat(charData.careers[selectedCareers[1].toLowerCase()].advancementOptions);
            return (
                <div style={{ "marginTop": "2em" }}>
                    <h3 id="adv-header" name="adv-header">Step 4: Select Advancement</h3>
                    <p>Select from the list below, this will be the trigger that will cause you to gain experience.</p>
                    <select className="custom-select custom-select-lg mb-3" onChange={(x) => { this.props.setAdvancement(x.target.value) }}>
                        <option defaultValue>Select your advancement trigger</option>
                        {advancementList.map((adv, idx) => {
                            return <option key={idx} value={adv}>{adv}</option>
                        })}
                    </select>
                </div>
            );
        }
    }
}

export default AdvancementStep;