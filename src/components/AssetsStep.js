import React, { Component } from 'react';
// import assetData from '../assetData.json';

class AssetsStep extends Component {
    render() {
        return (
            <div>
                <h3 name="assets-header" id="assets-header">Step 7: Select Assets</h3>
                <p>
                    Every character starts out with:
                </p>
                <ul>
                    <li>One Class 0 "attire" (basic clothes)</li>
                    <li>Two Class 1 assets</li>
                    <li>One Class 2 asset</li>
                </ul>
                <p>
                    This will involve designing your own items 
                    (including weapons, attire and armor, vehicles, cargo, crew and/or tool kits) 
                    using base designs and tags (found starting on page 113 of 
                    <a href="https://drive.google.com/file/d/1agL2dGUN1oJJTgx5ySFXw6aP912XEPXS/view?usp=sharing">the Rulebook</a>). 
                    This part is complex enough I think it's worth doing together in person. 
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