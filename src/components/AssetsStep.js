import React, { Component } from 'react';
import assetData from '../assetData.json';

class AssetsStep extends Component {
    render() {
        return (
            <div>
                <h3 name="assets-header" id="assets-header">Step 7: Select Assets</h3>
                <p>
                    Every character starts with:
                    <ul>
                        <li>One Class 0 Attire (basic clothes)</li>
                        <li>Two Class 1 asset</li>
                        <li>One Class 2 asset</li>
                    </ul>
                    This will involve designing your own items (including weapons, attire and armor, vehicles, cargo, crew and/or tool kits) using bases and tags (starting on page 113 of <a href="https://drive.google.com/file/d/1agL2dGUN1oJJTgx5ySFXw6aP912XEPXS/view?usp=sharing">the rulebook</a>). 
                </p>
            </div>
        );
    }
}

// class class0AttireSelection extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }


// class class1AssetSelection extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// class class2AssetSelection extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

export default AssetsStep;