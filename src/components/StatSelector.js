import React, { Component } from 'react';

class StatSelector extends Component {
    render() {
        var stat = this.props.stat;
        var setStat = this.props.setStatValue;
        var setStatValue = function(e){
            setStat(stat.toLowerCase(), e.target.value);
        }
        return (
            <div>
                <select className="custom-select custom-select-lg" onChange={setStatValue}>
                    <option default>Select a stat value</option>
                    <option value="+2">+2</option>
                    <option value="+1">+1</option>
                    <option value="+1">+1</option>
                    <option value="0">0</option>
                    <option value="-1">-1</option>
                </select>
            </div>
        );
    }
}

export default StatSelector;