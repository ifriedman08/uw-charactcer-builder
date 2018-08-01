import React, { Component } from 'react';
import _u from '../_util.js'

class WorkspaceStep extends Component {
    render() {
        var selectedCareers = this.props.selectedCareers;
        var charData = this.props.charData;
        var wsContent;

        if (this.props.selectedCareers.length > 2) {
            wsContent = <p>You have selected too many careers. Fix that in <a href="#career-header">Step 1</a>.</p>
        } else if (this.props.selectedCareers.length < 2) {
            wsContent = <p>Select 2 careers in <a href="#career-header">Step 1</a>.</p>
        } else {
            var workspaceList = charData.careers[selectedCareers[0].toLowerCase()].workspaceOptions.concat(charData.careers[selectedCareers[1].toLowerCase()].workspaceOptions);
            wsContent = (
                <div>
                    <p>Every character has a workspace. 
                        This is their very own work environment, where they can go about their tasks. 
                        If the party owns a ship, this workspace is added to the ship's capabilities. 
                        Otherwise, the workspace exists as a structure or sector in the current setting.
                    </p>
                    <select className="custom-select custom-select-lg mb-3" onChange={(x) => { this.props.setWorkspace(x.target.value) }}>
                        <option defaultValue>Select your workspace</option>
                        {workspaceList.map((ws, idx) => {
                            return <option key={idx} value={ws.name + ' ' + ws.description}>{_u.capitalize(ws.name)} : {ws.description}</option>
                        })}
                    </select>
                </div>)
        }
        return (
            <div style={{ "marginTop": "2em" }}>
                <h3 id="ws-header" name="ws-header">Step 4: Select Workspace</h3>
                {wsContent}
            </div>
        );

    }
}

export default WorkspaceStep;