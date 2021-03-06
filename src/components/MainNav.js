import React, { Component } from 'react';

class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="header-nav">
                <a className="navbar-brand" href="#"><ion-icon name="planet" font-size="2em"></ion-icon>&nbsp; Uncharted Worlds</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#career-header">Career</a>
                        <a className="nav-item nav-link" href="#origin-header">Origin</a>
                        <a className="nav-item nav-link" href="#adv-header">Advancement</a>
                        <a className="nav-item nav-link" href="#ws-header">Workspace</a>
                        <a className="nav-item nav-link" href="#stats-header">Stats</a>
                        <a className="nav-item nav-link" href="#persona-header">Persona</a>
                        <a className="nav-item nav-link" href="#assets-header">Assets</a>
                        <a className="nav-item nav-link" href="#link-header">Helpful Links</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNav;