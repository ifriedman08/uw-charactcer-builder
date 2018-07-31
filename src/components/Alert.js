import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        var validateCareerCount = function(){
            return this.props.state.careers.length === 2 ? 
                [] : [this.props.state.careers.length, 2]
        };
        var validateOriginCount = function(){

        };
        var validateSkillCount = function(){

        };
        var generateAlertMessage = function(){
            return "Oops, mofo!";
        };
        var alertRequired = function(){
            return false;
        };
        return (
            <div>
                { alertRequired() &&
                    <div className="alert alert-danger fixed-top" role="alert" style={{ "marginTop": "4em", "left": "1em", "right":"1em"}}>
                        {generateAlertMessage()}
                    </div>
                }
            </div>
        );
    }
}

export default Alert;