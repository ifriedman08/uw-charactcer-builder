import React, { Component } from 'react';
import _u from './../_util.js';

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
            var advancementList = [];
            selectedCareers.forEach(c => {
                charData.careers[c.toLowerCase()].advancementOptions.forEach(adv => {
                    advancementList.push(`${adv} (${_u.capitalize(c)})`);
                })
            });

            // charData.careers[selectedCareers[1].toLowerCase()].advancementOptions
            advContent = (
                <form>
                    <p>
                        Here is how levelling-up works in this game:<br /> You pick an advancement. When your advancement trigger happens in the game, you mark 1 experience. When you have accumulated a number of experience points <strong>equal to your current number of skills</strong>, you do the following:
                    </p>
                    <ol>
                        <li>Erase your accumulated experience points.</li>
                        <li>Choose a new skill from the career you were advancing.</li>
                        <li>Give up your current advancement method.</li>
                        <li>Choose a new advancement method, either in the same career or in a new career.</li>
                    </ol>
                    <p>
                        So make sure to pick an Advancement from a career that has a specific skill you want to pick up next.
                    </p>
                    <p>
                        Each session, I want all characters to mark experience the first time:
                    </p>
                    {advancementList.map((adv, idx) => {
                        return (<div className="custom-control-adv custom-radio" key={idx}>
                            <input type="radio" id={"customRadio" + idx} value={adv} name="customRadio" className="custom-control-adv-input form-control-lg" onClick={(x) => { this.props.setAdvancement(x.target.value) }}/>
                            <label style={{"display": "contents"}} className="custom-control-adv-label" htmlFor={"customRadio" + idx}>  {adv}</label>
                            <br />
                            <br />
                        </div>)
                    })}
                </form>
            )
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