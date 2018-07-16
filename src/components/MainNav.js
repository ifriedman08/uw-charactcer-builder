import React, { Component } from 'react';

class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#"><ion-icon name="planet" font-size="2em"></ion-icon>&nbsp; Uncharted Worlds</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Career</a>
                        <a className="nav-item nav-link active" href="#">Origin</a>
                        <a className="nav-item nav-link" href="#">Stats</a>
                        <a className="nav-item nav-link" href="#">Assets</a>
                        <a className="nav-item nav-link" href="#">Persona</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNav;